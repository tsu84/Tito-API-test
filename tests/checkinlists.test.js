import 'isomorphic-fetch'
import { APIKEY, URL, ACCOUNT, TESTEVENTNAME } from '../config'

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-all-check-in-lists

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/checkin_lists' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get all Check-in Lists" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/checkin_lists`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

var checkin_list_id = ''

/*
    http://teamtito.github.io/tito-api-docs/?shell#creating-a-new-check-in-list

    curl --request POST \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/checkin_lists' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-Type: application/json'
        --data '{"data":{"type":"checkin-lists","attributes":{"title":"Day 2 Check-in List"}}}'
*/
test('"Creating a new Check-in List" is working', () => {
    const init = {
        method: 'POST',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"checkin-lists","attributes":{"title":"Day 2 Check-in List"}}})
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/checkin_lists`
        
    expect.assertions(1)
    return fetch(url, init)
    .then(response => {
        expect(response.ok).toBeTruthy()
        return response.json()
    })
    .then(json => {
        const jsonData = json.data
        checkin_list_id = jsonData.id
    })    
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-all-check-in-lists

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/checkin_lists/awesomeconf-check-in-list' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get a specific Check-in List" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/checkin_lists/${checkin_list_id}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-a-specific-activity

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/activities/1000001' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get a specific Check-in List" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/checkin_lists/${checkin_list_id}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#updating-a-check-in-list

    curl --request PATCH \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/checkin_lists/awesomeconf-check-in-list' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-type: application/json'
        --data '{"data":{"type":"checkin-lists","id":"awesomeconf-check-in-list","attributes":{"release_ids":["day-2-workshop-ticket","day-2-after-party-ticket"]}}}'
*/
test('"Updating a Check-in List" is working', () => {
    const init = {
        method: 'PATCH',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"checkin-lists","id":"awesomeconf-check-in-list","attributes":{"release_ids":["day-2-workshop-ticket","day-2-after-party-ticket"]}}})
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/checkin_lists/${checkin_list_id}`
        
    expect.assertions(1)
    return fetch(url, init)
    .then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#deleting-a-check-in-list

    curl --request DELETE \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/checkin_lists/awesomeconf-check-in-list' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Deleting a Check-in List" is working', () => {
    const init = {
        method: 'DELETE',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/checkin_lists/${checkin_list_id}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})