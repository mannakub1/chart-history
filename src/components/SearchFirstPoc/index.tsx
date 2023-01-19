import { StyledSearch, StyledDiv } from './style'
import { mockupData } from '../../constants/mockupData/mockupData'
import Card from '../common/Card'
import { useState, useEffect, useRef } from 'react'
import { Divider, ListItemButton, InputAdornment, ListItemText, Typography, IconButton } from '@mui/material'
import searchIcon from '../../constants/icons/ic_search.svg';
import CloseIcon from '@mui/icons-material/Close';

const Search = ({ setshowComponents ,showComponents}) => {
    const [isShowSearchList, setIsShowSearchList] = useState(false);
    const [bond, SetBond] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    const handleSearchCloseIconClick = () => {
        setSearchValue('')
        setIsShowSearchList(false)
        setshowComponents(!showComponents)
    }
    const hadleListItemClick = (name) => {
        SetBond(name)
        setIsShowSearchList(false)
        setSearchValue(`you have select ${name} `)
        setshowComponents(true)
    }
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }
    const handleSearchClick = (event) => {
        if (event.target.id !== 'close-icon-button') {
            setIsShowSearchList(!isShowSearchList)
            setshowComponents(!showComponents)
            setSearchValue(``)
        }
    }
    let searchListContainer = (
        // Use inline style for demonstration.
        <StyledDiv>
            <Card>
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
            </Card>
        </StyledDiv>
    )
    return (
        <>
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
                            <IconButton id="close-icon-button" onClick={handleSearchCloseIconClick} >
                                <CloseIcon sx={{ cursor: 'pointer', color: 'gray' }} />
                            </IconButton>
                        </InputAdornment>)
                }}
            />
            {isShowSearchList ? searchListContainer : null}
        </>
    );
};

export default Search