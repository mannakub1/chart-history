import { StyledCard } from './style'
import { CardProps } from './type'

const Card = (props: CardProps) => {
    const {
        withMargin,
        rounded,
        children,
        backgroundColor,
        withPadding,
        bottomWithNoRadius
    } = props
    return (
        <StyledCard
            withPadding={withPadding}
            withMargin={withMargin}
            backgroundColor={backgroundColor}
            rounded={rounded}
            bottomWithNoRadius={bottomWithNoRadius}
        >
            {children}
        </StyledCard>
    )
}

export default Card