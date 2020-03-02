import React from 'react';

import '../css/footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div>
                <p>209, Syed Nazrul Islam Sarani, Bijoynagar{window.innerWidth > 991 ? `, Dhaka, Bangladesh` : null}</p>
                <p>
                    <a href="https://www.facebook.com/akadvertisingbd/" target="_blank">
                        <i className="fa fa-facebook-square" style={{fontSize: 24}}></i>
                    &nbsp; {window.innerWidth < 992 ? `Visit us on Facebook` : null}
                    </a>
                </p>
                <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;