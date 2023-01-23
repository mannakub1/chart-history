
import Chip from "../common/Chip"
import { BLACK_212121, GRAY_838383 } from "../../constants/colors/colors"
import { StyledCard, StyledAvatar, StyledBondDescriptionText, StyledBondContentContainer, StyledCardFooter, StyledAvartarContainer, StyledCardContentContainer } from "./style"
import { BondCardProps } from "./type"
import Text from "../common/Text";

const BondCard = (props: BondCardProps) => {
    const { title, description, interestRate, imageUrl, rateType } = props
    return (
        <StyledCard>
            <StyledCardContentContainer>
                <StyledAvartarContainer>
                    <StyledAvatar variant="square" src={imageUrl} />
                </StyledAvartarContainer>
                <StyledBondContentContainer>
                    <Text color={BLACK_212121} weight={600}>
                        {title}
                    </Text>
                    <StyledBondDescriptionText lineHeight="21px"
                    size="14px"
                    color={GRAY_838383}
                    >
                        {description}
                    </StyledBondDescriptionText>
                </StyledBondContentContainer>
            </StyledCardContentContainer>
            <StyledCardFooter>
                <div>
                    <Text weight={600}>
                        {process.env.REACT_APP_TYPE === 'saving' ? "ดอกเบี้ยต่อปี" : "อัตราดอกเบี้ยหน้าตั๋ว"}
                    </Text>
                    {rateType === '03' &&
                        <Text size={'14px'} color={GRAY_838383}>
                            ขั้นบันได
                        </Text>
                    }
                </div>
                <div>
                    <Chip label={interestRate} />
                </div>
            </StyledCardFooter>
        </StyledCard >
    )
}

export default BondCard