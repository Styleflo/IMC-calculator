import React from 'react';

function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 py-8 px-4 shadow-lg rounded-b-3xl mb-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                    Calculateur d'IMC
                </h1>
                <div className="mt-2 flex flex-col items-center">
                    <span className="h-1 w-20 bg-blue-300 rounded-full mb-2"></span>
                    <p className="text-blue-100 text-sm font-medium uppercase tracking-widest">
                        UQAC - 8INF876
                    </p>
                </div>
            </div>
        </header>
    );
}

export default Header;