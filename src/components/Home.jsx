import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Home = props => {

    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, []);


    return (
        <>

        <h1>Hello I am Home</h1>
        <Link to={"/about"}>Go to About!</Link>
        <br />
        <Link to={"/planets/:id"}>Go to Planet!</Link>
        <br />
        <Link to={"/people/:id"}>Go to Person</Link>

        </>
    )
}

export default Home;