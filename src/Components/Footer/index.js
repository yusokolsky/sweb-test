import './index.css';

function Footer() {
    return (
        <div className="footer">
            <div className='footer-copyright'>
                © 2001– 2018 ООО <span className='footer-blue_color'>«СпейсВэб»</span> <br/>
                Все права защищены.<br/>
                Лицензия <span className='footer-blue_color'>№163230</span>
            </div>
            <div className='footer-contacts'>
                <span className='footer-blue_color'>+7 (812) 334-12-22</span> (в Санкт-Петербурге) <br/>
                <span className='footer-blue_color'>+7 (495) 663-16-12</span> (в Москве) <br/>
                <span className='footer-blue_color'>(800) 100-16-15</span> (бесплатно по России) <br/>
            </div>
        </div>
    );
}

export default Footer;
