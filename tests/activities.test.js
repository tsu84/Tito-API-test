import 'isomorphic-fetch'
import { APIKEY, URL, ACCOUNT, TESTEVENT } from '../config'

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-all-activities
    
    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/activities' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get all Activities" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENT}/activities`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

var activityid = 0

/*
    http://teamtito.github.io/tito-api-docs/?shell#creating-a-new-activity
    
    curl --request POST \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/activities' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-Type: application/json'
        --data '{"data":{"type":"activities","attributes":{"capactity":100,"name":"Day 2 Dinner","release_ids":["conf-ticket","workshop-ticket"]}}}'
        This endpoint creates a Activity on the given Event.
*/
test('"Creating a new Activity" is working', () => {
    const init = {
        method: 'POST',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"activities","attributes":{"capactity":100,"name":"Day 2 Dinner","release_ids":["conf-ticket","workshop-ticket"]}}})
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENT}/activities`
        
    expect.assertions(1)
    return fetch(url, init)
    .then(response => {
        expect(response.ok).toBeTruthy()
        return response.json()
    })
    .then(json => {
        const jsonData = json.data
        activityid = jsonData.id
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-a-specific-activity

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/activities/1000001' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get a specific Activity" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENT}/activities/${activityid}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#updating-a-activity

    curl --request PATCH \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/activities/1000001' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-type: application/json'
        --data '{"data":{"type":"activities","id":"1000001","attributes":{"capacity":115}}}'
*/
test('"Updating a Activity" is working', () => {
    const init = {
        method: 'PATCH',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"activities","id":"1000001","attributes":{"capacity":115}}})
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENT}/activities/${activityid}`
        
    expect.assertions(1)
    return fetch(url, init)
    .then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#deleting-a-activity

    curl --request DELETE \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/activities/1000001' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Deleting a Activity" is working', () => {
    const init = {
        method: 'DELETE',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENT}/activities/${activityid}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})