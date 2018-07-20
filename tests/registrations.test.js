import 'isomorphic-fetch'
import { APIKEY, URL, ACCOUNT, TESTEVENT, TESTRELEASE } from '../config'

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

var registration_id = ""

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-a-specific-registration

    curl --request POST \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/registrations' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-Type: application/json'
        --data '{"data":{"type":"registrations","attributes":{"quantities":{"awesomeconf-ticket":1}}}}'    
*/
test('"Creating a new Registration" is working', () => {
    let body = {"data":{"type":"registrations","attributes":{"quantities":{}}}}
    body["data"]["attributes"]["quantities"][TESTRELEASE] = 1
    const init = {
        method: 'POST',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    const url = endpointpath
        
    expect.assertions(1)
    return fetch(url, init)
    .then(response => {
        expect(response.ok).toBeTruthy()
        return response.json()
    })
    .then(json => {
        const jsonData = json.data
        registration_id = jsonData.id
    })    
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-a-specific-registration

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/registrations/paul-awesomeconf-registration' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \    
*/
test('"Get a specific Registration" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${endpointpath}/${registration_id}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#updating-a-registration    

    curl --request PATCH \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/registrations/paul-awesomeconf-registration' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-type: application/json'
        --data '{"data":{"type":"registrations","id":"paul-awesomeconf-registration","attributes":{"email":"paul@tito.io"}}}'
*/
test('"Updating a new Registration" is working', () => {
    const init = {
        method: 'PATCH',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"registrations","id":registration_id,"attributes":{"email":"paul@tito.io", "name":"Paul"}}})
    }
    const url = `${endpointpath}/${registration_id}`
        
    expect.assertions(1)
    return fetch(url, init)
    .then(response => {
        console.log(init.body)
        expect(response.status).toBe(200)
        return response.json()
    })
    .then(json => {
        const jsonData = json.data
    })    
})