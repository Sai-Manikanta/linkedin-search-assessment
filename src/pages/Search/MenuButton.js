import React from 'react';
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom'

function MenuButton({ userId }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                variant="outlined"
                sx={{ borderRadius: '20px', marginTop: '18px' }}
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Click
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={() => {
                    handleClose();
                    navigate(`/profile?profileId=${userId}`)
                }}>View Profile</MenuItem>
                <MenuItem onClick={handleClose}>Add to favourite</MenuItem>
                <MenuItem onClick={handleClose}>Share</MenuItem>
                <MenuItem onClick={handleClose}>Connect</MenuItem>
            </Menu>
        </div>
    );
}

export default MenuButton;