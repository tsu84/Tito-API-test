import 'isomorphic-fetch'
import { APIKEY, URL, ACCOUNT, TESTEVENTNAME } from '../config'

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-all-questions

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/questions' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get all Questions" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/questions`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

var questionid = 0

/*
    http://teamtito.github.io/tito-api-docs/?shell#creating-a-new-question

    curl --request POST \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/questions' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-Type: application/json'
        --data '{"data":{"type":"questions","attributes":{"field_type":"Checkboxes","options":"Small\nMedium\nLarge\nExtra Large","title":"T-Shirt Size"}}}'
*/
test('"Creating a new Question" is working', () => {
    const init = {
        method: 'POST',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"questions","attributes":{"field_type":"Checkboxes","options":"Small\nMedium\nLarge\nExtra Large","title":"T-Shirt Size"}}})
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/questions`
        
    expect.assertions(1)
    return fetch(url, init)
    .then(response => {
        expect(response.ok).toBeTruthy()
        return response.json()
    })
    .then(json => {
        const jsonData = json.data
        questionid = jsonData.id
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-a-specific-question

    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/questions/1000001' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get a specific Question" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/questions/${questionid}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#updating-a-question

    curl --request PATCH \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/questions/1000001' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-type: application/json'
        --data '{"data":{"type":"questions","id":"1000001","attributes":{"required":true}}}'
*/
test('"Updating a Question" is working', () => {
    const init = {
        method: 'PATCH',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"questions","id":"1000001","attributes":{"required":true}}})
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/questions/${questionid}`
        
    expect.assertions(1)
    return fetch(url, init)
    .then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#deleting-a-question

    curl --request DELETE \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/questions/1000001' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Deleting a Question" is working', () => {
    const init = {
        method: 'DELETE',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/questions/${questionid}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})