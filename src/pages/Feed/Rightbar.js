import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const NewsItem = ({ title, author, tagline, lastItem }) => {
    return (
        <>
            <ListItem sx={{ padding: '10px 0' }}>
                <ListItemText
                    primary={title}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {author}
                            </Typography>
                            {tagline}
                        </React.Fragment>
                    }
                />
            </ListItem>
            {!lastItem && <Divider />}
        </>
    )
}

function Rightbar() {
    return (
        <Box flex={2} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box bgcolor="#fff" p={2} borderRadius="5px">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography>LinkedIn News</Typography>
                    <IconButton>
                        <FeaturedPlayListIcon />
                    </IconButton>
                </Stack>
                <List sx={{ padding: 0 }}>
                    <NewsItem
                        title="Brunch this weekend?"
                        author="Ali Connors"
                        tagline="— I'll be in your neighborhood doing errands this…"
                    />
                    <NewsItem
                        title="Summer BBQ"
                        author="to Scott, Alex, Jennifer"
                        tagline=" — Wish I could come, but I'm out of town this…"
                    />
                    <NewsItem
                        title="Oui Oui"
                        author="Sandra Adams"
                        tagline=" — Do you have Paris recommendations? Have you ever…"
                        lastItem
                    />
                </List>
            </Box>

            <Box mt={2}>
                <img
                    src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                    alt="advertisement"
                    style={{ borderRadius: '20px', width: '100%' }}
                />
            </Box>
        </Box >
    )
}

export default Rightbar