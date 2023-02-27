import { useState } from 'react'
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
export const SearchBar = () => {

  return (
    <FormControl fullWidth sx={{ m: 3 }}>
    
    <OutlinedInput color={'warning'} sx={{background:'#fff'}}
      startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
     placeholder={"Buscar..."}/>
  </FormControl>
  )
}
