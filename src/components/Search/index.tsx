import { useState, useCallback } from "react";
import { InputAdornment, IconButton } from "@mui/material";

import { mockSearch } from "../../constants/mockup/data";
import searchIcon from "../../constants/icons/ic_search.svg";
import clearIcon from "../../constants/icons/ic_close-circle.svg";
import Text from "../common/Text";
import ListSearch from "./component/ListSearch.tsx";

import { StyleSearch, StyleSearchContainer, StyleLink, FlexRow } from "./style";
import { SearchProps } from "./type";

const Search = (props: SearchProps) => {
  const { setShowComponents, onSearch } = props;
  const [isShowSearchList, setIsShowSearchList] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [warning, setWarning] = useState<string | undefined>(undefined);
  const [isShowIconClear, setIsShowIconClear] = useState(false);

  const onCloseSearch = useCallback(
    (e) => {
      e.stopPropagation();
      setSearchValue("");
      setIsShowSearchList(false);
      setIsShowIconClear(false);
      setShowComponents(true);
      setWarning(undefined);
    },
    [
      setSearchValue,
      setShowComponents,
      setIsShowSearchList,
      setIsShowIconClear,
      setWarning,
    ]
  );

  const onClearSearchValue = useCallback(
    (e) => {
      e.stopPropagation();
      setSearchValue("");
      setIsShowIconClear(false);
      setWarning(undefined);
    },
    [setSearchValue, setIsShowIconClear, setWarning]
  );

  const onClickListItem = useCallback(
    (name: string) => {
      setIsShowSearchList(false);
      setSearchValue(name);
      setShowComponents(true);
      setIsShowIconClear(false);
    },
    [setSearchValue, setShowComponents, setIsShowSearchList, setIsShowIconClear]
  );

  const onSearchChange = useCallback(
    (e) => {
      const newValue = e.target.value;

      if (newValue.length > 50) {
        setWarning("ไม่สามารถค้นหาหุ้นที่ชื่อยาวเกิน 50 ตัวอักษรได้");
      } else {
        setWarning(undefined);
      }

      if (newValue !== "") {
        setIsShowIconClear(true);
        setSearchValue(newValue);
        onSearch?.(newValue);
      }
    },
    [setSearchValue, setIsShowIconClear, setWarning, onSearch]
  );

  const onSearchClick = useCallback(
    (value) => {
      setIsShowSearchList(true);
      setShowComponents(false);
      setSearchValue(value);
      if (value !== "") {
        setIsShowIconClear(true);
      }
    },
    [setSearchValue, setShowComponents, setIsShowSearchList, setIsShowIconClear]
  );

  return (
    <>
      <StyleSearchContainer>
        <FlexRow>
          <StyleSearch
            onClick={onSearchClick.bind(null, searchValue)}
            onChange={onSearchChange}
            fullWidth
            placeholder="ค้นหาหุ้นกู้ตลาดรอง"
            value={searchValue}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={searchIcon} alt="Search" />
                </InputAdornment>
              ),
              endAdornment: isShowIconClear && (
                <InputAdornment position="end">
                  <IconButton onClick={onClearSearchValue}>
                    <img src={clearIcon} alt="Clear" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {isShowSearchList && (
            <StyleLink onClick={onCloseSearch}>
              <Text>ยกเลิก</Text>
            </StyleLink>
          )}
        </FlexRow>

        {warning && (
          <FlexRow>
            <Text color={"red"} size={"12px"}>
              {warning}
            </Text>
          </FlexRow>
        )}
      </StyleSearchContainer>
      {isShowSearchList && (
        <ListSearch list={mockSearch} onClickItem={onClickListItem} />
      )}
    </>
  );
};

export default Search;
