import './App.css'

import { Divider } from './shared/Divider/Divider.jsx';
import { Header } from './widgets/Header/Header.jsx';
import { Button } from './shared/Button/Button.jsx';
import { Calendar } from './shared/Calendar/Calendar.jsx';
import { QuoteBlock } from './shared/QuoteBlock/QuoteBlock.jsx';
import { FatherGrid } from './entity/FatherGrid/FatherGrid.jsx';
import { Benefits } from './shared/Benefits/Benefits.jsx';
import { DonationBar } from './shared/DonationBar/DonationBar.jsx';
import { Home } from './widgets/Home/Home.jsx';
import { About } from './widgets/About/About.jsx';
import { Events } from './widgets/Events/Events.jsx';

function App() {
    return (

        <div className="App">
            <Header />
            <Home />
            <About />
            <Events />

        </div>


    )
}
export default App
