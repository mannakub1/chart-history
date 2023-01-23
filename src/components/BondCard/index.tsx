
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
                    <Text color={BLACK_212121} fontWeight={600}>
                        {title}
                    </Text>
                    <StyledBondDescriptionText>
                        {description}
                    </StyledBondDescriptionText>
                </StyledBondContentContainer>
            </StyledCardContentContainer>
            <StyledCardFooter>
                <div>
                    <Text fontWeight={600}>
                        {process.env.REACT_APP_TYPE === 'saving' ? "ดอกเบี้ยต่อปี" : "อัตราดอกเบี้ยหน้าตั๋ว"}
                    </Text>
                    <Text fontSize={'14px'} color={GRAY_838383}>
                        {rateType === '01' ? 'คงที่' : rateType === '02' ? 'ลอยตัว' : rateType === '03' ? 'ขั้นบันได' : null}
                    </Text>
                </div>
                <div>
                    <Chip label={interestRate} />
                </div>
            </StyledCardFooter>
        </StyledCard >
    )
}

export default BondCard