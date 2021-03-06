import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Modal from 'react-modal'

import { AppToast } from '@components/AppToast'
import { AppThemeProvider } from '@contexts/AppThemeProvider'

import { HomePage } from './pages/Auth'
import { NewRoomPage } from './pages/Auth/NewRoom'
import { AuthProvider } from './hooks/useAuth'
import { RoomPage } from './pages/Room'
import { AdminRoomPage } from './pages/Room/AdminRoom'

import { GlobalStyles } from './styles/global'

Modal.setAppElement('#root')

function App() {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <AuthProvider>
          <GlobalStyles/>
          <AppToast />
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/rooms/new' component={NewRoomPage} />
            <Route path='/rooms/:id' component={RoomPage} />

            <Route path='/admin/rooms/:id' component={AdminRoomPage} />
          </Switch>
        </AuthProvider>
      </AppThemeProvider>
    </BrowserRouter>
  )
}

export default App
