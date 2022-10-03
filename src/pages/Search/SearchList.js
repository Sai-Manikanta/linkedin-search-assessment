import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import SearchItem from './SearchItem'
import Divider from '@mui/material/Divider';

function SearchList({ title, list }) {
    return (
        <Box p={2} pr={0} mb={3} bgcolor="#fff" borderRadius={5}>
            <Typography variant="h6" component="h3" sx={{ paddingLeft: '13px' }}>{title}</Typography>
            {list.length === 0 ? <Typography sx={{ paddingLeft: '13px' }}>No Results</Typography> : (
                <List sx={{ padding: 0 }}>
                    {list.map((item, index) => (
                        <>
                            <SearchItem
                                key={item.name}
                                name={item.name}
                                image={item.profilePic}
                                tagline={item.tagline}
                                place={item.place}
                            />
                            {list.length !== index + 1 && <Divider variant="inset" component="li" />}
                        </>
                    ))}
                </List>
            )}
        </Box>
    )
}

export default SearchList
