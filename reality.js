var html = `<div class="bg-img"></div>
    <form action="" class="verification-form">
        <div class="heading">
            Verification
        </div>
        <label for="callsign">Callsign</label>
        <input type="text" name="callsign" />
        <label for="phrase">Phrase</label>
        <input type="text" name="phrase" />
        <button type="submit" class="submit-btn">Verify</button>
    </form>
    <div class="ip">IP Address: 42.42.42.42</div>
`;

var welcomeText = 'Welcome to';
const welcomeTextEl = document.querySelector('.welcome-text');

var i = 0;

const destroyInterval = () => {
    clearInterval(interval);
    document.querySelector('.cosmo-logo').classList.add('fade-in');
    document.querySelector('.nerv-logo').classList.add('float-in-right');
    setTimeout(()=>{
        document.body.innerHTML=html;
    },2000)
}

var interval = setInterval(() => {
    if (i == welcomeText.length-1) {
        destroyInterval();
    }
    welcomeTextEl.innerHTML += welcomeText[i];
    i++;
}, 150);
