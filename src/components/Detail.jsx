import React from 'react';


function Detail(props) {

    console.log(props);

    return (
        <div>
            <h3>Detail Compnent</h3>
            { props.data.map( empObj => (
                <li>
                    <p>{empObj.name.first} {empObj.name.last}</p>
                    <p>{empObj.dob.age}</p>
                </li>
            ))}
        </div>
    )
}


export default Detail;