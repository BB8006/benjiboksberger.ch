(function(){
 // Privacy-friendly analytics: GoatCounter, no cookies. Only runs on the live domain.
 if(location.hostname!=='benjiboksberger.ch'&&location.hostname!=='www.benjiboksberger.ch')return;
 // Own visits: open the site once with #nocount to stop counting this browser (#count turns it back on).
 try{if(location.hash==='#nocount')localStorage.setItem('cfg-nocount','1');if(location.hash==='#count')localStorage.removeItem('cfg-nocount');if(localStorage.getItem('cfg-nocount')==='1')return;}catch(e){}
 var E='https://bb8006.goatcounter.com/count';
 var q=new URLSearchParams(location.search);
 var ref=q.get('ref')||q.get('utm_source')||document.referrer||'';
 function send(p,t,ev){var i=new Image();i.src=E+'?p='+encodeURIComponent(p)+'&t='+encodeURIComponent(t)+'&r='+encodeURIComponent(ev?'':ref)+(ev?'&e=true':'')+'&s='+screen.width+'&rnd='+Math.random().toString(36).slice(2);}
 send(location.pathname,document.title,false);
 // Returning visits: one anonymous note in this browser, no personal data.
 try{var k='cfg-seen',d=localStorage.getItem(k),today=new Date().toISOString().slice(0,10);
  if(d&&d!==today)send('returning-visit','Returning visit',true);
  localStorage.setItem(k,today);}catch(e){}
})();
