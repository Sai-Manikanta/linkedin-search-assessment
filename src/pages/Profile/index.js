import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Experiance from './Experiance'
import Education from './Education'
import { useParams, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Profile() {
    const param = useParams();
    const { user, people, companies } = useSelector(store => store);
    const { search } = useLocation();
    const urlParams = new URLSearchParams(search);
    const profileId = urlParams.get('profileId');
    let profile = param.userName ? user : people.find(item => profileId.indexOf(item.name) !== -1);
    profile = profile ? profile : companies.find(item => profileId.indexOf(item.name) !== -1);

    return (
        <Stack direction={{ xs: 'column', md: 'row' }} gap={3}>
            <Box flex={2}>
                <Box bgcolor="#fff" borderRadius={3} overflow="hidden">
                    <img
                        src={profile.banner}
                        alt="banner"
                        width="100%"
                    />
                    <Avatar
                        src={profile.profilePic}
                        sx={{ width: { xs: '120px', sm: '140px', md: '176px' }, height: { xs: '120px', sm: '140px', md: '176px' }, display: 'block', marginTop: { xs: '-50px', sm: '-100px', md: '-100px' }, marginLeft: '40px', border: '5px solid #fff' }}
                        alt="Profile pic"
                    />
                    <Box py={2} px={4}>
                        <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
                            {profile.name}
                        </Typography>
                        <Typography gutterBottom>
                            {profile.tagline}
                        </Typography>
                        <Typography variant="body1" color="gray" gutterBottom>
                            {profile.place}
                        </Typography>
                        <Button variant="contained" sx={{ borderRadius: '22px' }}>
                            Connect
                        </Button>
                    </Box>
                </Box>
                {profile.about && (
                    <Box py={2} px={4} bgcolor="#fff" sx={{ margin: '15px 0', }} borderRadius={3}>
                        <Typography variant="h6" gutterBottom>About</Typography>
                        <Typography>{profile.about}</Typography>
                    </Box>
                )}
                {profile.experience && <Experiance list={profile.experience} />}
                {profile.education && <Education list={profile.education} />}
                {profile.hobbies && (
                    <Box p={2} mt={3} px={4} bgcolor="#fff" borderRadius={3}>
                        <Typography variant="h6" gutterBottom>Hobbies</Typography>
                        <Typography variant="body1">
                            {profile.hobbies}
                        </Typography>
                    </Box>
                )}
            </Box>
            <Box flex={1} px={{ xs: 0, md: 2 }}>
                <img
                    src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                    alt="advertisement"
                    style={{ borderRadius: '20px', width: '100%' }}
                />
            </Box>
        </Stack>
    )
}

export default Profile