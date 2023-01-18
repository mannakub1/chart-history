import React, { FC } from 'react'
import { StyledCard } from './style'
import { cardProps } from './type'
const Card:FC<cardProps> = ({ withPadding, stretchToBottom ,children}) => {
    
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
}

export default Card