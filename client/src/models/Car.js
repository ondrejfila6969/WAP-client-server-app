export const getAllCars = async () => {
    /* Požadavek, co jsme dělali v postmanovi */
    const req = await fetch("http://localhost:3000/cars", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json" // která data chci přenášet
        },
        method: "GET"
    });
    const data = await req.json(); // určím, že data budou JSON typu
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}

export const getCarById = async (id) => {
    const req = await fetch(`http://localhost:3000/cars/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json" // která data chci přenášet
        },
        method: "GET"
    });
    const data = await req.json(); // určím, že data budou JSON typu
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}

export const createCar = async (formData) => {
    const req = await fetch("http://localhost:3000/cars", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json" // která data chci přenášet
        },
        method: "POST",
        body: JSON.stringify(formData) // překonvertuje data na JSON
    });
    const data = await req.json(); // určím, že data budou JSON typu
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}

export const updateCar = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/cars/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json" // která data chci přenášet
        },
        method: "PUT",
        body: JSON.stringify(formData) // překonvertuje data na JSON
    });
    const data = await req.json(); // určím, že data budou JSON typu
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}

export const deleteCar = async (id) => {
    const req = await fetch(`http://localhost:3000/cars/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json" // která data chci přenášet
        },
        method: "DELETE",
    });
    const data = await req.json(); // určím, že data budou JSON typu
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}