import{a4 as r}from"./app-DTqmWj8A.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://example.helpyou666.com/"};const i=async()=>{try{const{pageviewCount:e}=await r(()=>import("./app-DTqmWj8A.js").then(t=>t.a5),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{i as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
