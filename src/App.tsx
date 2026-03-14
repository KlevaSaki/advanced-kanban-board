import './App.css'
import Board from './components/Board'
import { KanbanProvider } from './context/KanbanProvider'

function App() {

  return (
    <KanbanProvider>
          <Board />
    </KanbanProvider>
  )
}

export default App
