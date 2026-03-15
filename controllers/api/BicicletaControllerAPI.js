let Bicicleta = require("../../models/Bicicleta");

exports.bicicleta_list = function (req, res) {
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
};

exports.bicicleta_create = function (req, res) {
    let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.latitud, req.body.longitud];

    Bicicleta.add(bici);

    res.status(201).json({
        bicicleta: bici
    });
};

exports.bicicleta_delete = function (req, res) {
    const id = req.params.id;

    const bici = Bicicleta.allBicis.find(bici => bici.id == id);

    if (!bici) {
        return res.status(404).json({ message: "bicicleta no encontrada" });
    }

    Bicicleta.removeById(id);
    res.status(204).send();
};

exports.bicicleta_update = function (req, res) {
    const id = req.params.id || req.body.id;

    if (id === undefined) {
        return res.status(400).json({ message: "debes indicar el id de la bicicleta" });
    }

    const bici = Bicicleta.update(id, req.body);

    if (!bici) {
        return res.status(404).json({ message: "bicicleta no encontrada" });
    }

    res.status(200).json({
        message: "bicicleta actualizada correctamente",
        bicicleta: bici
    });
};