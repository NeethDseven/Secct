import Header from "../component/Header";
import Footer from "../component/footer";

function App() {
    return (
        <div className="App">
            <Header className="App-header" />
            <img src="/img/imageBaniere.webp" alt="Banière" className="w-full h-[500px]" />
            <Footer/>
        </div>
    );
}

export default App;