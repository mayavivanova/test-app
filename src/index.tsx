import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom' 

import './index.scss' 
import Wrapper from './components/Wrapper' 

ReactDOM.render(<Wrapper />,document.getElementById("root"))