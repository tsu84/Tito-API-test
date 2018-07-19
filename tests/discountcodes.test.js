import 'isomorphic-fetch'
import { APIKEY, URL, ACCOUNT, TESTEVENTNAME } from '../config'

const endpoint = 'discount_codes'
const endpointpath = `${URL}/${ACCOUNT}/${TESTEVENTNAME}/${endpoint}`

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-all-discount-codes
    
    curl --request GET \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/discount_codes' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Get all Discount Codes" is working', () => {
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

var discount_code_id = ''

/*
    http://teamtito.github.io/tito-api-docs/?shell#creating-a-new-discount-code

    curl --request POST \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/discount_codes' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-Type: application/json'
        --data '{"data":{"type":"discount-codes","attributes":{"code":"DISCOUNTDRACULA","discount_code_type":"PercentOffDiscountCode","value":"25.00"}}}'
*/
test('"Creating a new Discount Code" is working', () => {
    const init = {
        method: 'POST',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"discount-codes","attributes":{"code":"DISCOUNTDRACULA","discount_code_type":"PercentOffDiscountCode","value":"25.00"}}})
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
        discount_code_id = jsonData.id
    })    
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#get-a-specific-discount-code

    curl --request POST \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/discount_codes' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
        --header 'Content-Type: application/json'
        --data '{"data":{"type":"discount-codes","attributes":{"code":"DISCOUNTDRACULA","discount_code_type":"PercentOffDiscountCode","value":"25.00"}}}'
*/
test('"Get a specific Discount Code" is working', () => {
    const init = {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${endpointpath}/${discount_code_id}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#updating-a-discount-code

    curl --request PATCH \
    --url 'https://api.tito.io/v2/an-account/awesome-conf/discount_codes/1000001' \
    --header 'Authorization: Token token=YOUR-API-KEY' \
    --header 'Accept: application/vnd.api+json' \
    --header 'Content-type: application/json'
    --data '{"data":{"type":"discount-codes","id":"1000001","attributes":{"quantity":25}}}'    
*/
test('"Updating a Discount Code" is working', () => {
    const init = {
        method: 'PATCH',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":{"type":"discount-codes","id":"1000001","attributes":{"quantity":25}}})
    }
    const url = `${endpointpath}/${discount_code_id}`
        
    expect.assertions(1)
    return fetch(url, init)
    .then(response => {
        expect(response.ok).toBeTruthy()
    })
})

/*
    http://teamtito.github.io/tito-api-docs/?shell#deleting-a-discount-code

    curl --request DELETE \
        --url 'https://api.tito.io/v2/an-account/awesome-conf/discount_codes/1000001' \
        --header 'Authorization: Token token=YOUR-API-KEY' \
        --header 'Accept: application/vnd.api+json' \
*/
test('"Deleting a Discount Code" is working', () => {
    const init = {
        method: 'DELETE',
        headers: {
            'Authorization': `Token token=${APIKEY}`,
            'Accept': 'application/vnd.api+json'
        }
    }
    const url = `${endpointpath}/${discount_code_id}`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})