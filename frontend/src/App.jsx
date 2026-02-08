import Header from './components/Header'
import Imc from './components/Imc.jsx'

function App() {

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            <Header />
            <main className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <Imc/>
            </main>
        </div>
    );
}

export default App
