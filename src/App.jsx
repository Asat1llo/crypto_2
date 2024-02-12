import './App.css'
import {CryptoContextProvider} from './Context/crypto-context.jsx'
import AppLayout from './components/Layout/AppLayout.jsx'


function App() {

  return (
    <CryptoContextProvider>
     <AppLayout/>
    </CryptoContextProvider>
  )
}

export default App
