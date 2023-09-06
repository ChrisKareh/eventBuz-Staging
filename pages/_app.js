import '@/styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import {Provider } from 'react-redux'
import {Store} from '../Redux/store'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export default function App({ Component, pageProps, session }) {
  
  return (
    <SessionProvider session={session}>
      <Provider store={Store}>
          <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}
