const Car = require("../models/cars");

exports.getAllCars = async (req, res, next) => {
    try {
        const data = await Car.find();
        if(data && data.length !== 0) {
            return res.status(200).send({
                message: "Cars found!",
                payload: data // payload = data, se kterými klient pracuje
            })
        }
        res.status(404).send({
            message: "Cars not found!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};
exports.getCarById = async (req, res, next) => {
    try {
        const data = await Car.findById(req.params.id);
        if(data) {
            return res.status(200).send({
                message: "Car found!",
                payload: data // payload = data, se kterými klient pracuje
            })
        }
        res.status(404).send({
            message: "Car not found!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};
exports.createCar = async (req, res, next) => {
    try {
        const data = new Car({
            name: req.body.name,
            brand: req.body.brand,
            color: req.body.color,
            price: req.body.price
        })
        const result = await data.save();
        if(result) {
            return res.status(201).send({
                message: "Car created",
                payload: result
            })
        }
    } catch (err) {
        res.status(500).send(err);
    }
};
exports.updateCar = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            brand: req.body.brand,
            color: req.body.color,
            price: req.body.price
        }
        const result = await Car.findByIdAndUpdate(req.params.id, data);
        if(result) {
            return res.status(200).send({
                message: "Car updated",
                payload: result
            })
        }
        res.status(500).send({
            message: "Car not updated!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};
exports.deleteCar = async (req, res, next) => {
    try {
        const result = await Car.findByIdAndDelete(req.params.id, data);
        if(result) {
            return res.status(200).send({
                message: "Car deleted",
                payload: result
            })
        }
    } catch (err) {
        res.status(500).send(err);
    }
};