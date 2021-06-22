import { BrowserRouter, Route } from 'react-router-dom'

import { HomePage } from './pages/Home'
import { NewRoomPage } from "./pages/NewRoom"
import { AuthProvider } from './hooks/useAuth'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Route path='/' component={HomePage} exact />
        <Route path='/rooms/new' component={NewRoomPage} />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
