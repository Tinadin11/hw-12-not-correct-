import{a as y,i as c,S as h}from"./assets/vendor-C9idZmnG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const b="47181465-58855b534a7ed572abb95719a";async function w(r,t){try{const o=await y.get("https://pixabay.com/api/",{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});if(o.status!==200||!o.data)throw new Error("Error receiving data from API");return o.data}catch(o){c.error({title:"Error",message:"Sorry! Connection problems. Please try later!",position:"bottomRight"}),console.error(o.message)}}function L(r){return r.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:s,comments:a,downloads:g})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${t}" alt="${i}" width="360" />
          </a>
          <ul class="info-list">
            <li class="info-item">
              <h2 class="subtitle">Likes</h2>
              <p class="info">${e}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Views</h2>
              <p class="info">${s}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Comments</h2>
              <p class="info">${a}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Downloads</h2>
              <p class="info">${g}</p>
            </li>
          </ul>
        </li>`).join("")}function d(r){const t=document.querySelector(".button-load");t.style.display=r?"block":"none"}function l(r){const t=document.querySelector("#loading-message");t.style.display=r?"block":"none"}function P(){iziToast.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}),d(!1)}let u=1,n="";const S=document.querySelector(".form-search"),m=document.querySelector(".gallery"),f=document.querySelector(".button-load"),E=document.querySelector(".input-search");f.style.display="none";S.addEventListener("submit",async r=>{if(r.preventDefault(),m.innerHTML="",f.style.display="none",l(!0),n=E.value.trim(),!n){c.warning({title:"Caution",message:"Please complete the field!"});return}u=1,await p(n,u)});async function p(r,t){try{const o=await w(r,t),i=Math.ceil(o.totalHits/15);if(!o.hits.length){c.error({title:"Error",message:`No results found for "${n}". Please try again.`}),d(!1);return}m.insertAdjacentHTML("beforeend",L(o.hits)),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),t>=i?P():d(!0),l(!1),window.scrollBy({top:document.querySelector(".gallery-item").getBoundingClientRect().height*2,left:0,behavior:"smooth"})}catch{c.error({title:"Error",message:"Sorry, something went wrong!",position:"bottomRight"}),l(!1)}}f.addEventListener("click",async()=>{u+=1,l(!0),await p(n,u),l(!1)});
//# sourceMappingURL=index.js.map
