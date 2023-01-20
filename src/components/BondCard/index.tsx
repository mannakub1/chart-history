import { StyledCard } from "./style"
import { BondCardProps } from "./type"
import Chip from "../common/Chip"
import { Typography, CardActions, Avatar } from "@mui/material"

const BondCard = (props: BondCardProps) => {
    const { name, description, percent, footerTitle, } = props

    return <StyledCard>
        <div style={{ display: 'flex', padding: '16px' }}>
            <div style={{ alignSelf: 'center' }}>
                <Avatar>B</Avatar>
            </div>
            <div style={{ padding: '0 1rem 0 1rem' }}>
                <Typography sx={{ fontWeight: 'Bold' }}>{name}</Typography>
                <Typography variant='caption' sx={{ color: 'gray' }}>{description}</Typography>
            </div>
        </div>
        <CardActions sx={{ backgroundColor: '#F8F8F8', padding: '5px 16px 5px 16px' }}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <div >
                    <Typography sx={{fontWeight: '600',fontSize:'16px'}}>{footerTitle}</Typography>
                </div>
                <div>
                    <Chip label={percent} />
                </div>

            </div>

        </CardActions>

    </StyledCard>
}

export default BondCard