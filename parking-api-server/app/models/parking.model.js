const { resume } = require('./db');
const sql = require('./db')

const Parking = function (parking) {
    this.name = parking.name;
    this.description = parking.description;
    this.available = parking.available;
    this.lat = parking.lat;
    this.lng = parking.lng;
    this.photo = parking.photo;
    this.shared_by = parking.shared_by;
    this.shared_phone = parking.shared_phone;
    this.shared_photo = parking.shared_photo;
    this.shared_date = parking.shared_date;
};

Parking.getAll = (name, result) => {
    let query = "SELECT * FROM parking";
    if (name) {
        query += ` WHERE name LIKE '%${name}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("parking: ", res);
        result(null, res);
    });
};

Parking.create = (newParking, result) => {
    sql.query("INSERT INTO parking SET ?", newParking, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        console.log("created parking: ", { id: res.insertId, ...newParking });
        result(null, { id: res.insertId, ...newParking });
    });
};

Parking.findById = (id, result) => {
    sql.query(`SELECT * FROM parking WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log('found parking: ', res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: 'not_found' }, null);
    })
}

Parking.search = (name, result) => {
    sql.query(`SELECT * FROM parking WHERE name LIKE '%${name}%' `, (err, res) => {
        if (err) {
            console.log("error: ",err);
            result(null, err);
            return;
        }
        console.log("parking: ", res);
        result(null, res);
    })
}



module.exports = Parking;