import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WorkIcon from '@mui/icons-material/Work';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreatePostButton = styled(Button)({
    flexGrow: 1,
    marginLeft: '10px',
    borderRadius: '30px',
    backgroundColor: '#f1f1f1',
    textAlign: 'left',
    justifyContent: "flex-start",
    border: '1px solid gray',
    color: 'gray',
    paddingLeft: '30px',
    textTransform: 'capitalize',
    fontSize: '1rem'
});

function CreatePost() {
    const { profilePic, name } = useSelector(store => store.user);
    const navigate = useNavigate();

    return (
        <Box p={2} bgcolor="#fff" sx={{ borderRadius: '15px', overflow: 'hidden' }}>
            <Stack direction="row">
                <Avatar
                    src={profilePic}
                    alt="profile"
                    sx={{ width: 56, height: 56, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                    onClick={() => navigate(`/${name.replace(/ /g, '-')}`)}
                />
                <CreatePostButton>
                    Start Post
                </CreatePostButton>
            </Stack>
            <Stack direction="row" sx={{ marginTop: '15px' }}>
                <Button startIcon={<PhotoSizeSelectActualIcon sx={{ color: '#3366ff' }} />} sx={{ flexGrow: 1, color: 'gray' }}>
                    Photo
                </Button>
                <Button startIcon={<SmartDisplayIcon sx={{ color: '#75b817' }} />} sx={{ flexGrow: 1, color: 'gray' }}>
                    Video
                </Button>
                <Button startIcon={<WorkIcon sx={{ color: '#c80fe8' }} />} sx={{ flexGrow: 1, color: 'gray' }}>
                    Job
                </Button>
                <Button startIcon={<NewspaperIcon sx={{ color: 'orange' }} />} sx={{ flexGrow: 1, color: 'gray' }}>
                    Article
                </Button>
            </Stack>
        </Box>
    )
}

export default CreatePost