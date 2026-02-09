// Les imports nécéssaires
const express = require('express');
const cors = require('cors');

// À modifier
const app = express();
const port = process.env.PORT || 3000;

// À modifier
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.post('/api/imc', (req, res) => {
    const { poids, taille } = req.body;

    let imc = (poids / ((taille/100) * (taille/100))).toFixed(2);
    let categorie = "";

    switch (true) {
        case (imc < 18.5):
            categorie = "Insuffisance pondérale (maigreur)";
            break;
        case (imc >= 18.5 && imc < 25):
            categorie = "Corpulences normale";
            break;
        case (imc >= 25 && imc < 30):
            categorie = "Surpoids";
            break;
        case (imc >= 30 && imc < 35):
            categorie = "Obésité modérée";
            break;
        case (imc >= 35 && imc < 40):
            categorie = "Obésité sévère";
            break;
        case (imc >= 40):
            categorie = "Obésité morbide ou massive";
            break;
        default:
            categorie = "Données invalides";
    }

    res.json({ result: imc, category: categorie});
});

app.get('/', (req, res) => {
    res.json({ Bonjour: 'Florian'});
})

// Configurer sur quel port on va écouter
app.listen(port, () => {
        console.log('Backend is running on port', port)
    }
);