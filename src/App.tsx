import Books from './pages/Books';
import {
    Routes,
    Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import SubNav from './components/SubNav';

function App() {
    return (
        <div>
            <Navbar />
            <SubNav />
            <Routes>
                <Route path="/" element={<Books />} />
            </Routes>
        </div>
    );
}

export default App;
