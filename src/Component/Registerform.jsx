import React from 'react'
import { Grid,TextField, Button,Card, CardContent, Typography } from '@mui/material'

export const Registerform = () => {
  return (
    <div className="App"> 
    <Typography gutterBottom variant="h3" align="center">
     
     </Typography>
    <Grid>
      <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
           
        </Typography> 
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            
        </Typography> 
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                      <TextField  placeholder="Network Operator" label="Network Operator" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12}>
                      <TextField  placeholder="Language Preference " label="Langage Prefrence " variant="outlined" fullWidth required />
          </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>PROCEED</Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  </div>

    
  )
}
