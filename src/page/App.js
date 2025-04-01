import Header from "../component/template/Header";
import Footer from "../component/template/footer";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="mb-[10px]">
            <Header />
            </div>
            <main>
                <div className="w-5/6 mx-auto">
                    <Outlet/>
                </div>
            </main>
            <div className="mt-[100px]">
            <Footer />
        </div>
        </div>
    );
}

export default App;