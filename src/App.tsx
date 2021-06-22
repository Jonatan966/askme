import { BrowserRouter, Route } from 'react-router-dom'

import { HomePage } from './pages/Home'
import { NewRoomPage } from "./pages/NewRoom"

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={HomePage} exact />
      <Route path='/rooms/new' component={NewRoomPage} />
    </BrowserRouter>
  )
}

export default App
