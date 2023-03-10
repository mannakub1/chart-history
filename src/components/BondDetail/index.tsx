import { useMemo } from "react";
import { Container, Content, FlexRow, TitleStyel } from "./style";
import { BondDetailType } from "./type";
import Text from "../common/Text";
import { GRAY_565656 } from "../../constants/colors";

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
  const { detail, bondType } = props;

  const data = useMemo(() => {
    const {
      issueDate,
      maturityDate,
      parValue,
      minimumUnit,
      incrementUnit,
      bondAge,
      bondRemainingAge,
      bondRiskLevel,
      originalParValue,
      couponFrequency,
    } = detail || {};
    const getCouponFrequencyDescription = () => {
      switch (couponFrequency) {
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
    const isBondTypeSaving = bondType === "SB";

    return isBondTypeSaving
      ? {
          info1: issueDate ? `${issueDate}` : "-",
          info2: maturityDate ? `${maturityDate}` : "-",
          info3: parValue ? `${parValue}` : "-",
          info4: minimumUnit ? `${minimumUnit}` : "-",
          info5: incrementUnit ? `${incrementUnit}` : "-",
        }
      : {
          info1: bondAge ? `${bondAge}` : "-",
          info2: bondRemainingAge ? `${bondRemainingAge}` : "-",
          info3: bondRiskLevel ? `${bondRiskLevel}` : "-",
          info4: maturityDate ? `${maturityDate}` : "-",
          info5: originalParValue
            ? `${originalParValue.toLocaleString()} บาท`
            : "-",
          info6: couponFrequency ? getCouponFrequencyDescription() : "-",
        };
  }, [detail, bondType]);

  const title = useMemo(() => {
    if (bondType === "SB") {
      return "ข้อมูลพันธบัตร";
    }
    return "ข้อมูลหุ้นกู้";
  }, [bondType]);

  const content = useMemo(() => {
    let menu = menuCorp;
    if (bondType === "SB") {
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
  }, [data, bondType]);

  return (
    <Container>
      <TitleStyel weight={600}>{title}</TitleStyel>
      <Content>{content}</Content>
    </Container>
  );
};

export default BondDetail;
