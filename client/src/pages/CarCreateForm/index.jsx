import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCar } from "../../models/Car";

export default function CarCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate(); // Hook, který slouží pro směrování / navigaci

  const postForm = async () => {
    const car = await createCar(formData); // musíme si na tu akci počkat
    if (car.status === 201) {
      return navigate(`/created-car/${car.payload._id}`); // id je uložené v datech (payloadu)
    }
    setInfo(car.message); // v případě chyby vypíše zprávu
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // ... - spread operátor, překopíruje data
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  return (
    <>
      <h1>Create car</h1>
      <form>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          required
          placeholder="Enter brand"
          onChange={handleChange}
        />
        <input
          type="text"
          name="color"
          required
          placeholder="Enter color"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          required
          placeholder="Enter price"
          onChange={handleChange}
        />
        <button onClick={handlePost}>Add Car</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
