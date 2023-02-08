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

  const data = useMemo(() => {
    const couponFrequency = () => {
      switch (detail?.couponFrequency) {
        case "1":
          return "ปีละ 1 ครั้ง หรือ ทุก 12 เดือน";
        case "2":
          return "ปีละ 2 ครั้ง หรือ ทุก 6 เดือน";
        case "4":
          return "ปีละ 4 ครั้ง หรือ ทุก 3 เดือน";
        case "12":
          return "ปีละ 12 ครั้ง หรือ ทุก 1 เดือน";
      }
    };
    const isBondTypeSaving = getBondType() === "saving";
    return {
      info1: isBondTypeSaving ? `${detail?.issueDate}` : `${detail?.bondAge}`,
      info2: isBondTypeSaving
        ? `${detail?.maturityDate}`
        : `${detail?.bondRemainingAge}`,
      info3: isBondTypeSaving
        ? `${detail?.parValue} `
        : `${detail?.bondRiskLevel}`,
      info4: isBondTypeSaving
        ? `${detail?.minimumUnit} `
        : `${detail?.maturityDate}`,
      info5: isBondTypeSaving
        ? `${detail?.incrementUnit} `
        : `${detail?.originalParValue.toLocaleString()} บาท`,
      info6: isBondTypeSaving ? null : couponFrequency(),
    };
  }, [detail]);

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
    return Object.entries(data).map(([, value], index) => {
      return (
        <FlexRow key={`${index}`}>
          <Text color={GRAY_565656}>{menu[index]}</Text>
          <div style={{ width: 130, textAlign: "end" }}>
            <Text>{value}</Text>
          </div>
        </FlexRow>
      );
    });
  }, [data]);

  return (
    <Container>
      <TitleStyel weight={600}>{title}</TitleStyel>
      <Content>{content}</Content>
    </Container>
  );
};

export default BondDetail;
