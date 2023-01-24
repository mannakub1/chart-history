import { StyledSearch, StyledList, StyledButtonIcon ,StyledSearchContainer} from './style'
import { mockupData } from '../../constants/mockupData/mockupData'
import { SearchProps } from './type'
import { useState, useCallback } from 'react'
import { Divider, ListItemButton, InputAdornment, ListItemText, Link, Typography } from '@mui/material'
import searchIcon from '../../constants/icons/ic_search.svg';
import clearIcon from '../../constants/icons/ic_close-circle.svg';

const Search = (props: SearchProps) => {
    const { setShowComponents } = props
    const [isShowSearchList, setIsShowSearchList] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isShowClearButton, setIsShowClearButton] = useState(false)

    const handleCloseIconClick = useCallback((e) => {
        e.stopPropagation();
        setSearchValue('')
        setIsShowSearchList(false)
        setIsShowClearButton(false)
        setShowComponents(true)
    }, [setShowComponents])

    const handleClearButtonClick = useCallback(() => {
        setSearchValue('')
        setIsShowClearButton(false)
    }, [setSearchValue])

    const hadleListItemClick = useCallback((name) => {
        setIsShowSearchList(false)
        setSearchValue(`${name} `)
        setShowComponents(true)
    }, [setShowComponents])

    const handleSearchChange = useCallback((e) => {
        setSearchValue(e.target.value);
        if (e.target.value !== '') {
            setIsShowClearButton(true)
        }
    }, [setIsShowClearButton])

    const handleSearchClick = useCallback((event) => {
            setIsShowSearchList(true)
            setShowComponents(false)
            setSearchValue('')
    }, [setShowComponents, setIsShowSearchList])

    return (
        <>
            <StyledSearchContainer>
                <StyledSearch
                    onClick={handleSearchClick}
                    onChange={handleSearchChange}
                    fullWidth placeholder='ค้นหาหุ้นกู้ตลาดรอง'
                    value={searchValue}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={searchIcon} alt="Search" />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            isShowClearButton && <InputAdornment position="end">
                                <StyledButtonIcon onClick={handleClearButtonClick} >
                                    <img src={clearIcon} alt="Clear" />
                                </StyledButtonIcon>
                            </InputAdornment>)
                    }}
                />
                {isShowSearchList && <Link sx={{ pl: "8px" }} onClick={handleCloseIconClick}><Typography>ยกเลิก</Typography></Link>}

            </StyledSearchContainer >
            {isShowSearchList && <StyledList>
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
            </StyledList>}
        </>
    );
};

export default Search