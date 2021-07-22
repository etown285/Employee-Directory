import React from 'react';
import './Detail.css';


function Detail(props) {

    console.log(props);

    return (
        <div>
            <h3>Detail Component</h3>
            { props.data.map( empObj => (
                <li key={empObj.email} className="list-item">
                    <p><img src={empObj.picture.thumbnail} alt={empObj.name.first} /></p>
                    <p>{empObj.name.first} {empObj.name.last}</p>
                    <p>{empObj.email}</p>
                    <p>{empObj.dob.age}</p>
                </li>
            ))}
        </div>
    )
}


export default Detail;