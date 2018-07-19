import 'isomorphic-fetch'
import { ENDPOINT } from '../config'

const init = {
    method: 'GET'
}
const url = `${ENDPOINT}/`

test('connection is working', () => {
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})