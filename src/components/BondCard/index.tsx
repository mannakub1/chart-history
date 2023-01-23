
import Chip from "../common/Chip"
import env from "react-dotenv";
import { StyledCard, StyledInterestRateSubTitle, StyledAvatar, StyledBondDescriptionText, StyledBondContentContainer, StyledBondTitleText, StyledCardActions, StyledAvartarContainer, StyledCardContentContainer, StyledInterestRateTitle } from "./style"
import { BondCardProps } from "./type"

const BondCard = (props: BondCardProps) => {
    const { name, description, interestRate, imageUrl, rateType } = props
    const bondType = env.REACT_APP_BOND_TYPE
    const rateTypeText = () => {
        switch (rateType) {
            case "01":
                return "คงที่";
            case "02":
                return "ลอยตัว";
            case "03":
                return "ขั้นบันได";
        }
    }
    return (
        <StyledCard>
            <StyledCardContentContainer>
                <StyledAvartarContainer>
                    <StyledAvatar variant="square" src={imageUrl} />
                </StyledAvartarContainer>
                <StyledBondContentContainer>
                    <StyledBondTitleText>{name}</StyledBondTitleText>
                    <StyledBondDescriptionText >{description}</StyledBondDescriptionText>
                </StyledBondContentContainer>
            </StyledCardContentContainer>
            <StyledCardActions>
                <div>
                    {bondType === 'saving' ? <StyledInterestRateTitle>
                        ดอกเบี้ยต่อปี
                    </StyledInterestRateTitle> : <StyledInterestRateTitle>
                        อัตราดอกเบี้ยหน้าตั๋ว
                    </StyledInterestRateTitle>}
                    {rateType ? <StyledInterestRateSubTitle>
                        {rateTypeText()}
                    </StyledInterestRateSubTitle> : null}

                </div>
                <div>
                    <Chip label={interestRate} />
                </div>
            </StyledCardActions>
        </StyledCard >
    )
}

export default BondCard