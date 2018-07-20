import 'isomorphic-fetch'
import { APIKEY, URL, ACCOUNT, TESTEVENTNAME } from '../config'

const endpoint = 'releases'
const endpointpath = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/${endpoint}`

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-all-releases

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/releases' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get all Releases" is working', () => {
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

var release_id = ''

/*
    http://teamtito.github.io/tito-api-docs/?shell#creating-a-new-release

    curl --request POST \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/releases' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-Type: application/json'
        --data '{"data":{"type":"releases","attributes":{"title":"Awesome Conf"}}}'
*/
test('"Creating a new Release" is working', () => {
    const init = {
        method: 'POST',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"releases","attributes":{"title":"Awesome Conf"}}})
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
        release_id = jsonData.id
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-a-specific-release

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/releases/early-bird-ticket' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get a specific Release" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${endpointpath}/${release_id}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#updating-a-release
   
    curl --request PATCH \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/releases/workshop-ticket' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-type: application/json'
        --data '{"data":{"type":"releases","id":"workshop-ticket","attributes":{"quantity":25}}}'    
*/
test('"Updating a Release" is working', () => {
    const init = {
        method: 'PATCH',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"releases","id":"workshop-ticket","attributes":{"quantity":25}}})
    }
    const url = `${endpointpath}/${release_id}`
        
    expect.assertions(1)
    return fetch(url, init)
    .then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#deleting-a-release

    curl --request DELETE \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/releases/workshop-ticket' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Deleting a Release" is working', () => {
    const init = {
        method: 'DELETE',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${endpointpath}/${release_id}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})