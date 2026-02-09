import Header from './components/Header.jsx'
import Imc from './components/Imc.jsx'
import Footer from "./components/Footer.jsx";

function App() {

    return (
        /* 1. On transforme le conteneur en colonne flexible qui prend toute la hauteur */
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

            <Header />
            <main className="flex-grow max-w-4xl mx-auto px-4 w-full ">
                <Imc />
            </main>

            <Footer />

        </div>
    );
}

export default App
