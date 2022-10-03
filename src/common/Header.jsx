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
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavLink = ({ href, icon, text }) => (
    <Link href={href} sx={{ display: 'block', textAlign: 'center', color: 'gray', textDecoration: 'none' }}>
        {icon}
        <Typography variant="body2" > {text}</Typography>
    </Link >
);

function Header() {
    const [inputFocus, setInputFocus] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const { profilePic, name } = useSelector(store => store.user);

    const searchHandler = e => {
        e.preventDefault();

        navigate(`/search?keywords=${searchQuery}`);
    }

    return (
        <AppBar sx={{ backgroundColor: '#fff', color: '#000' }} position="fixed" elevation={1}>
            <Container maxWidth="xl">
                <Toolbar>
                    <svg onClick={() => navigate('/feed')} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><rect width="72" height="72" fill="#117EB8" rx="4" /><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z" /></g></svg>
                    <form onSubmit={searchHandler} style={{ width: '100%' }}>
                        <Box sx={{
                            marginLeft: '10px',
                            position: 'relative',
                            width: { xs: '100%', md: 'auto' }
                        }}>
                            <Search sx={{ position: 'absolute', zIndex: '1000', top: 9, left: 8, color: 'gray', backgroundColor: '#f1f1f1' }} />
                            <OutlinedInput
                                placeholder="Search"
                                sx={{
                                    height: '42px',
                                    width: { xs: '100%', md: inputFocus ? '380px' : '230px' },
                                    transition: 'width 0.3s',
                                    paddingLeft: '22px',
                                    backgroundColor: '#f1f1f1'
                                }}
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                onFocus={() => setInputFocus(true)}
                                onBlur={() => setInputFocus(false)}
                            />
                        </Box>
                    </form>
                    <Stack direction="row" spacing={3} alignItems="center" sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'flex' } }}>
                        <NavLink href="#" text="Home" icon={<Home />} />
                        <NavLink href="#" text="My Network" icon={<PeopleAlt />} />
                        <NavLink href="#" text="Job" icon={<Work />} />
                        <NavLink href="#" text="Messaging" icon={<Message />} />
                        <NavLink href="#" text="Notifications" icon={<Notifications />} />
                        <Avatar alt="Remy Sharp" onClick={() => navigate(`/${name.replace(/ /g, '-')}`)} sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }} src={profilePic} />
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Header