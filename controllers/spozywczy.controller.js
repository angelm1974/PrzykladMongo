const db = require('../models');
const Spozywczy = db.spozywczy;

//Tworzy i zapisuje nowy sklep spożywczy
exports.create = (req, res) => {
    //walidacje requesta
    if (!req.body.nazwa) {
        res.status(400).send({
            komunikat: "Nazwa sklepu nie może być pusta"
        });
        return
    }
    //Tworzymy sklep
    const spozywczy = new Spozywczy({
        nazwa: req.body.nazwa,
        ilosc: req.body.ilosc,
        powierzchnia: req.body.powierzchnia
    });

    spozywczy.save(data => {
            console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                komunikat: err.message || "Wystąpił błąd podczas dodawania sklepu"
            });
        });

};

//Zwraca wszystkie sklepy z bazy
exports.findAll = (req, res) => {


};

//Zwraca pojedynczy sklep z bazy
exports.findOne = (req, res) => {

};

//Aktualizuje sklep w bazie danych
exports.update = (req, res) => {

}

//Kasuje sklep z bazy danych
exports.delete = (req, res) => {

};

//Czysci baze sklepów
exports.deleteAll = (req, res) => {

}