import { useState, useEffect, useCallback } from 'react';


function Historique({ refreshTrigger }) {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

    const fetchHistory = useCallback(async () => {
        try {
            const response = await fetch(`${apiUrl}/api/imc/history`);
            if (response.ok) {
                console.log(response);
                const data = await response.json();
                setHistory(data.slice(0, 5));
            }
        } catch (error) {
            console.error("Erreur lors de la récupération de l'historique:", error);
        } finally {
            setLoading(false);
        }
    }, [apiUrl]);

    // Recharge quand le composant est monté OU quand refreshTrigger change
    useEffect(() => {
        fetchHistory();
    }, [fetchHistory, refreshTrigger]);

    if (loading && history.length === 0) return <p className="text-center py-4 dark:text-gray-400">Chargement...</p>;

    return (
        <div className="mt-10 border-t border-gray-100 dark:border-white/10 pt-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
                Derniers calculs
            </h3>

            <div className="grid gap-3">
                {history.length === 0 ? (
                    <p className="text-gray-500 italic text-center py-4">Aucun historique pour le moment.</p>
                ) : (
                    history.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-blue-200 dark:hover:border-blue-900 transition-all"
                        >
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                    {new Date(item.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                                </span>
                                <span className="font-semibold text-gray-700 dark:text-gray-200">
                                    {item.poids} kg • {item.taille} cm
                                </span>
                            </div>

                            <div className="text-right">
                                <div className="text-lg font-black text-blue-600 dark:text-white">
                                    {item.imc}
                                </div>
                                <div className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-white">
                                    {item.categorie}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Historique;