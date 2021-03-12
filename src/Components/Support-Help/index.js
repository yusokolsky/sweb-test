import './index.css';
import Footer from "../Footer";
import Header from "../Header";
import Menu from "./Menu";
import {useParams} from "react-router-dom";
import Logbook from "./Logbook";

function SupportPage(props) {
    let { tabName } = useParams();

    return (
        <div className="support_page">
            <Header/>
            <Menu activeTab={tabName}/>
            {tabName === 'logbook' && <Logbook/>}
            <Footer/>
        </div>
    );
}

export default SupportPage;
