import 'isomorphic-fetch'
import { APIKEY, ENDPOINT, ACCOUNT, TESTEVENTNAME } from '../config'

/*
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
    const url = `${ENDPOINT}/${ACCOUNT}/${TESTEVENTNAME}/checkin_lists`
        
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})