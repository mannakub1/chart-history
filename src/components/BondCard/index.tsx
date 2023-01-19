import { StyledCard } from "./style"
import { BondCardProps } from "./type"

const BondCard = (props: BondCardProps)=> {
    const { name, detail, percent}= props

    return <StyledCard>
        <h1>{name}</h1>
        <h2>{detail}</h2>
        <h3>{percent}</h3>
    </StyledCard>
}

export default BondCard