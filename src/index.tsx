import ReactDOM from 'react-dom'
import { Global } from '@emotion/react'
import { ConnectedRouter } from 'connected-react-router'
import { Provider as ReduxStoreProvider } from 'react-redux'

import { store, history } from './redux'
import { global } from './emotion'
import { App } from './app'

ReactDOM.render(
  <ReduxStoreProvider store={store}>
    <ConnectedRouter history={history}>
      <Global styles={global} />
      <App />
    </ConnectedRouter>
  </ReduxStoreProvider>,
  document.getElementById('root'),
)
