import * as React from 'react';
import './App.css';
import   Http,{API} from './utils/HttpClient';
import BaseComponent from './componets/BaseComponent';
import Login from './componets/Login';

@Http
class App extends BaseComponent {
    constructor () {
        super();
    }

    render() {
        App.Http.request({'body': {'name': 'anni', 'age': 12}, 'url': API.TEST}).then((response : object) => {
            console.info(response);
        }).catch((e:any) => {
            console.info(e);
        });
        return (
                <Login/>
        );
    }
}

export default App;