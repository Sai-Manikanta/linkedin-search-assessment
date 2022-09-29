import { Routes, Route, Navigate } from 'react-router-dom'
import { Feed, Search, NotFound } from './pages'

function App() {
    return (
        <>
            <header>Header</header>
            <Routes>
                <Route path="/" element={<Navigate to="/feed" />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/search/results" element={<Search />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App