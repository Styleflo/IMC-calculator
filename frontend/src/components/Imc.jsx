import {useState} from 'react'

function ChampIMC({setChampIMC, example}) {
    return (
        <input
            type="number"
            placeholder={example}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            onChange={(e) => setChampIMC(e.target.value)}
        />
    )
}

function Imc() {
    const [poids, setPoids] = useState('');
    const [taille, setTaille] = useState('');
    const [resultat, setResultat] = useState(null);
    const estRempli = poids !== '' && taille !== '';

    const calculerIMC = async () => {
        if (estRempli) {
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
        }
    };

    return (
        <div>
            <div className="space-y-6">
                {/* Input Poids */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Poids (kg)</label>
                    <ChampIMC setChampIMC={setPoids} example={"Ex: 75"}/>
                </div>

                {/* Input Taille */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Taille (cm)</label>
                    <ChampIMC setChampIMC={setTaille} example={"Ex: 1.80"}/>
                </div>

                {/* Bouton de calcul */}
                <button
                    onClick={calculerIMC}
                    disabled={!estRempli}
                    className={`w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 rounded-xl shadow-md transition-all 
                        ${estRempli ? 'hover:shadow-lg hover:scale-[1.02] active:scale-95' : 'opacity-50 cursor-not-allowed'}`}>
                    Calculer mon IMC
                </button>
            </div>

            {
                resultat && (
                    <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 animate-bounce-in">
                        <p className="text-blue-900 text-lg font-medium">Votre IMC est :</p>
                        <p className="text-4xl font-black text-indigo-700 mt-1">{resultat}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Imc