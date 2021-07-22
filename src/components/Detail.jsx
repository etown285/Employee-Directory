import React from 'react';
import './Detail.css';


function Detail(props) {

    console.log(props);

    return (
        <div>
            <h3>Detail Component</h3>
            { props.data.map( empObj => (
                <table key={empObj.email} className="list-item">
                    <tr>
                        <th><img src={empObj.picture.thumbnail} alt={empObj.name.first} /></th>
                        <th>{empObj.name.first} {empObj.name.last}</th>
                        <th>{empObj.email}</th>
                        <th>{empObj.dob.age}</th>
                    </tr>
                </table>
            ))}
        </div>
    )
}


export default Detail;