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
    const [category, setcategory] = useState(null);
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
                setcategory(data.category);
            } catch (error) {
                console.error("Erreur lors du calcul:", error);
            }
        }
    };

    const calculerPositionCurseur = (val) => {
        const min = 15;
        const max = 40;
        const pourcentage = ((val - min) / (max - min)) * 100;
        return Math.min(Math.max(pourcentage, 0), 100); // Garde entre 0 et 100
    };

    return (
        <div>
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Input Poids */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Poids (kg)</label>
                        <ChampIMC setChampIMC={setPoids} example={"Ex: 75"}/>
                    </div>

                    {/* Input Taille */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Taille (cm)</label>
                        <ChampIMC setChampIMC={setTaille} example={"Ex: 180"}/>
                    </div>
                </div>

                {/* Bouton de calcul */}
                <div className="flex justify-center">
                    <button
                        onClick={calculerIMC}
                        disabled={!estRempli}
                        className={`w-full md:w-1/3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 rounded-xl shadow-md transition-all 
                        ${estRempli ? 'hover:shadow-lg hover:scale-[1.02] active:scale-95' : 'opacity-50 cursor-not-allowed'}`}>
                        Calculer mon IMC
                    </button>
                </div>
            </div>

            {
                resultat && (
                    <div className="space-y-6 mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 animate-bounce-in text-center">
                        <p className="text-4xl font-black text-indigo-700 mt-1">{category}</p>
                        <div className="relative h-6 w-full bg-gray-200 rounded-full overflow-hidden flex mb-8">
                            <div className="h-full bg-blue-400" style={{ width: '15%' }}></div>     {/* Maigreur */}
                            <div className="h-full bg-green-500" style={{ width: '25%' }}></div>    {/* Normal */}
                            <div className="h-full bg-yellow-400" style={{ width: '20%' }}></div>   {/* Surpoids */}
                            <div className="h-full bg-orange-500" style={{ width: '20%' }}></div>   {/* Obésité */}
                            <div className="h-full bg-red-600" style={{ width: '20%' }}></div>      {/* Sévère */}

                            {/* Curseur (Le triangle) */}
                            <div
                                className="absolute top-0 transition-all duration-1000 ease-out"
                                style={{ left: `${calculerPositionCurseur(resultat)}%`, transform: 'translateX(-50%)' }}
                            >
                                <div className="w-1 h-6 bg-black dark:bg-white mx-auto"></div>
                                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-black dark:border-t-white"></div>
                            </div>
                        </div>
                        <p className="text-blue-900 text-lg font-medium">Votre IMC est : {resultat}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Imc