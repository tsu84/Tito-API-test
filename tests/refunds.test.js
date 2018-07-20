import 'isomorphic-fetch'
import { APIKEY, URL, ACCOUNT, TESTEVENT } from '../config'

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-all-refunds

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/refunds' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get all Refunds" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENT}/refunds`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/refunds/1001' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get a specific Refund" not found working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENT}/refunds/0`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.status).toBe(404)
    })
})