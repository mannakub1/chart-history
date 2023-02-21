import { useMemo } from "react";
import { Container, Content, FlexColumn, TitleStyel } from "./style";
import { OverallItmeType, OverallType } from "./type";
import { BLUE_025BB7, GRAY_838383 } from "../../constants/colors";
import Text from "../common/Text";

const Overall = (props: OverallType) => {
  const { values } = props;

  const renderList = useMemo(() => {
    return values.map(({ value, label }: OverallItmeType, index: number) => {
      return (
        <FlexColumn key={`${index}`}>
          <Text weight={600} color={value ? BLUE_025BB7 : GRAY_838383}>
            {value || "-"}
          </Text>
          <Text weight={400} color={GRAY_838383}>
            {label}
          </Text>
        </FlexColumn>
      );
    });
  }, [values]);

  return (
    <Container>
      <TitleStyel weight={600}>อัตราผลตอบแทนเฉลี่ยย้อนหลัง</TitleStyel>
      <Content>{renderList}</Content>
    </Container>
  );
};

export default Overall;
