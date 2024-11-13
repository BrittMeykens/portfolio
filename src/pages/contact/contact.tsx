import {FunctionComponent} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {Link} from '@mui/material'
import Form from './form.tsx'
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact: FunctionComponent = () => {
  return (
    <>
      <Typography variant="h2">Contact me</Typography>
      <Typography variant="body2" sx={{marginBottom: 4}}>
        Ik antwoord zo snel mogelijk
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} sx={{display: 'inline'}}>
            <Card variant="outlined" sx={{boxShadow: 4}}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Contact me
                </Typography>
                <Link href="mailto: r0984392@student.thomasmore.be" target="_blank" rel="noreferrer">
                  <Typography variant="body1" style={{display: 'flex', alignItems: 'center'}}>
                    <EmailIcon /> r0984392@student.thomasmore.be
                  </Typography>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/britt-meykens-7bb52b292/"
                  target="_blank"
                  rel="noreferrer"
                  underline="none">
                  <Typography variant="body1" style={{display: 'flex', alignItems: 'center'}}>
                    <LinkedInIcon /> Britt Meykens
                  </Typography>
                </Link>

                <Link href="https://github.com/BrittMeykens" target="_blank" rel="noreferrer">
                  <Typography variant="body1" style={{display: 'flex', alignItems: 'center'}}>
                    <GitHubIcon /> BrittMeykens
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={8} sx={{display: 'flex'}}>
            <Form />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Contact
