import { useMemo } from "react";
import { Container, Content, FlexColumn, TitleStyel } from "./style";
import { OverallItmeType, OverallType } from "./type";
import {
  GRAY_838383,
  GREEN_70B412,
  RED_DB0000,
} from "../../constants/colors/colors";
import Text from "../common/Text";

const Overall = (props: OverallType) => {
  const { values } = props;

  const renderList = useMemo(() => {
    return values.map(
      ({ value, description }: OverallItmeType, index: number) => {
        const color = value > 0 ? GREEN_70B412 : RED_DB0000;
        const stringValue =
          value > 0 ? `+${value.toFixed(2)}%` : `${value.toFixed(2)}%`;
        return (
          <FlexColumn key={`${index}`}>
            <Text weight={600} color={color}>
              {stringValue}
            </Text>
            <Text weight={400} color={GRAY_838383}>
              {description}
            </Text>
          </FlexColumn>
        );
      }
    );
  }, [values]);

  return (
    <Container>
      <TitleStyel weight={600}>อัตราผลตอบแทนเฉลี่ยย้อนหลัง</TitleStyel>
      <Content>{renderList}</Content>
    </Container>
  );
};

export default Overall;
