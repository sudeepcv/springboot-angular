import axios from 'axios';
class TodoDataService {

    todos(name) {
        return axios.get(`/users/${name}/todos`);
    }
    todoByUsernameAndId(username, id) {
        return axios.get(`/users/${username}/todos/${id}`)

    }
    deleteTodo(username, id) {
        return axios.delete(`/users/${username}/todos/${id}`)
    }
    createTodo(username, todo) {
        return axios.put(`/users/${username}/todos`, todo)
    }

    updateTodo(username, id, todo) {

        return axios.post(`/users/${username}/todos`, todo
        )
    }

}
export default new TodoDataService;