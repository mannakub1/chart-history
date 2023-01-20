import { StyledSearch, StyledSearchModal, StyledDiv, } from './style'
import { mockupData } from '../../constants/mockupData/mockupData'
import { useState } from 'react'
import { Divider, ListItemButton, List, InputAdornment, ListItemText, Modal, Typography, Button } from '@mui/material'
import searchIcon from '../../constants/icons/ic_search.svg';
import CloseIcon from '@mui/icons-material/Close';
import { Container } from '@mui/system'

const Search = ({ setshowComponents, showComponents }) => {
    const [isShowSearchList, setIsShowSearchList] = useState(true);
    const [bond, SetBond] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        setshowComponents(false)
    };
    const handleClose = () => {
        setOpen(false)
        setshowComponents(true)
    };
    const hadleListItemClick = (name) => {
        SetBond(name)
        setOpen(false)
        setIsShowSearchList(false)
        setSearchValue('')
        setshowComponents(true)
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
      
            <List sx={{ overflow: 'auto',maxHeight: '450px'  }}>
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
            </List >


    )
    return (
        <>
            <StyledSearch
                onClick={handleOpen}
                fullWidth
                value={bond}
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
                <Container maxWidth='xs' sx={{ bgcolor: 'white', borderRadius: '12px 12px 0px 0px', paddingTop: 4}}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ marginBottom: 3, color: 'gray' }}>
                                ค้นหาหุ้นกู้ตลาดรอง
                            </Typography>
                            <CloseIcon sx={{ cursor: 'pointer' }} onClick={() => {
                                setOpen(false)
                                setshowComponents(true)
                            }
                            } />
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