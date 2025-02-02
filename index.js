import{a as y,i as c,S as h}from"./assets/vendor-C9idZmnG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const b="47181465-58855b534a7ed572abb95719a";async function w(t,o){try{const r=await y.get("https://pixabay.com/api/",{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});if(r.status!==200||!r.data)throw new Error("Error receiving data from API");return r.data}catch(r){c.error({title:"Error",message:"Sorry! Connection problems. Please try later!",position:"bottomRight"}),console.error(r.message)}}function S(t){return t.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:s,comments:n,downloads:p})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${o}" alt="${i}" width="360" />
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
              <p class="info">${n}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Downloads</h2>
              <p class="info">${p}</p>
            </li>
          </ul>
        </li>`).join("")}function d(t){const o=document.querySelector(".button-load");o.style.display=t?"block":"none"}function l(t){const o=document.querySelector("#loading-message");o.style.display=t?"block":"none"}function L(){iziToast.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}),d(!1)}let u=1,a="";const E=document.querySelector(".form-search"),m=document.querySelector(".gallery"),f=document.querySelector(".button-load"),P=document.querySelector(".input-search");f.style.display="none";E.addEventListener("submit",async t=>{if(t.preventDefault(),m.innerHTML="",f.style.display="none",l(!0),a=P.value.trim(),!a){c.warning({title:"Caution",message:"Please complete the field!"});return}u=1,await g(a,u)});async function g(t,o){try{const r=await w(t,o),i=Math.ceil(r.totalHits/15);if(!r.hits.length){c.error({title:"Error",message:`No results found for "${a}". Please try again.`}),d(!1);return}m.insertAdjacentHTML("beforeend",S(r.hits)),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),o>=i?L():d(!0),l(!1),window.scrollBy({top:document.querySelector(".gallery-item").getBoundingClientRect().height*2,left:0,behavior:"smooth"})}catch{c.error({title:"Error",message:"Sorry, something went wrong!",position:"bottomRight"}),l(!1)}}f.addEventListener("click",async()=>{u+=1,l(!0),await g(a,u),l(!1)});function q(){const t=document.querySelector("#vanta-bg");t&&VANTA.BIRDS({el:t,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,backgroundColor:1641840,color1:13223,color2:13618155,colorMode:"lerp",birdSize:2.2,wingSpan:22,speedLimit:5,separation:54,alignment:60,cohesion:37,quantity:4,backgroundAlpha:.64})}window.onload=q;
//# sourceMappingURL=index.js.map
