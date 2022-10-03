import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TurnedIn from '@mui/icons-material/TurnedIn';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Leftbar() {
    const { name, tagline, profilePic, banner, connections } = useSelector(store => store.user);
    const navigate = useNavigate();

    return (
        <Box flex={1.4}>
            <Box sx={{ borderRadius: '15px', overflow: 'hidden' }} bgcolor="#fff">
                <img
                    src={banner}
                    alt="banner"
                    style={{ width: '100%', objectFit: 'cover' }}
                />
                <Avatar
                    src={profilePic}
                    alt="Profile"
                    sx={{ width: 70, height: 70, margin: '-40px auto 10px' }}
                />
                <Box sx={{ textAlign: 'center' }} px={2} pb={2}>
                    <Typography variant="h6" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }} component="h3" onClick={() => navigate(`/${name.replace(/ /g, '-')}`)} gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="gray">
                        {tagline}
                    </Typography>
                </Box>
                <Divider />
                <Box p={2}>
                    <Stack direction="row">
                        <Typography flex={1} variant="body2" color="gray">
                            Connection
                        </Typography>
                        <Typography variant="body2" color="#3366ff" fontWeight={800}>
                            {connections}
                        </Typography>
                    </Stack>
                    <Typography variant="body2">
                        Grow your network
                    </Typography>
                </Box>
                <Divider />
                <Box p={2}>
                    <Typography variant="body2" fontWeight={500} color="gray" sx={{ display: 'flex', alignItems: 'center' }}>
                        <TurnedIn sx={{ marginRight: 1 }} /> My Items
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default Leftbar