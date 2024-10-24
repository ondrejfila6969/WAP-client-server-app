import { Link, useParams } from "react-router-dom";

export default function CreatedCar() {
    const { id } = useParams(); // chci si vzít id, automaticky se to vezme z URL adresy
    return(
        <>
            <h1>New car created {id}</h1>
            <Link to={`/car/${id}`}>
                <p>View car</p>
            </Link>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}