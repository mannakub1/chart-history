import { Typography, Avatar } from "@mui/material"
import Chip from "../common/Chip"
import { StyledCard,StyledAvatar, BondDescriptionText, BondContentContainer, BondTitleText, StyledCardActions, StyledAvartarContainer, StyledCardContentContainer, StyledInterestRateTitle } from "./style"
import { BondCardProps } from "./type"

const BondCard = (props: BondCardProps) => {
    const { name, description, interestRate,BondImageUrl } = props

    return (
        <StyledCard>
            <StyledCardContentContainer>
                <StyledAvartarContainer>
                    <StyledAvatar variant="square" src={BondImageUrl} />
                </StyledAvartarContainer>
                <BondContentContainer>
                    <BondTitleText>{name}</BondTitleText>
                    <BondDescriptionText >{description}</BondDescriptionText>
                </BondContentContainer>
            </StyledCardContentContainer>
            <StyledCardActions>
                <StyledInterestRateTitle>
                    อัตราดอกเบี้ยหน้าตั๋ว
                </StyledInterestRateTitle>
                <Chip label={interestRate} />
            </StyledCardActions>
        </StyledCard >
    )
}

export default BondCard