import {style} from './style'
import {type} from './type'
import { Typography } from "@mui/material"
import { Box ,Container} from "@mui/system"

const Index = () => {
  return (
    <>
     <Typography sx={{ fontSize: "1rem", fontWeight: 'bold' ,marginBottom:'1rem', textAlign:'start'}}>
                มูลค่าผลตอบแทนย้อนหลัง
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' ,marginBottom:'1rem',bgcolor:'white',paddingY:'1.2rem', borderRadius:'13px'  }}>
                <Box>
                    <Typography>
                        1 สัปดาห์
                    </Typography>
                    <Typography>
                        8%
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        1  เดือน
                    </Typography>
                    <Typography>
                        2%
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        3  เดือน
                    </Typography>
                    <Typography>
                        1%
                    </Typography>
                </Box>
            </Box>
    </>
  )
}

export default Index