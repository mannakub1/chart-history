import { useState, useCallback } from "react";
import { InputAdornment, IconButton } from "@mui/material";

import searchIcon from "../../constants/icons/ic_search.svg";
import clearIcon from "../../constants/icons/ic_close-circle.svg";
import Text from "../common/Text";
import ListSearch from "./component/ListSearch.tsx";

import { StyleSearch, StyleSearchContainer, StyleLink, FlexRow } from "./style";
import { SearchProps } from "./type";
import ReactGA from "react-ga";

const Search = (props: SearchProps) => {
  const { setShowComponents, onSearch, onSelected, valueSearch, scrollProp } =
    props;
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
      onSearch?.("");
      setIsShowIconClear(false);
      setWarning(undefined);
    },
    [setSearchValue, setIsShowIconClear, setWarning, onSearch]
  );

  const onClickListItem = useCallback(
    (name: string) => {
      onSelected?.(name);
      setIsShowSearchList(false);
      setSearchValue(name);
      setShowComponents(true);
      setIsShowIconClear(false);

      ReactGA.initialize(`${process.env.REACT_APP_GA_KEY}`, {
        debug: process.env.REACT_APP_GA_DEBUG === "true",
      });

      const serviceName = "CBWalletYTMGraph";
      ReactGA.event({
        category: serviceName,
        action: "Click",
        label: `${serviceName}_Select${name}`,
      });

      ReactGA.pageview(
        `${window.location.pathname}${window.location.search}`,
        [],
        serviceName
      );
    },
    [
      onSelected,
      setSearchValue,
      setShowComponents,
      setIsShowSearchList,
      setIsShowIconClear,
    ]
  );

  const onSearchChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      setSearchValue(newValue);

      if (newValue.length > 50) {
        setWarning("???????????????????????????????????????????????????????????????????????????????????????????????? 50 ?????????????????????????????????");
      } else {
        setWarning(undefined);
      }

      if (newValue !== "") {
        setIsShowIconClear(true);
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
            placeholder="?????????????????????????????????????????????????????????"
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
              <Text>??????????????????</Text>
            </StyleLink>
          )}
        </FlexRow>

        {warning && (
          <FlexRow>
            <Text color={"red"} size={"0.75rem"}>
              {warning}
            </Text>
          </FlexRow>
        )}
      </StyleSearchContainer>
      {isShowSearchList && (
        <ListSearch
          list={valueSearch}
          onClickItem={onClickListItem}
          scrollProp={scrollProp}
        />
      )}
    </>
  );
};

export default Search;
