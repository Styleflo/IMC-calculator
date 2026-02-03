import { useState } from 'react'

function App() {
    const [poids, setPoids] = useState('');
    const [taille, setTaille] = useState('');
    const [resultat, setResultat] = useState(null);

    const calculerIMC = async () => {
        try {
            // On envoie la requête POST au backend
            const response = await fetch('http://localhost:3000/api/imc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Indispensable pour express.json()
                },
                body: JSON.stringify({
                    poids: parseFloat(poids),
                    taille: parseFloat(taille)
                }),
            });

            const data = await response.json();
            setResultat(data.result); // On stocke l'IMC reçu du serveur
        } catch (error) {
            console.error("Erreur lors du calcul:", error);
        }
    };

    return (
        <div>
            <h1>Calculateur d'IMC</h1>
            <input type="number" placeholder="Poids (kg)" onChange={(e) => setPoids(e.target.value)} />
            <input type="number" placeholder="Taille (m)" onChange={(e) => setTaille(e.target.value)} />
            <button onClick={calculerIMC}>Calculer</button>
            {resultat && <p>Votre IMC est : {resultat}</p>}
        </div>
    );
}

export default App
