(()=>{"use strict";let e="mumbai";const t=e=>{let t=e-273.15;return Math.round(t)},n=e=>{let t=1.8*(e-273)+32;return Math.round(t)},a=()=>{e=document.getElementById("searchBar").value||e,async function(e){let t=await fetch(e,{mode:"cors"});return await t.json()}(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=cc4487625a762b0487d81b80ddd64e2b`).then((e=>{o(e),s(e)}))},s=e=>{const t=document.getElementById("content");let n=e.weather[0].main;"Haze"===n?t.style.backgroundImage="url('../src/assets/jaleel-akbash-Slh0Tx1MRNA-unsplash.jpg')":"Rain"===n||"Drizzle"===n?t.style.background="url('../src/assets/anna-atkins-rNBaaxyeWWM-unsplash.jpg')":"Clouds"===n?t.style.background="url('../src/assets/rodion-kutsaev-8P-uQaTd8rw-unsplash.jpg')":"Mist"===n&&(t.style.background="url('../src/assets/dave-hoefler-od287vQyufw-unsplash.jpg')")},o=e=>{const a=document.querySelector(".cityName"),s=document.querySelector(".temperature"),o=document.querySelector(".atmosphere"),c=document.getElementById("check"),r=document.querySelector(".feelsLike .info"),l=document.querySelector(".humidity .info"),u=document.querySelector(".windSpeed .info"),i=document.querySelector(".visibility .info");"404"===e.cod&&alert("city not found"),a.textContent=e.name,s.textContent="active"==c.classList?n(e.main.temp)+"°F":t(e.main.temp)+"°C",o.textContent=e.weather[0].main,r.textContent="active"==c.classList?n(e.main.feels_like)+"°F":t(e.main.feels_like)+"°C",l.textContent=e.main.humidity+"%",u.textContent=Math.round(60*e.wind.speed*60/1e3)+"Kph",i.textContent=e.visibility/1e3+"km"};console.log("test"),a(),(()=>{document.querySelector(".switcher");const e=document.getElementById("check");document.querySelector(".slider").addEventListener("click",(()=>{e.classList.toggle("active"),a()}))})(),document.getElementById("searchButton").addEventListener("click",(e=>{e.preventDefault(),a()}))})();