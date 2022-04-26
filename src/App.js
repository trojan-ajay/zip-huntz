import './index.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import NextPage from './Pages/NextPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/next' element={<NextPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App