var pages={
    verified: `<p class="verified">Verified<span class="loading">...</span> Kevin Baba.</p>`,
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
        <li class='list'>Defence Weapon Inventory</li>
        <li class='list'>Inter-Planetary Allies</li>
        <li class='list' onclick="defencething()">Defence House Locations</li>
    </ul>`,
    spyware: `

    <p class="headlines-heading">SpyWare</p>
    <div class="container">
<ul>
<li class='list2'>Enemy Tactical Positioning Drone </li>
<li class='list2'>Network Tapper </li>
<li class='list2'>Sleeper Cells </li>
</ul>
<div class="buttons">
<button class="logout">Connect</button><br>
<button class="logout">Connect</button><br>
<button class="logout">Connect</button>
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
    window.location='/reality';
})


const defencething = () => {
    document.querySelector('.popup-defence-house-container').style.display = 'block';
    document.querySelector('.popup-defence-house-container').style.animation = 'fade-in 1s forwards';
    document.querySelector('.popup-defence-house').style.animation = 'enlarge 1s forwards ';
    
}
const closepopup = () => {
    document.querySelector('.popup-defence-house-container').style.animation = 'fade-in 1s reverse forwards';
    document.querySelector('.popup-defence-house').style.animation = 'enlarge 1s reverse forwards ';
    document.querySelector('.popup-defence-house-container').style.display = 'none';
}