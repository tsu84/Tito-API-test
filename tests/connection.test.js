import 'isomorphic-fetch'
import { URL } from '../config'

const init = {
    method: 'GET'
}
const url = `${URL}/`

test('connection is working', () => {
    expect.assertions(1)
    return fetch(url, init).then(response => {
        expect(response.ok).toBeTruthy()
    })
})