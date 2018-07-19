import 'isomorphic-fetch'
import { APIKEY, ENDPOINT, USERNAME, TESTEVENTNAME } from '../config'

/*
    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/questions' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test.only('"Get all Questions" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${ENDPOINT}/${USERNAME}/${TESTEVENTNAME}/questions`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
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
    const url = `${ENDPOINT}/${USERNAME}/questions`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
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
    const url = `${ENDPOINT}/${USERNAME}/${TESTEVENTNAME}/questions/100001`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

