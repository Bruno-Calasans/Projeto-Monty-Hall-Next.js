//import '../styles/globals.css'
import GlobalStyle from './style'

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

