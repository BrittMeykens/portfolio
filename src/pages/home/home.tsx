import {FunctionComponent} from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import britt from '../../assets/images/britt.jpeg'
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom'


const Home: FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 350px)',
      }}
    >
      <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
      <Typography variant="h2">Hey, ik ben Britt.️</Typography>
      <Typography variant="h3">Student programmeren</Typography>
      <Typography variant="body1">
        met grote interesse in front-end, maar back-end maakt me ook niet bang. Het liefste ben ik bezig met webdesign,
        dit trekt het meeste mijn interesse, omdat ik hier mijn creativiteit in kwijt kan. Ik kan helerdagen spelen in
        HTML en CSS.
      </Typography>
      <Typography variant="h3">
        About me
      </Typography>
      <Typography variant="body1">
        In het lager onderwijs heb ik kennis gemaakt met Scratch en heb ik ook "geprogrammeerd" in de First Lego Leage. Ik heb in
        het vierde middelbaar kennis gemaakt met SmallBasic, waar we echt code hebben liggen schrijven, en was meteen
        verkocht. Ik heb dan ook gekozen om in het vijfde middelbaar verder te gaan hierin, hier hebben we pas echt
        gebruik gemaakt van een klein beetje Java en C# en in het zesde ook HTML en CSS.
      </Typography>
      <Typography variant="body1">
        Ondertussen zit ik in mijn tweede jaar van het graduaat Programmeren en ben ik tot de conclusie gekomen dat ik graag zou verder gaan in webdesign, of
        toch sowieso front-end.
      </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '80%',
            margin: '0 auto',
          }}
        >
          <Button
            sx={{ my: 2 }}
            onClick={() => navigate('/cv')}
          >
            Curriculum vitae
          </Button>

          <Button
            sx={{ my: 2 }}
            onClick={() => navigate('/contact')}
          >
            Contact
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } }}
      >
      <Box component="img" alt="Foto van mezelf" src={britt} sx={{ height: '20em', marginTop: 2 }} />
      </Grid>
    </Grid>
    </Box>
  )
}

export default Home
