import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { HomePage } from './pages/Auth'
import { NewRoomPage } from './pages/Auth/NewRoom'
import { AuthProvider } from './hooks/useAuth'
import { RoomPage } from './pages/Room'
import { AdminRoomPage } from './pages/Room/AdminRoom'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/rooms/new' component={NewRoomPage} />
          <Route path='/rooms/:id' component={RoomPage} />

          <Route path='/admin/rooms/:id' component={AdminRoomPage} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
