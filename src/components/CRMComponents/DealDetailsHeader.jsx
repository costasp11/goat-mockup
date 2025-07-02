import React from 'react'
import { Box, Button, Typography } from '@mui/material'

function DealDetailsHeader() {
  return (
    <>
        <Box className="deal-details-header" sx={{ display: 'flex', padding: 2, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body6" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                Back to Dashboard
            </Typography>
            <Button variant='contained' size='small' sx={{fontWeight: 'bold'}}>
                Send Follow Up
            </Button>
        </Box>
    </>
  )
}

export default DealDetailsHeader