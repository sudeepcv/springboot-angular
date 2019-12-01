import axios from 'axios';
class HelloWorld {

    executeHelloWorldService() {
        // let username = "sudeep"
        // let password = "sudeep"
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        // return axios.get('/hello', { headers: { authorization: basicAuthHeader } });
        return axios.get('/hello');
    }

}
export default new HelloWorld;