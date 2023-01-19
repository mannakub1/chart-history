import { StyledSearch,StyledDiv} from './style'
import { mockupData } from '../../constants/mockupData/mockupData'
import Card from '../common/Card'
import { useState, useEffect, useRef } from 'react'
import { Divider, ListItemButton, InputAdornment, ListItemText, Typography } from '@mui/material'
import searchIcon from '../../constants/icons/ic_search.svg';

const Search = () => {
    const [isShowSearchList, setIsShowSearchList] = useState(true);
    const [bond, SetBond] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    const hadleListItemClick = (name) => {
        SetBond(name)
        setIsShowSearchList(false)
        setSearchValue(`you have select ${name} `)
    }
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }
    const handleSearchClick = () => {
        setIsShowSearchList(true)
        setSearchValue(``)
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
                }}
            />
            {isShowSearchList ? searchListContainer : null}
        </>
    );
};

export default Search