const parseCookie = str =>
  str
  .split(';')
  .map(v => v.split('='))
  .reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});
let data;
try {
 data = JSON.parse(parseCookie(document.cookie).data)
document.querySelector('.name').innerHTML = data.info[2]
document.querySelector('.cscall').innerHTML = data.info[1]
}
catch {
     data = {info:['','','']}
}

var pages={
    verified: `<p class="verified">Welcome<span class="loading">...</span> ${data.info[2]}</p>`,
    headlines:`<p class="headlines-heading">Headlines</p>
    <ol>
     <li class="list">WANTED: Drayvok, Martian, 5&apos;4&quot;, Reddish brown </li>
     <span class="list-date">03/05/3033</span>
     <li class="list">Recruiting Weaponsmiths: Contact NERV HQ </li>
     <span class="list-date">01/05/3033</span>
     <li class="list">Stategical Meeting Scheduled: location 5E12XG </li>
     <span class="list-date">28/04/3033</span>
    </ol> `,
    resources:`<p class="headlines-heading">Resources</p>
    <ul>
        <li class='list' onclick="openpopup('weapons')">Defence Weapon Inventory</li>
        <li class='list' >Inter-Planetary Allies</li>
        <li class='list' onclick="openpopup('defence-house')" >Defence House Locations</li>
    </ul>`,
    spyware: `

    <p class="headlines-heading">SpyWare</p>
    <div class="container">
<ul>
<li class='list2'>Enemy Tactical Positioning Drone </li>
<li class='list2'>Augmented Reality Ring </li>
<li class='list2'>Electrostatic Grappling Gloves </li>
</ul>
<div class="buttons">
<div class="btn-container"><button class="logout btn-left" onclick="openpopup('drone')">Learn More</button><button class="logout btn-right" onclick="openpopup('drone-pic')">View</button></div>
<div class="btn-container"><button class="logout btn-left" onclick="openpopup('ring')">Learn More</button><button class="logout btn-right" onclick="openpopup('ring-pic')">View</button></div>
<div class="btn-container"><button class="logout btn-left" onclick="openpopup('gloves')">Learn More</button><button class="logout btn-right" onclick="openpopup('gloves-pic')">View</button></div>
</div>
</div>`
}
const verified = document.querySelector('.cosmo-logo2');
const headlines_btn = document.querySelector('.headlines');
const resources_btn = document.querySelector('.resources');
const spyware_btn = document.querySelector('.spyware');
const page = document.querySelector('.page');
const logout_btn = document.querySelector('.logout');

verified.addEventListener('click',()=>{
    page.innerHTML=pages.verified;
})
headlines_btn.addEventListener('click',()=>{
    page.innerHTML=pages.headlines;
})
resources_btn.addEventListener('click',()=>{
    page.innerHTML=pages.resources;
})
spyware_btn.addEventListener('click',()=>{
    page.innerHTML=pages.spyware;
})
logout_btn.addEventListener('click',()=>{
    document.cookie = '';
    window.location='/';
})

const closepopup = (popupID) => {
    document.querySelector(`.popup-${popupID}-container`).style.display = 'none';
    document.querySelector(`.popup-${popupID}-container`).style.animation = 'fade-in 1s reverse forwards';
    document.querySelector(`.popup-${popupID}`).style.animation = 'enlarge 1s reverse forwards';
}

const openpopup = (popupID) => {
    document.querySelector(`.popup-${popupID}-container`).style.display = 'block';
    document.querySelector(`.popup-${popupID}-container`).style.animation = 'fade-in 1s forwards';
    document.querySelector(`.popup-${popupID}`).style.animation = 'enlarge 1s forwards ';
    
}