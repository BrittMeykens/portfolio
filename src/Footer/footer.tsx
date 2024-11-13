import {FunctionComponent} from 'react'
import {Box, Link, Typography} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

const Footer: FunctionComponent = () => {
  return (
    <Box
      component="footer"
      py={2}
      sx={{
        boxShadow: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 3,
        marginTop: 5,
      }}>
      <Typography>© {new Date().getFullYear()} Britt Meykens.</Typography>
      <Typography sx={{display: 'flex', gap: 2}}>
        <Link href="mailto: r0984392@student.thomasmore.be" target="_blank" rel="noreferrer">
          <EmailIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/britt-meykens-7bb52b292/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </Link>
        <Link href="https://github.com/BrittMeykens" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer
