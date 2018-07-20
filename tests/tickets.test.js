import 'isomorphic-fetch'
import { APIKEY, URL, ACCOUNT, TESTEVENT, TESTRELEASE } from '../config'

const endpoint = 'tickets'
const endpointpath = `${URL}/${ACCOUNT}/${TESTEVENT}/${endpoint}`

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-all-tickets

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/tickets' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get all Tickets" is working', () => {
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

var ticket_id = ''

/*
    http://teamtito.github.io/tito-api-docs/?shell#creating-a-new-ticket

    curl --request POST \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/tickets' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-Type: application/json'
        --data '{"data":{"type":"tickets","attributes":{"email":"joe.bloggs@example.com"},"relationships":{"release":{"data":{"type":"releases","id":"awesomeconf-ticket"}}}}}'
*/
test('"Creating a new Ticket" is working', () => {
    const init = {
        method: 'POST',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"tickets","attributes":{"email":"joe.bloggs@example.com"},"relationships":{"release":{"data":{"type":"releases","id":TESTRELEASE}}}}})
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
        ticket_id = jsonData.id
    })    
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-a-specific-ticket

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/tickets/paul-awesomeconf-ticket' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \    
*/
test('"Get a specific Ticket" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${endpointpath}/${ticket_id}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#creating-a-new-ticket

    curl --request PATCH \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/tickets/paul-awesomeconf-ticket' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-type: application/json'
        --data '{"data":{"type":"tickets","id":"workshop-ticket","attributes":{"company_name":"Team Tito"}}}'
 
*/
test('"Updating a Ticket" is working', () => {
    const init = {
        method: 'PATCH',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"tickets","id":"workshop-ticket","attributes":{"company_name":"Team Tito"}}})
    }
    const url = `${endpointpath}/${ticket_id}`
        
    expect.assertions(1)
    return fetch(url, init)
    .then(response => {
        expect(response.ok).toBeTruthy()
    })
})