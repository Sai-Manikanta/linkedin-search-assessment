import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MenuButton from './MenuButton';

const SearchItem = ({ name, image, tagline, place }) => {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        src={image}
                        alt="Remy Sharp"
                        sx={{ width: '55px', height: '55px' }}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    sx={{ paddingLeft: '10px', paddingTop: '6px' }}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                variant="body2"
                                component="p"
                                color="text.primary"
                            >
                                {tagline}
                            </Typography>
                            <Typography
                                sx={{ display: 'inline' }}
                                variant="body2"
                            >
                                - {place}
                            </Typography>
                        </React.Fragment>
                    }
                />
                <MenuButton userId={name} />
            </ListItem>

        </>
    )
}

export default SearchItem