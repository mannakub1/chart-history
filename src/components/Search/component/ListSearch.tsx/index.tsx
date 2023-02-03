import { Divider, ListItemButton, ListItemText } from "@mui/material";

import notFoundIcon from "../../../../constants/icons/ic_data_not_found.svg";

import { ListSearchProp } from "./type";
import { Container, ContainerNtoFound, StyleList } from "./style";
import Text from "../../../common/Text";
import { useCallback } from "react";
import Loading from "../../../common/Loading";

const ListSearch = (prop: ListSearchProp) => {
  const { list, onClickItem, scrollProp = {} } = prop;

  const onScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      const {
        isFetched,
        isLoading,
        hasNextPage,
        onScroll: onScrollProp,
      } = scrollProp;
      const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
      const bottom = scrollHeight - scrollTop - (clientHeight - 50) <= 100;

      if (bottom && isFetched && hasNextPage && !isLoading) {
        onScrollProp?.();
        console.log("fetch");
      }
    },
    [scrollProp]
  );

  return (
    <>
      {list.length === 0 && (
        <ContainerNtoFound>
          <img width="221" height="144" src={notFoundIcon} alt="not found" />
          <Text>ไม่พบหุ้นกู้ที่คุณค้นหาในตลาดรอง</Text>
        </ContainerNtoFound>
      )}
      {list.length > 0 && (
        <StyleList onScroll={onScroll}>
          {list.map((data, index) => {
            const { name, description } = data;
            return (
              <Container key={name + String(index)}>
                <ListItemButton disableTouchRipple>
                  <ListItemText
                    primary={name}
                    secondary={description}
                    onClick={onClickItem.bind(null, name)}
                  />
                </ListItemButton>

                {index === list.length - 1 ? null : (
                  <Divider variant="middle" />
                )}
              </Container>
            );
          })}
          <Loading loading={scrollProp?.isLoading || false} />
        </StyleList>
      )}
    </>
  );
};

export default ListSearch;
