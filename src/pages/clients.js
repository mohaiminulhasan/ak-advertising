import React from 'react'

import '../css/clients.css'

const Clients = () => {
    const total = 23
    let images = [
        [],
        [],
        [],
        [],
    ]
    for (let i = 1; i <= total; i++) {
        let index = 0;

        if (i > total / 4 && i <= total / 2) { index = 1 }
        else if (i > total / 2 && i <= total * 3 / 4) { index = 2 }
        else if (i > total * 3 / 4) { index = 3 }


        images[index].push(<img key={i} src={`/images/clients/${i}.png`} />)
    }

    console.log(images)

    return (
        <>
            <div className="container clients">
                
                <div className="column">
                    {images[0]}
                </div>
                
                <div className="column">
                    {images[1]}
                </div>

                <div className="column">
                    {images[2]}
                </div>
            
                <div className="column">
                    {images[3]}
                </div>
            </div>
        </>
    )
}

export default Clients;