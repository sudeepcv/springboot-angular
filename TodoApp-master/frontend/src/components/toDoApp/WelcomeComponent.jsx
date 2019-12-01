import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorld from '../../api/todo/HelloWorld.js';
class WelcomeComponent extends Component {
    constructor(){
        super()
        this.executeHelloWorldService=this.executeHelloWorldService.bind(this);
        this.state={apiRespose:""}
    }
    executeHelloWorldService(){
        console.log("test1");
        HelloWorld.executeHelloWorldService().then((response)=>{
            this.setState({apiRespose:response.data})
        });

    }
    render() {
        return (
            <>
                <h1>Welcome </h1>
                <div className="container">
                    Welcome {this.props.match.params.name}
                    <Link to="/todos">Todos</Link>
                    <button className="btn btn-success" onClick={this.executeHelloWorldService}>Test Service</button>

                    <span>api response: {this.state.apiRespose}</span>
                </div>
            </>
        );
    }
}
export default WelcomeComponent;