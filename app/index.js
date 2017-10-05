import React from 'react';
import {render} from 'react-dom';
import './style.scss';

const App = () => (
    <div>
        <h1>Hello ! Webpack config 2</h1>

        <img src='https://raw.githubusercontent.com/webpack-contrib/awesome-webpack/master/media/awesome_webpack_branding.png'/>
    </div>
);

render(<App />, document.getElementById('app'));