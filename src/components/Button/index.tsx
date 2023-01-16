
import { Button } from '@mui/material'
import { ButtonProp } from './type'
export const CustomsButton: React.FC<ButtonProp> = ({ text }) => {
  return (
    <Button color='neutral' variant="outlined" >{text}</Button>
  )
}

