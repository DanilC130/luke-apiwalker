import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Planet = props => {

    const [planet, setPlanet] = useState({
        name: "",
        climate: ""
    });

    const { id } = useParams();
    const navigate = useNavigate();
    const [selectId, setSelectId] = useState(id);

    const changeHandler = () => {
        navigate(`/planets/${selectId}`);

    }


    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${selectId}`)
            .then(res => {
                console.log(res.data);
                setPlanet(res.data);
            })
            .catch(err => { console.log(err) })

    }, [selectId]);

    return (
        <>

            <h1>Hello I am Planet</h1>
            <input type="text" value={selectId} onChange={e => setSelectId(e.target.value)} />
            <button onClick={changeHandler}>Click me!</button>
            <div>
                <li>{planet.name}</li>
                <li>{planet.climate}</li>
            </div>
            <Link to={"/about"}>Go to About!</Link>
            <br />
            <Link to={"/"}>Go to Home!</Link>
            <br />
            <Link to={"/people/:id"}>Go to Person!</Link>

        </>
    )
}

export default Planet;