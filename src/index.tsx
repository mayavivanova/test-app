import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom' 

import './index.scss' 
import App from '../src/components/App'
import { Data } from './data/tableData'

const dataInstance = new Data()

const getData = (async function() : Promise<string> {
  await dataInstance.fetchedData();
  return dataInstance.data;
}());

ReactDOM.render(
  <App data={getData} />, document.getElementById("root")
)
// ReactDOM.render(<App />,document.getElementById("root"))