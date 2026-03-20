import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '@/pages/index';
import Gaveliste from '@/pages/Gaveliste';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/gaveliste' element={<Gaveliste />} />
            </Routes>
        </Router>
    )
}