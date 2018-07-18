import 'isomorphic-fetch'
import { APIKEY, ENDPOINT } from '../config'

/*
    http://teamtito.github.io/tito-api-docs/#authentication
    
    curl --request GET \
    --url 'https://api.tito.io/v2/...' \
    --header 'Authorization: Token token=YOUR-API-KEY' \
    --header 'Accept: application/vnd.api+json' \
*/

test('authentication is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${ENDPOINT}/v2/...`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

test('authentication without api key returns error', () => {
    const init = {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${ENDPOINT}/v2/...`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeFalsy()
    })
})