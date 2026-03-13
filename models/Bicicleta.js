let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.allBicis = [];

Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

Bicicleta.removeById = function (id) {
    const index = this.allBicis.findIndex(bici => bici.id == id);
    if (index >= 0) {
        this.allBicis.splice(index, 1);
    }
}

Bicicleta.update = function (id, data) {
    const bici = this.allBicis.find(bici => bici.id == id);

    if (bici) {
        if (data.color !== undefined) bici.color = data.color;
        if (data.modelo !== undefined) bici.modelo = data.modelo;
        if (data.latitud !== undefined && data.longitud !== undefined) {
            bici.ubicacion = [data.latitud, data.longitud];
        }
    }

    return bici;
}

let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;