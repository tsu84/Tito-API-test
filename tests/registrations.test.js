import 'isomorphic-fetch'
import { APIKEY, URL, ACCOUNT, TESTEVENT } from '../config'

const endpoint = 'registrations'
const endpointpath = `${URL}/${ACCOUNT}/${TESTEVENT}/${endpoint}`

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-all-registrations

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/registrations' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get all Registrations" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = endpointpath
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})