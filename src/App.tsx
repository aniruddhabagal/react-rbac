import { store } from 'Redux'
import AppRouter from 'Routes'
import { Provider } from 'react-redux'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
