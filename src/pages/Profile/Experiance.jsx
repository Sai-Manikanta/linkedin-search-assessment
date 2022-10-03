import * as React from 'react';
import Box from '@mui/material/Box'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function Experiance({ list }) {
    return (
        <Box pt={2} px={4} bgcolor="#fff" borderRadius={3}>
            <Typography variant="h6" gutterBottom>Experiance</Typography>
            <List>
                {list.map((job, index, jobList) => (
                    <>
                        <ListItem alignItems="flex-start" sx={{ margin: 0, padding: '10px 0' }}>
                            <ListItemAvatar>
                                <Avatar alt="comapany pic" src={job.comapanyPic} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={job.role}
                                secondary={
                                    <React.Fragment>
                                        <Typography sx={{ display: 'inline' }} variant="body2" color="text.primary">
                                            {job.comapanyName}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {job.experience}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {job.location}
                                        </Typography>
                                        {job.jobDescription && (
                                            <Typography variant="body2" gutterBottom>
                                                {job.jobDescription}
                                            </Typography>
                                        )}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        {(jobList.length !== index + 1) && <Divider />}
                    </>
                ))}
            </List >
        </Box >
    );
}

export default Experiance
