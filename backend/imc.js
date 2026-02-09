const Database = require('better-sqlite3');
const db = new Database('imc.db'); // Créera un fichier imc.db à la racine

// Création de la table historique
const query = `
    CREATE TABLE IF NOT EXISTS historique (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        poids REAL,
        taille REAL,
        imc REAL,
        categorie TEXT,
        date TEXT DEFAULT CURRENT_TIMESTAMP
    );
`;

db.exec(query);

module.exports = db;