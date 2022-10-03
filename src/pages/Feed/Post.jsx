import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import CommentIcon from '@mui/icons-material/Comment';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';


export default function Post({ title, profilePic, postedOn, postUrl, postBeforeDescription, postAfterDescription }) {
    return (
        <Card sx={{ margin: '20px 0px' }}>
            <CardHeader
                avatar={
                    <Avatar
                        src={profilePic}
                        alt="profile"
                        sx={{ width: 46, height: 46, borderRadius: '3px' }}
                    />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon />
                    </IconButton>
                }
                title={title}
                subheader={postedOn}
            />
            {postBeforeDescription && (
                <CardContent sx={{ paddingTop: 0 }}>
                    <Typography variant="body2" color="text.secondary">
                        {postBeforeDescription}
                    </Typography>
                </CardContent>
            )}
            <CardMedia component="img" image={postUrl} alt={title} />
            {postAfterDescription && (
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {postAfterDescription}
                    </Typography>
                </CardContent>
            )}
            <CardActions>
                <Stack direction="row" width="100%">
                    <Button startIcon={<ThumbUpOffAltIcon />} sx={{ flexGrow: 1, color: 'gray' }}>
                        Like
                    </Button>
                    <Button startIcon={<CommentIcon />} sx={{ flexGrow: 1, color: 'gray' }}>
                        Comment
                    </Button>
                    <Button startIcon={<ShareIcon />} sx={{ flexGrow: 1, color: 'gray' }}>
                        Share
                    </Button>
                    <Button startIcon={<SendIcon />} sx={{ flexGrow: 1, color: 'gray' }}>
                        Send
                    </Button>
                </Stack>
            </CardActions>
        </Card >
    );
}
