const { spawn } = require('child_process');
const WebSocket = require('ws');
const port = 9270;
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [`--headless=new`,`--disable-gpu`,`--no-sandbox`,`--user-data-dir=/tmp/chrome-nav-${port}`,`--remote-debugging-port=${port}`,'http://localhost:5600/about/'],{stdio:'ignore'});
const sleep = ms => new Promise(r=>setTimeout(r,ms));
(async()=>{
  for(let i=0;i<12;i++){
    try{
      const tabs = await (await fetch(`http://localhost:${port}/json`)).json();
      const t = tabs.find(x=>x.url && x.url.includes('5600'));
      if(t){
        const ws2 = new WebSocket(t.webSocketDebuggerUrl);
        await new Promise(r=>ws2.on('open',r));
        let id=0;
        const send=(m,p)=>{id++;ws2.send(JSON.stringify({id,method:m,params:p||{}}));};
        const result = new Promise(resolve=>{
          ws2.on('message',d=>{
            const m=JSON.parse(d);
            if(m.id===1 && m.result) resolve(m.result.result && m.result.result.value);
          });
        });
        send('Runtime.evaluate',{expression:`(async()=>{
          await new Promise(r=>setTimeout(r,2500));
          var b=document.querySelector('.navbar-lang-switch');
          var out={found:!!b,label:b&&b.querySelector('.navbar-lang-label')?b.querySelector('.navbar-lang-label').textContent:null,path:window.location.pathname};
          try{ if(b._langHandler) b._langHandler(); else b.click(); }catch(e){out.err=e.message}
          await new Promise(r=>setTimeout(r,4000));
          out.finalPath=window.location.pathname;
          return JSON.stringify(out);
        })()`,awaitPromise:true,returnByValue:true});
        const v = await result;
        console.log(v);
        chrome.kill();process.exit(0);
      }
    }catch(e){}
    await sleep(500);
  }
  console.log('no tab');process.exit(1);
})();
