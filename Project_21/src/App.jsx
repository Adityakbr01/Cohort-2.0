import './App.css'
import { FaReact } from 'react-icons/fa'; // Using react-icons package


function App() {

  return (
   <div className='App'>
    <header className='App-header'>
<h1>Hello,React</h1>
 <p>Welcome, {name} This is your first React app!</p>
  <FaReact size={60} color="#61dafb" />
    </header>
    
   </div>
  )
}

export default App
