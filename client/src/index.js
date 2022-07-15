import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './App'
import { AppProvider } from './context/appContext'
import { awsconfig } from './awsconfig'

// AWS configuration STARTS HERE
import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration: ConfigurationOptions = {
    region: awsconfig.region,
    secretAccessKey: awsconfig.secretAccessKey,
    accessKeyId: awsconfig.accessKeyId
}

AWS.config.update(configuration)
// ENDS HERE

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
