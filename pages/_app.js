import Footer from '../src/components/patterns/footer/footer'
import '../styles/globals.css'
import GlobalStyle from '../src/theme/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
  <GlobalStyle/>
  <Component {...pageProps} />
  <Footer/>
    </>
    )
}

export default MyApp
