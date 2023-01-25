import { Divider, ListItemButton, ListItemText } from "@mui/material";

import notFoundIcon from "../../../../constants/icons/ic_data_not_found.svg";

import { ListSearchProp } from "./type";
import { Container, ContainerNtoFound, StyleList } from "./style";
import Text from "../../../common/Text";

const ListSearch = (prop: ListSearchProp) => {
  const { list, onClickItem } = prop;

  return (
    <>
      {list.length === 0 && (
        <ContainerNtoFound>
          <img width="221" height="144" src={notFoundIcon} alt="not found" />
          <Text>ไม่พบหุ้นกู้ที่คุณค้นหาในตลาดรอง</Text>
        </ContainerNtoFound>
      )}
      {list.length > 0 && (
        <StyleList>
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
        </StyleList>
      )}
    </>
  );
};

export default ListSearch;
