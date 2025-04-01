import Header from "../component/template/Header";
import Footer from "../component/template/footer";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;