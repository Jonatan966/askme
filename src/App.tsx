import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Modal from 'react-modal'

import { ThemeProvider } from '@hooks/useTheme'
import { AppToast } from '@components/AppToast'

import { HomePage } from './pages/Auth'
import { NewRoomPage } from './pages/Auth/NewRoom'
import { AuthProvider } from './hooks/useAuth'
import { RoomPage } from './pages/Room'
import { AdminRoomPage } from './pages/Room/AdminRoom'

Modal.setAppElement('#root')

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AppToast />
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/rooms/new' component={NewRoomPage} />
            <Route path='/rooms/:id' component={RoomPage} />

            <Route path='/admin/rooms/:id' component={AdminRoomPage} />
          </Switch>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
