import {BrowserRouter , Route , Routes} from 'react-router-dom'


//pages
import {Home , Destination , Crew  ,  Technology  } from './pages'

//Components 
import Header from './components/header/Header'






function App() {
  return (
    <section>
       <div className='container__web'>
       <BrowserRouter >
       <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
        </Routes>
        </BrowserRouter>
       </div>
    </section>
  );
}

export default App;
