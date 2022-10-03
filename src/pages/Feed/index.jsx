import Stack from '@mui/material/Stack';
import Leftbar from './Leftbar';
import Posts from './Posts';
import Rightbar from './Rightbar';


function Feed() {
    return (
        <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
            <Leftbar />
            <Posts />
            <Rightbar />
        </Stack>
    )
}

export default Feed