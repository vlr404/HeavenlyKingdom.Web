import './Benefits.css';
import { Button } from '../Button/Button.jsx';

export const Benefits = () => {
    return (
        <div className="features">
            <div className="features__grid">
                <div className="features__item">
                    <div className="features__icon"><img src="icons/belivers.png" alt=""/></div>
                    <div className="features__title">Óâåðåííîñòü âåðóþùèõ</div>
                    <div className="features__description">Èñòèííàÿ âåðà ñòàíîâèòñÿ òâåðäîé îïîðîé â ìèðå ïåðåìåí. Ìû
                        ñîçèäàåì îáùèíó, ãäå êàæäûé øàã íàïðàâëåí ê ñâåòó, à ñåðäöå íàïîëíåíî ìèðîì, êîòîðûé âûøå
                        âñÿêîãî ðàçóìåíèÿ.
                    </div>
                    <Button title="Подробнее"/>
                </div>

                <div className="features__item">
                    <div className="features__icon"><img src="icons/security.png" alt=""/></div>
                    <div className="features__title">Âå÷íàÿ çàùèòà</div>
                    <div className="features__description">Ïîä ïîêðîâîì Âñåâûøíåãî äóøà îáðåòàåò èñòèííóþ áåçîïàñíîñòü.
                        Âå÷íûå öåííîñòè, õðàíèìûå öåðêîâüþ, îáåðåãàþò íàø ïóòü è äàðóþò óâåðåííîñòü â çàâòðàøíåì äíå.
                    </div>
                    <Button title="Ïîäðîáíåå" />
                </div>

                <div className="features__item">
                    <div className="features__icon"><img src="icons/doctrina.png" alt=""/></div>
                    <div className="features__title">Ó÷åíèå âåðû</div>
                    <div className="features__description">Ïîçíàíèå áîæåñòâåííîé ìóäðîñòè îòêðûâàåò ïóòü ê äóõîâíîìó
                        ïðåîáðàæåíèþ. Ñëåäóÿ äðåâíèì íàñòàâëåíèÿì, ìû óêðåïëÿåìñÿ â èñòèíå è îòêðûâàåì äëÿ ñåáÿ ãëóáèíó
                        õðèñòèàíñêîé æèçíè.
                    </div>
                    <Button title="Ïîäðîáíåå" onClick/>
                </div>
            </div>
        </div>
    );
};