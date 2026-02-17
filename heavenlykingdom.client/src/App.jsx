import './App.css'

import { Divider } from './shared/Divider/Divider.jsx';
import { Header } from './widgets/Header/Header.jsx';
import { Button } from './shared/Button/Button.jsx';
import { Calendar } from './shared/Calendar/Calendar.jsx';
import { QuoteBlock } from './shared/QuoteBlock/QuoteBlock.jsx';
import { FatherGrid } from './entity/FatherGrid/FatherGrid.jsx';
import { Benefits } from './shared/Benefits/Benefits.jsx';
import { DonationBar } from './shared/DonationBar/DonationBar.jsx';

function App() {
    return (

        <div className="App">
            <Header />
            <div className="section-container">
                
               
            </div>
            <Divider title="Hello world" />
            
            
            {/* Твой календарь теперь ограничен шириной 1200px */}
            <QuoteBlock 
                style={{  margin: '200px auto' }}  // Центрируем и ограничиваем ширину
                title="Добро пожаловать в Небесное Царство!" quote="Ибо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в НегоИбо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в НегоИбо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, вИбо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в НегоИбо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в НегоИбо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в НегоИбо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в Негоерующий в Него, не погиб, но имел жизнь вечную."
                autor="Иоанна 3:16"
                san="Библия"
                backgr_img="./foto/deva-mariya.png"
                buttonText="ПОДРОБНЕЕ"   // Имя должно СТРОГО совпадать с тем, что в скобках QuoteBlock
                buttonLink="https://www.youtube.com/results?search_query=Как+сделать+папку+шаблон+для+проекта+vs+Communityout"/>
                <Calendar />
            <Button title="Еще одна кнопка"  />
            <div >
                <FatherGrid name="Уолтер Уайт" san="Епископ" image="./foto/Walter_White.png"/>
            </div>
            <Benefits/>
            <DonationBar current={5000} goal={10000} title="Поддержите наше дело!" text="Ибо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в НегоИбо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в НегоИбо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, вИбо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в НегоИбо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в НегоИбо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в НегоИбо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в Негоерующий в Него, не погиб, но имел жизнь вечную." />


        </div>


    )
}
export default App
