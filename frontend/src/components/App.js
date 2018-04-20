import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Components
import Landing from '../components/landing/landing'
class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component ={Landing}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;