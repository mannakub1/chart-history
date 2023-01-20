import { StyledCard } from './style'
import { CardProps } from './type'

const Card = (props: CardProps) => {
    const {
        children,
        className
    } = props
    return (
        <StyledCard className={className} >
            {children}
        </StyledCard>
    )
}

export default Card