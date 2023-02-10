import { Avatar } from "@mui/material";
import DefaultImage from "@mui/icons-material/BrokenImage";

import Chip from "../common/Chip";
import Text from "../common/Text";

import { BLACK_212121, GRAY_838383 } from "../../constants/colors";
import {
  StyledAvartarContainer,
  StyledCard,
  StyledCardContentContainer,
  StyledCardFooter,
  StyledBondDescriptionText,
  StyledBondContentContainer,
} from "./style";
import { BondCardProps } from "./type";

const BondCard = (props: BondCardProps) => {
  const { title, description, interestRate, imageUrl, rateType } = props;
  return (
    <StyledCard>
      <StyledCardContentContainer>
        <StyledAvartarContainer>
          {imageUrl ? (
            <Avatar sizes={"32"} variant="square" src={imageUrl} />
          ) : (
            <Avatar sizes={"32"} variant="square">
              <DefaultImage />
            </Avatar>
          )}
        </StyledAvartarContainer>
        <StyledBondContentContainer>
          <Text color={BLACK_212121} weight={600}>
            {title}
          </Text>
          <StyledBondDescriptionText
            lineHeight="1.311rem"
            size="0.875rem"
            color={GRAY_838383}
          >
            {description}
          </StyledBondDescriptionText>
        </StyledBondContentContainer>
      </StyledCardContentContainer>
      <StyledCardFooter>
        <div>
          <Text weight={600}>
            {process.env.REACT_APP_TYPE === "saving"
              ? "ดอกเบี้ยต่อปี"
              : "อัตราดอกเบี้ยหน้าตั๋ว"}
          </Text>
          {rateType === "03" && (
            <Text size={"0.875rem"} color={GRAY_838383}>
              ขั้นบันได
            </Text>
          )}
        </div>
        <div>
          <Chip label={interestRate} />
        </div>
      </StyledCardFooter>
    </StyledCard>
  );
};

export default BondCard;
