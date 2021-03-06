import 'isomorphic-fetch'
import { APIKEY, URL, ACCOUNT } from '../config'

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
    const url = `${URL}/${ACCOUNT}/events`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

const eventName = 'awesome-conf'

/*
    http://teamtito.github.io/tito-api-docs/?shell#creating-a-new-event

    curl --request POST \
    --url 'https://api.tito.io/v2/an-account/events' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-Type: application/json'
        --data '{"data":{"type":"events","attributes":{"slug":"Awesome-conf","title":"Awesome Conf"}}}'
*/
test('"Creating a new Event" is working', () => {
    const init = {
        method: 'POST',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"events","attributes":{"slug":"Awesome-conf","title":"Awesome Conf"}}})
    }
    const url = `${URL}/${ACCOUNT}/events`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
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
    const url = `${URL}/${ACCOUNT}/${eventName}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#duplicating-an-event

    curl --request POST \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/duplicate' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-Type: application/json'
        --data '{}'
*/
test('"Duplicating an Event" is working', () => {
    const init = {
        method: 'POST',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'            
        },
        data: {}
    }
    const url = `${URL}/${ACCOUNT}/${eventName}/duplicate`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()

        const init = {
            method: 'DELETE',
            headers: {
                'Authorization': `Token token=${APIKEY}`,
                'Accept': 'application/vnd.api+json',
            }
        }
        const url = `${URL}/${ACCOUNT}/${eventName}-copy`
        fetch(url, init)   
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#updating-an-event

    curl --request PATCH \
        --url 'https://api.tito.io/v2/an-account/awesome-conf' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-type: application/json'
        --data '{"data":{"type":"events","id":"awesome-conf","attributes":{"location":"Dublin, Ireland"}}}'
*/
test('"Updating an Event" is working', () => {
    const init = {
        method: 'PATCH',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"events","id":"awesome-conf","attributes":{"location":"Dublin, Ireland"}}})
    }
    const url = `${URL}/${ACCOUNT}/${eventName}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#deleting-an-event

    curl --request DELETE \
        --url 'https://api.tito.io/v2/an-account/awesome-conf' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Deleting an Event" is working', () => {
    const init = {
        method: 'DELETE',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
        }
    }
    const url = `${URL}/${ACCOUNT}/${eventName}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

test('Getting a deleted event returns error', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${eventName}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeFalsy()
    })
})