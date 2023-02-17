import { Container } from "./style";
import notFoundIcon from "../../constants/icons/ic_data_not_found.svg";
import { ContainerNotFound } from "../Home/style";
import Text from "../../components/common/Text";

const NotFound = () => {
  return (
    <Container>
      <ContainerNotFound>
        <img width="221" height="144" src={notFoundIcon} alt="not found" />
        <Text>ไม่พบหุ้นกู้ที่คุณค้นหาในตลาดรอง</Text>
      </ContainerNotFound>
    </Container>
  );
};

export default NotFound;
