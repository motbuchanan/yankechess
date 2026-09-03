/* Yanke Chess service worker — NETWORK-FIRST.
   Online: every request hits the network; good responses are cached as they pass.
   Offline: falls back to the cache. Bump CACHE on EVERY deploy so installed phones update.
   CACHE name matches the version badge in index.html. */
const CACHE="yankechess-v1.2-sep3-2026";
const CORE=["index.html","manifest.webmanifest","logo.png","icon192.png","icon512.png","iconmaskable512.png","favicon.png"];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(
    ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))
  )).then(()=>self.clients.claim()));
});
function stripped(req){const u=new URL(req.url);return u.origin+u.pathname;}
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET")return;
  const u=new URL(req.url);
  if(u.origin!==location.origin)return;
  e.respondWith(
    fetch(req).then(resp=>{
      if(resp&&resp.ok){const cl=resp.clone();caches.open(CACHE).then(c=>c.put(stripped(req),cl));}
      return resp;
    }).catch(()=>caches.match(stripped(req)).then(m=>m||caches.match("index.html")))
  );
});
