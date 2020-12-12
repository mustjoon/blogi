import { Provider } from 'react-redux'
import store from '../src/store'

import '../styles/globals.css'

function MyApp({ Component, pageProps } : {Component: any, pageProps: any} ) {
  return (
    <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
