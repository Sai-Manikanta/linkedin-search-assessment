import Box from '@mui/material/Box';
import CreatePost from './CreatePost';
import Post from './Post'
import { useSelector } from 'react-redux'

function Posts() {
    const posts = useSelector(store => store.posts);

    return (
        <Box flex={3} mt={{ xs: 2, md: 0 }} px={{ xs: 0, md: 2 }}>
            <CreatePost />
            {posts.map(post => (
                <Post
                    key={post._id}
                    title={post.title}
                    profilePic={post.profilePic}
                    postedOn={post.postedOn}
                    postUrl={post.postUrl}
                    postBeforeDescription={post.postBeforeDescription}
                    postAfterDescription={post.postAfterDescription}
                />
            ))}
        </Box>
    )
}

export default Posts