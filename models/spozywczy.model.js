module.exports = mongoose => {
    const Spożywczy = mongoose.model(
        "spozywczy",
        mongoose.Schema({
            nazwa: String,
            ilosc: {
                type: Number,
                default: 1
            },
            powierzchnia: {
                szerokosc_min: {
                    type: Number,
                    default: 10
                },
                dlugosc_min: {
                    type: Number,
                    default: 15
                },
                jednostka: {
                    type: String,
                    default: 'm'
                }
            }
        }), 'spozywcze'
    );
    return Spożywczy;
};