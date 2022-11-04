import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const People = props => {

    const [person, setPerson] = useState({
        name: "",
        height: "",
        mass: "",
        hair_color: "",
        skin_color: ""
    });

    const { id } = useParams();
    const [selectId, setSelectId] = useState(id);


    useEffect(() => {
        console.log(id);
        axios.get(`https://swapi.dev/api/people/${selectId}`)
            .then(res => { 
                setPerson(res.data); 
            })

            .catch(err => { console.log(err) })
    }, [selectId]);

    return (
        <>

            <h1>Hello I am a Person</h1>
            <input type="text" value={selectId} onChange={ e => setSelectId(e.target.value)} />
            <div>
                <h1>Name: {person.name}</h1>
                <li>Height: {person.height} cm</li>
                <li>Mass :{person.mass} kg</li>
                <li>Hair Color: {person.hair_color}</li>
                <li>Skin Color: {person.skin_color}</li>
            </div>
            <Link to={"/about"}>Go to About!</Link>
            <br />
            <Link to={"/"}>Go to Home!</Link>
        </>
    )
}

export default People;