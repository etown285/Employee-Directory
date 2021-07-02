import React from 'react';


function Detail(props) {

    console.log(props);

    return (
        <div>
            <h3>Detail Compnent</h3>
            <p>{props}</p>
        </div>
    )
}


export default Detail;