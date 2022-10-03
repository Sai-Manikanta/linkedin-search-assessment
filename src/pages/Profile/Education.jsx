import * as React from 'react';
import Box from '@mui/material/Box'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function Education({ list }) {
    return (
        <Box pt={2} my={3} px={4} bgcolor="#fff" borderRadius={3}>
            <Typography variant="h6" gutterBottom>Education</Typography>
            <List>
                {list.map((education, index, educationList) => (
                    <>
                        <ListItem alignItems="flex-start" sx={{ margin: 0, padding: '10px 0' }}>
                            <ListItemAvatar>
                                <Avatar alt="comapany pic" src={education.institutePic} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={education.institute}
                                secondary={
                                    <React.Fragment>
                                        <Typography variant="body2" gutterBottom>
                                            {education.experience}
                                        </Typography>
                                        {education.grade && (
                                            <Typography variant="body2" gutterBottom>
                                                Grade: {education.grade}
                                            </Typography>
                                        )}
                                        <Typography variant="body2" gutterBottom>
                                            {education.location}
                                        </Typography>
                                        {education.educationDescription && (
                                            <Typography variant="body2" gutterBottom>
                                                {education.educationDescription}
                                            </Typography>
                                        )}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        {(educationList.length !== index + 1) && <Divider />}
                    </>
                ))}
            </List >
        </Box >
    );
}

export default Education
