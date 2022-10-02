import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import Search from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import Home from '@mui/icons-material/Home';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import Work from '@mui/icons-material/Work';
import Message from '@mui/icons-material/Message';
import Notifications from '@mui/icons-material/Notifications';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const NavLink = ({ href, icon, text }) => (
    <Link href={href} sx={{ display: 'block', textAlign: 'center', color: 'gray', textDecoration: 'none' }}>
        {icon}
        <Typography variant="body2" > {text}</Typography>
    </Link >
);

function Header() {
    const [inputFocus, setInputFocus] = useState(false);

    return (
        <AppBar sx={{ backgroundColor: '#fff', color: '#000' }} position="static" elevation={1}>
            <Container maxWidth="xl">
                <Toolbar>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><rect width="72" height="72" fill="#117EB8" rx="4" /><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z" /></g></svg>
                    <Box sx={{
                        marginLeft: '10px',
                        backgroundColor: '#f1f1f1',
                        position: 'relative',
                        width: { xs: '100%', md: 'auto' }
                    }}>
                        <Search sx={{ position: 'absolute', top: 9, left: 8, color: 'gray' }} />
                        <OutlinedInput
                            placeholder="Search"
                            sx={{
                                height: '42px',
                                width: { xs: '100%', md: inputFocus ? '380px' : '230px' },
                                transition: 'width 0.3s',
                                paddingLeft: '22px',
                            }}
                            onFocus={() => setInputFocus(true)}
                            onBlur={() => setInputFocus(false)}
                        />
                    </Box>
                    <Stack direction="row" spacing={3} alignItems="center" sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'flex' } }}>
                        <NavLink href="#" text="Home" icon={<Home />} />
                        <NavLink href="#" text="My Network" icon={<PeopleAlt />} />
                        <NavLink href="#" text="Job" icon={<Work />} />
                        <NavLink href="#" text="Messaging" icon={<Message />} />
                        <NavLink href="#" text="Notifications" icon={<Notifications />} />
                        <Avatar alt="Remy Sharp" src="https://media-exp1.licdn.com/dms/image/D5603AQF_L3YOBN7twA/profile-displayphoto-shrink_400_400/0/1664083675874?e=1670457600&v=beta&t=c2C3Ae4BHI8rMhGAftSqs4UtJ0IAKD5WUkfMUlmkge0" />
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Header