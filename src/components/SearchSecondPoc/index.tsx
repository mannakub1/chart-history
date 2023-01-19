import { StyledSearch, StyledSearchModal } from './style'
import { mockupData } from '../../constants/mockupData/mockupData'
import { useState } from 'react'
import { Divider, ListItemButton, InputAdornment, ListItemText, Modal, Typography, Button } from '@mui/material'
import searchIcon from '../../constants/icons/ic_search.svg';
import CloseIcon from '@mui/icons-material/Close';
import { Container } from '@mui/system'

const Search = () => {
    const [isShowSearchList, setIsShowSearchList] = useState(true);
    const [bond, SetBond] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const hadleListItemClick = (name) => {
        SetBond(name)
        setOpen(false)
        setIsShowSearchList(false)
        setSearchValue('')
    }
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }
    const handleSearchClick = () => {
        setIsShowSearchList(true)
        setSearchValue('')
    }
    let searchListContainer = (
        // Use inline style for demonstration.
        <div style={{ marginTop: '1rem' }}>
            {mockupData.map((data, index) => {
                return (
                    <div key={data.name}>
                        <ListItemButton sx={{ border: 0 }} disableTouchRipple>
                            <ListItemText primary={data.name} secondary={data.description} onClick={() => { hadleListItemClick(data.name) }} />
                        </ListItemButton>
                        {index === mockupData.length - 1 ? null : <Divider />}
                    </div>
                )
            })}
        </div>
    )
    return (
        <>
            <StyledSearch
                onClick={handleOpen}
                fullWidth
                placeholder='ค้นหาหุ้นกู้ตลาดรอง'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <img src={searchIcon} alt="Search Icon" />
                        </InputAdornment>
                    ),
                }}
            />
            <Modal
                open={open}
                onClose={handleClose}
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    transform: open ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                <Container maxWidth='xs' sx={{ bgcolor: 'white', borderRadius: '12px 12px 0px 0px', pt: 4, px: 0 }}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ mb: 3, color: 'gray' }}>
                                ค้นหาหุ้นกู้ตลาดรอง
                            </Typography>
                            <CloseIcon sx={{ cursor: 'pointer' }} onClick={() => setOpen(false)} />
                        </div>
                        <StyledSearchModal
                            onClick={handleSearchClick}
                            onChange={handleSearchChange}
                            fullWidth
                            placeholder='Search'
                            value={searchValue}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={searchIcon} alt="Search Icon" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {searchListContainer}
                    </div>

                </Container>
            </Modal>
        </>
    );
};

export default Search