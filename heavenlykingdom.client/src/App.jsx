import './App.css'

import { Header } from './widgets/Header/Header.jsx';
import { Home } from './widgets/Home/Home.jsx';
import { About } from './widgets/About/About.jsx';
import { Events } from './widgets/Events/Events.jsx';
import { Father } from './widgets/Father/Father.jsx';


function App() {
    return (

        <div className="App">
            <Header />
            <Home />
            <About />
            <Father />
            <Events />
        </div>


    )
}
export default App
