const backend = 'https://warp-23-backend.vercel.app/verify'

function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
    //https://stackoverflow.com/questions/831030/how-to-get-get-request-parameters-in-javascript
}

const item = {
    callsign: get('callsign'),
    phrase: get('phrase')
}

var form_data = new FormData();

for ( var key in item ) {
    form_data.append(key, item[key]);
}

fetch(backend, {method:'POST', body:form_data})