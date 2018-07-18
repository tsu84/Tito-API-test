import 'isomorphic-fetch'
import { APIKEY, ENDPOINT, USERNAME } from './config'

/*
    http://teamtito.github.io/tito-api-docs/#get-all-events
    
    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/events' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get all Events" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${ENDPOINT}/v2/${USERNAME}/events`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.status).toBe(200)
    })
})

/*
    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get a specific Event" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${ENDPOINT}/v2/${USERNAME}/2017-test`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.status).toBe(200)
    })
})
