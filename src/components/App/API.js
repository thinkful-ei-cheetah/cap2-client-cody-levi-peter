import config from '../../config'
import TokenService from '../../services/token-service'

const API = {
    getLang() {
        return fetch(`${config.API_ENDPOINT}/language`, {
            method: 'GET',
            headers: { 'authorization': `Bearer ${TokenService.getAuthToken()}` },
        })
            // .then(res =>
            //     (!res.ok)
            //         ? res.json().then(e => Promise.reject(e))
            //         : res.json()
            // )
    }
}


export default API
