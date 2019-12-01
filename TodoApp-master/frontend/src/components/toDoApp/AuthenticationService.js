import axios from 'axios';
class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        let basicAuthHeader = this.createBasicAuthToken(username, password)
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(basicAuthHeader)
    }
    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }
    createJWTToken(token) {
        return 'Bearer ' + token
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    executeBasicAuthenticationService(username, password) {
        return axios.get(`/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }
    executeJwtAuthenticationService(username, password) {
        return axios.post(`/authenticate`, {
            username,
            password
        })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    isLoggedin() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) {
            return false;
        } else {
            return true;
        }
    }
    getLoggedinUser() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) {
            return '';
        } else {
            return user;
        }
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedin()) {
                    config.headers.authorization = token
                } 
                return config
            }
        )
    }

}

export default new AuthenticationService();