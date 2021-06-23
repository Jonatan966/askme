import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { HomePage } from './pages/Home'
import { NewRoomPage } from "./pages/NewRoom"
import { AuthProvider } from './hooks/useAuth'
import { RoomPage } from './pages/Room'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/rooms/new' component={NewRoomPage} />
          <Route path='/rooms/:id' component={RoomPage} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
