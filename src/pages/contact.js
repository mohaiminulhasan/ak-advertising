import React from 'react'

const Contact = () => {
    return (
        <center className="container mt-4">
            <p>
                <strong>Email: </strong><a href="mailto:marketing.ak.advertising@gmail.com">marketing.ak.advertising@gmail.com</a>
            </p>
            <p>
                <strong>Phone: </strong><a href="tel:+88 02 9560275">+88 02 9560275</a>
            </p>
            <p>
                <strong>Mobile: </strong><a href="tel:+88 013 14457704">+88 013 14457704</a>
            </p>

            <hr/>

            <strong>Office Address</strong>
            <p>209, Syed Nazrul Islam Sharani, Bijoynagar, Dhaka – 1000</p>

            <strong>Factory Address</strong>
            <p>22/A, Shahjalal Road, Konapara, Demra, Dhaka</p>

            <strong>Warehouse Address</strong>
            <p>Adjunct to Taltola Market, Khilgaon, Dhaka</p>
        </center>
    );
}

export default Contact