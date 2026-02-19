import './App.css'

import { Header } from './widgets/Header/Header.jsx';
import { Home } from './widgets/Home/Home.jsx';
import { About } from './widgets/About/About.jsx';
import { Events } from './widgets/Events/Events.jsx';
import { Father } from './widgets/Father/Father.jsx';
import { SocialMediaIcon } from './shared/SocialMediaIcon/SocialMediaIcon.jsx';


function App() {
    return (

        <div className="App">
            <Header />
            <Home />
            <About />
            <Father />
            <Events />
            <SocialMediaIcon links={{ instagram: "https://www.instagram.com/heavenlykingdom/", facebook: "https://www.facebook.com/heavenlykingdom", gmail: "mailto:valeratitov443@gmail.com", youtube: "https://www.youtube.com/channel/UC9Xo2n8s1mLh3l5Zt7kKjQ", telegram: "https://t.me/heavenlykingdom" }} />
        </div>


    )
}
export default App
