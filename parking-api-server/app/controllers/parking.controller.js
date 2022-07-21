const Parking = require('../models/parking.model');

exports.findAll = (req, res) => {
    const name = req.query.name;
    Parking.getAll(name, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving tutorials'
            });
        }
        else res.send(data);
    })
}

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    const parking = new Parking({
        name: req.body.name,
        description: req.body.description,
        available: req.body.available,
        lat: req.body.lat,
        lng: req.body.lng,
        photo: req.body.photo,
        shared_by: req.body.shared_by,
        shared_phone: req.body.shared_phone,
        shared_photo: req.body.shared_photo,
        shared_date: req.body.shared_date
    });

    Parking.create(parking, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occured while creating the Tutorial."
            });
        }
        else res.send(data);
    })
}

exports.findOne = (req, res) => {
    Parking.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Parking with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Parking with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.search = (req, res) => {
    Parking.search( req.params.name, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving parking'
            })
        }
        else res.send(data);
    })
}