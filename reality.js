var html = `
<div class='cosmo-logo2'>
<svg width="350" height="94" viewBox="0 0 1681 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1140.19 231.59H0.800049V450.29H1140.19V231.59Z" fill="white"/>
                <path d="M164.31 36.1501H10.36V0.600098H164.31V36.1501ZM45.91 68.1501V135.81H164.31V171.36H10.36V68.1301L45.91 68.1501Z" fill="white"/>
                <path d="M169.62 171.34V0.600098H323.62V171.34H169.62ZM205.18 36.1501V135.79H288.02V36.1501H205.18Z" fill="white"/>
                <path d="M328.88 0.600098H482.88V36.1501H364.44V68.1501H482.84V171.36H328.84V135.81H447.24V103.71H328.88V0.600098Z" fill="white"/>
                <path d="M631.36 0.22998L631.85 0.599976H666.79V171.34H631.24V78.99L602.59 134.99H552.35L523.7 78.99V171.34H488.15V0.599976H523.09L523.58 0.22998L577.53 106.03L631.36 0.22998Z" fill="white"/>
                <path d="M671.85 171.34V0.600098H825.85V171.34H671.85ZM707.41 36.1501V135.79H790.25V36.1501H707.41Z" fill="white"/>
                <path d="M831.12 0.600098H985.12V36.1501H866.72V68.1501H985.12V171.36H831.12V135.81H949.5V103.71H831.1L831.12 0.600098Z" fill="white"/>
                <path d="M1108.78 68.1301V0.600098H1144.33V171.34H1108.78V103.69H1025.94V171.34H990.38V0.600098H1025.94V68.1301H1108.78Z" fill="white"/>
                <path d="M1361.87 35.9701H1243.5V67.9701H1361.9V103.5H1243.5V135.6H1361.9V171.16H1207.92V0.410156H1361.87V35.9701Z" fill="white"/>
                <path d="M1201.87 0.600098V171.34H1166.31V36.1501H1148.91V0.600098H1201.91H1201.87Z" fill="white"/>
                <path d="M1402.61 0.600098V135.79H1521.01V171.34H1367.01V0.600098H1402.61Z" fill="white"/>
                <path d="M1526.32 36.1501V0.600098H1680.32V171.34H1526.32V68.1301H1561.88V135.79H1644.72V36.1501H1526.32Z" fill="white"/>
                <path d="M14.72 260.6H168.67V431.34H69.67V395.79H133.12V296.15H14.72V260.6ZM50.27 431.34H14.72V328.13H50.27V431.34Z" fill="#231F20"/>
                <path d="M327.93 296.15H209.5V328.15H327.93V363.71H209.5V395.81H327.93V431.36H173.98V260.6H327.93V296.15Z" fill="#231F20"/>
                <path d="M487.2 296.15H368.8V328.15H487.2V363.71H368.8V431.36H333.24V260.6H487.24L487.2 296.15Z" fill="#231F20"/>
                <path d="M646.5 296.15H528.1V328.15H646.5V363.71H528.1V395.81H646.5V431.36H492.5V260.6H646.5V296.15Z" fill="#231F20"/>
                <path d="M772.27 372.33V260.6H807.82V431.34H772.27V431.09L772.14 431.22L687.32 319.22V431.32H651.77V260.6H687.32V260.97L687.69 260.72L772.27 372.33Z" fill="#231F20"/>
                <path d="M819.8 379.12C815.32 368.621 813.01 357.325 813.01 345.91C813.01 334.495 815.32 323.199 819.8 312.7C824.015 302.52 830.197 293.273 837.993 285.487C845.789 277.701 855.045 271.531 865.23 267.33C875.727 262.851 887.027 260.561 898.44 260.6H966.96V296.15H898.44C885.227 296.15 872.555 301.399 863.212 310.742C853.869 320.085 848.62 332.757 848.62 345.97C848.62 359.183 853.869 371.855 863.212 381.198C872.555 390.541 885.227 395.79 898.44 395.79H966.96V431.34H898.44C887.021 431.379 875.717 429.068 865.23 424.55C844.675 416.009 828.341 399.675 819.8 379.12Z" fill="#231F20"/>
                <path d="M1126.22 296.15H1007.83V328.15H1126.22V363.71H1007.83V395.81H1126.22V431.36H972.22V260.6H1126.22V296.15Z" fill="#231F20"/>
                </svg>              
                </div>
    <form class="verification-form">
        <div class="heading">
            Verification
        </div>
        <label for="callsign">Callsign</label>
        <input type="text" name="callsign" />
        <label for="phrase">Phrase</label>
        <input type="text" name="phrase" />
        <button type="submit" class="submit-btn">Verify</button>
    </form>
    <div class="ip">IP Address: {{ip}}</div>
    <div class="hail-nerv"></div>
`;

var ip;
fetch('https://warp-23-backend.vercel.app/').then(res => {
    res.json().then(data => ip = data)
})
var welcomeText = 'Welcome to';
const welcomeTextEl = document.querySelector('.welcome-text');

var i = 0;

const destroyInterval = () => {
    clearInterval(interval);
    document.querySelector('.cosmo-logo').classList.add('fade-in');
    document.querySelector('.nerv-logo').classList.add('float-in-right');
    setTimeout(()=>{
        document.body.innerHTML=html.replace('{{ip}}',ip.ip);

        const form = document.querySelector('.verification-form');

        form.onsubmit = (E) => {
            E.preventDefault();
            let callsign = document.querySelector('input[name="callsign"]').value
            let phrase = document.querySelector('input[name="phrase"]').value
            verify(callsign, phrase);
        }
    },2000)
}

var interval = setInterval(() => {
    if (i == welcomeText.length-1) {
        destroyInterval();
    }
    welcomeTextEl.innerHTML += welcomeText[i];
    i++;
}, 150);