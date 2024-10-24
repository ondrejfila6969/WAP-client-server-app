import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import CarCreateForm from "./CarCreateForm";
import CreatedCar from "./CarCreateForm/CreatedCar";

export default function AppRoutes() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/add-car" element={<CarCreateForm />}/>
                    <Route path="/created-car/:id" element={<CreatedCar />}/>
                    <Route />
                </Routes>
            </BrowserRouter>
        </>
    )
}