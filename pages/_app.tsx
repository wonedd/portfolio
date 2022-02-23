import { globalStyles } from '../shared/global'

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
)

export default App
