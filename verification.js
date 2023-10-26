const backend = 'https://warp-23-backend.vercel.app/verify'

function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
    //https://stackoverflow.com/questions/831030/how-to-get-get-request-parameters-in-javascript
}



const verify = (callsign, phrase, cookie) => {
    const item = {
        callsign: callsign,
        phrase: phrase
    }
    var form_data = new FormData();

    for ( var key in item ) {
        form_data.append(key, item[key].replaceAll('+', ' '));
    }

    fetch(backend, {
        method:'POST', 
        body:form_data,
        credentials: 'include'
    }).then((res) => {
        res.json().then((data) => {
            if (!data.auth) {
                window.location = '/';
            }
            else {
                if (!cookie) {
                    document.cookie = `id=${data.cookieHash}`
                    window.location = '/verified';
                }
                else {
                    return data;
                }
            }
        })
    })
}