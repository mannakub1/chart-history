import { useMemo } from "react";
import { Container, Content, FlexRow, TitleStyel } from "./style";
import { BondDetailType } from "./type";
import Text from "../common/Text";
import { GRAY_565656 } from "../../constants/colors/colors";

const getBondType = () => process.env.REACT_APP_TYPE;
const menuCorp = [
  "อายุหุ้นกู้",
  "อายุคงเหลือ",
  "ความเสี่ยง",
  "วันครบกำหนดไถ่ถอน",
  "มูลค่าต่อหน่วย ณ วันออกหุ้นกู้",
  "งวดการจ่ายดอกเบี้ย",
];

const menuSaving = [
  "วันที่ออกตราสาร",
  "วันครบกำหนดไถ่ถอน",
  "ราคาต่อหน่วยเริ่มต้น",
  "การซื้อขั้นต่ำ",
  "ทวีคูณครั้งละ",
];

const BondDetail = (props: BondDetailType) => {
  const { detail } = props;
  const title = useMemo(() => {
    if (getBondType() === "saving") {
      return "ข้อมูลพันธบัตร";
    }
    return "ข้อมูลหุ้นกู้";
  }, []);

  const content = useMemo(() => {
    let menu = menuCorp;
    if (getBondType() === "saving") {
      menu = menuSaving;
    }

    return Object.entries(detail).map(([, value], index) => {
      return (
        <FlexRow>
          <Text color={GRAY_565656}>{menu[index]}</Text>
          <div style={{ width: 130, textAlign: "end" }}>
            <Text>{value}</Text>
          </div>
        </FlexRow>
      );
    });
  }, [detail]);

  return (
    <Container>
      <TitleStyel weight={600}>{title}</TitleStyel>
      <Content>{content}</Content>
    </Container>
  );
};

export default BondDetail;
