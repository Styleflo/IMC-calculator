import Header from './components/Header.jsx'
import Imc from './components/Imc.jsx'
import Footer from "./components/Footer.jsx";

function App() {
    return (
        /* Le conteneur parent occupe toute la hauteur de l'écran */
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

            <Header />

            {/* Cette div invisible va "grandir" pour occuper l'espace et pousser le footer */}
            <div className="flex-grow flex items-start justify-center px-4">
                <main className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-4xl w-full dark:bg-white/5 dark:backdrop-blur-md dark:border-white/10">
                    <Imc />
                </main>
            </div>

            <Footer />

        </div>
    );
}

export default App;