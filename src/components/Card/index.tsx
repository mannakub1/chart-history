import { StyledCard } from './style'
import { CardProps } from './type'

const Card = (props: CardProps) => {
    const {
        withMargin,
        rounded,
        children,
        backgroundColor,
        withPadding
    } = props
    return (
        <StyledCard
            withPadding={withPadding}
            withMargin={withMargin}
            backgroundColor={backgroundColor}
            rounded={rounded}
        >
            {children}
        </StyledCard>
    )
}

export default Card