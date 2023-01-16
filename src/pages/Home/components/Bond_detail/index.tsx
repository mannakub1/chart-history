import {style} from './style'
import {type} from './type'
import { Box, Typography, Container } from "@mui/material";

const Index = () => {
  return (
    <>
      <Typography
        sx={{ fontSize: "1rem", fontWeight: "bold", textAlign: "start" }}
      >
        ข้อมูลหุ้นกู้
      </Typography>
      <Box
        sx={{
          paddingX: "1rem",
          bgcolor: "white",
          paddingY: "1.3rem",
          marginY: "1rem",
          borderRadius: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: "0.5rem",
          }}
        >
          <Typography>อายุหุ้นกู้</Typography>
          <Typography>70 ปี</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: "0.5rem",
          }}
        >
          <Typography>ความเสี่ยง</Typography>
          <Typography>4</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: "0.5rem",
          }}
        >
          <Typography>วันครบกำหนดไถ่ถอน</Typography>
          <Typography>24 มค. 2565</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Index