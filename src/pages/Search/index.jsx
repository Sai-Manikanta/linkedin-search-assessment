import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import SearchList from './SearchList'
import { useSelector } from 'react-redux'
import { useLocation } from "react-router-dom";

function Search() {
    const { people, companies } = useSelector(store => store);
    const { search } = useLocation();
    const urlParams = new URLSearchParams(search);
    const keyword = urlParams.get('keywords');

    return (
        <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }} gap={3}>
            <Box flex={2}>
                <SearchList title="Companies" list={companies.filter(company => {
                    return company.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
                })} />
                <SearchList title="People" list={people} />
            </Box>
            <Box flex={1} mt={{ xs: 2, md: 0 }} px={{ xs: 0, md: 2 }}>
                <img
                    src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                    alt="advertisement"
                    style={{ borderRadius: '20px', width: '100%' }}
                />
            </Box>
        </Stack>
    )
}

export default Search