import './styles/theme.css';
import './styles/global.css'
import Heading from './components/Heading';
import { TimerIcon } from 'lucide-react';


function App() {

  return (
    <>
      <Heading>Hello World
        <button><TimerIcon /></button>
      </Heading>
    </>
  )
}

export default App
