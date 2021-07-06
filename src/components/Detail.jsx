import React from 'react';


function Detail(props) {

    console.log(props);

    return (
        <div>
            <h3>Detail Compnent</h3>
            { props.data.map( empObj => (
                <p>{empObj.name.first} {empObj.name.last}</p>
            ))}
        </div>
    )
}


export default Detail;