import apiAddress from '../API/destinations';

export const fetchApi = (endPoint, payload = {}, strMethod = 'post', headers = {}) => {

    
    let message = '';
    if(strMethod.toUpperCase() === 'GET'){
        message = undefined;
    }else{
        message = JSON.stringify(payload)
    }

    let header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };

    console.log('endPoint: ' + apiAddress.url + endPoint + "    body: " + message + " method: " + strMethod + "  headers: " + JSON.stringify(header));
    return fetch(apiAddress.url + endPoint,{
        method: strMethod.toUpperCase(),
        headers: header,
        body: message
    })
	.catch((e) => {
        console.log('ERROR RESPONSE: ', e)
		if (e.response && e.response.json) {
			e.response.json().then((json) => {
				if (json) throw json;
				throw e;
            });
		} else {
            throw e;
		}
	});
}