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

    res.json({ result: imc });
});


// Configurer sur quel port on va écouter
app.listen(port, () => {
        console.log('Backend is running on port', port)
    }
);