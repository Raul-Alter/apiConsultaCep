import { CepView } from './pages/CepView'
import './App.css'
import { NotificationProvider } from './contexts/NotificationContext'

function App() {

  return (
    <NotificationProvider>
      <CepView/>
    </NotificationProvider>
  )

}

export default App
