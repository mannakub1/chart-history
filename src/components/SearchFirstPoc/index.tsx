import { StyledSearch, StyledDiv } from './style'
import { mockupData } from '../../constants/mockupData/mockupData'
import Card from '../common/Card'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Divider, ListItemButton, InputAdornment, List, ListItemText, Typography, IconButton } from '@mui/material'
import searchIcon from '../../constants/icons/ic_search.svg';
import CloseIcon from '@mui/icons-material/Close';


const Search = ({ setshowComponents, showComponents }) => {
    const [isShowSearchList, setIsShowSearchList] = useState(false);
    const [bond, SetBond] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    const handleSearchCloseIconClick = useCallback((e) => {
        e.stopPropagation();
        setSearchValue('')
        setIsShowSearchList(false)
        setshowComponents(true)

    }, [setshowComponents])
    const hadleListItemClick = useCallback((name) => {
        SetBond(name)
        setIsShowSearchList(false)
        setSearchValue(`${name} `)
        setshowComponents(true)
    }, [])
    const handleSearchChange = useCallback((e) => {
        setSearchValue(e.target.value)
    }, [])
    const handleSearchClick = useCallback((event) => {
        if (event.target.id !== 'close-icon-button') {
            setIsShowSearchList(!isShowSearchList)
            setshowComponents(!showComponents)
            setSearchValue(``)
        }
    }, [])
    let searchListContainer = (
        // Use inline style for demonstration.
        <List sx={{ overflow: 'auto', maxHeight: '470px', bgcolor: 'white', borderRadius: '8px' }}>
            {mockupData.map((data, index) => {
                return (
                    <div key={data.name}>
                        <ListItemButton disableTouchRipple>
                            <ListItemText primary={data.name} secondary={data.description} onClick={() => { hadleListItemClick(data.name) }} />
                        </ListItemButton>
                        {index === mockupData.length - 1 ? null : <Divider />}
                    </div>
                )
            })}
        </List>
    )
    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                <StyledSearch
                    onClick={handleSearchClick}
                    onChange={handleSearchChange}
                    fullWidth placeholder='ค้นหาหุ้นกู้ตลาดรอง'
                    inputRef={inputRef}
                    value={searchValue}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={searchIcon} alt="Search Icon" />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            isShowSearchList && <InputAdornment position="end">
                                <IconButton style={{ zIndex: '100' }} id="close-icon-button" onClick={handleSearchCloseIconClick} >
                                    <CloseIcon sx={{ cursor: 'pointer', color: 'gray' }} />
                                </IconButton>
                            </InputAdornment>)
                    }}
                />
            </div >
            {isShowSearchList ? searchListContainer : null}
        </>
    );
};

export default Search