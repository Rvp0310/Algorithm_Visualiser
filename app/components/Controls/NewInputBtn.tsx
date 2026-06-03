import React from 'react'
import { Button } from '@mui/material'

const NewInputBtn = ({playing, setRefreshTrigger}: {playing: boolean, setRefreshTrigger: React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <Button
        variant="outlined"
        disabled={playing}
        sx={{ borderColor: "white", color: "white" }}
        onClick={() => setRefreshTrigger((prev) => prev + 1)}
      >
        Generate New Input
      </Button>
  )
}

export default NewInputBtn
