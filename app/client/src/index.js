import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './services/registerServiceWorker'

const App = lazy(() => import('./App'))

ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>,
    document.getElementById('root'))
registerServiceWorker()
