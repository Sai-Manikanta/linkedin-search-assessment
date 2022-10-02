import Box from '@mui/material/Box';

function Feed() {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ flexGrow: 1.3 }} p={2}>
                left bar
            </Box>
            <Box sx={{ flexGrow: 3 }} p={2}>
                posts
            </Box>
            <Box sx={{ flexGrow: 1.8, display: { xs: 'none', lg: 'block' } }} p={2}>
                right bar
            </Box>
        </Box>
    )
}

export default Feed