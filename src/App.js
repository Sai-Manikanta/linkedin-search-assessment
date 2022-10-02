import { Routes, Route, Navigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import Header from './common/Header'
import { Feed, Search, NotFound } from './pages'


function App() {
    return (
        <>
            <Header />
            <Container fixed sx={{ marginTop: '26px' }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/feed" />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/search/results" element={<Search />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </>
    )
}

export default App