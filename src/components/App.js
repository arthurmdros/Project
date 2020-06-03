import React from 'react';

import Post from './Post';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <h1>Hello World</h1>

                <Post title="Teste1" />

                <Post title="Teste2" />

                <Post title="Teste3" />
            </div>
        );
    }
}