import React from 'react';

function Footer() {
    const anneeActuelle = "2026"

    return (
        <footer className="mt-12 pb-8 px-4">
            <div className="max-w-4xl mx-auto border-t border-gray-200 dark:border-slate-800 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

                    {/* Infos académiques */}
                    <div className="space-y-1">
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1 text-[11px] text-gray-400 dark:text-gray-500">
                            <span>Florian Touraine</span>
                            <span className="text-gray-300 dark:text-gray-700 not-italic">•</span>
                            <span>Valentin </span>
                            <span className="text-gray-300 dark:text-gray-700 not-italic">•</span>
                            <span>Nirina</span>
                        </div>
                    </div>

                    {/* Copyright et Année */}
                    <div className="text-gray-400 dark:text-gray-500 text-base">
                        <p>&copy; {anneeActuelle} — Calculateur IMC Pro</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;