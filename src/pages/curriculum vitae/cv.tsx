import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import britt from '../../assets/images/britt.jpeg'
import KennisTable from './kennisTable.tsx'
import Opleidingen from './opleidingen.tsx'

export default function cv() {
  const varia = ['Gemotiveerd EHBO’er', 'Gedreven wandelaar', 'Actief lezer']

  const talen = [
    {label: 'Nederlands:', value: 'moedertaal'},
    {label: 'Engels:', value: 'goed'},
    {label: 'Frans:', value: 'Schoolkennis'},
    {label: 'Duits:', value: 'Schoolkennis'},
  ]

  const competenties = ['EHBO-diploma behaald', 'flexibel', 'Georganiseerd', 'Zelfredzaam']

  const werkervaring = [
    {
      datum: '2022-heden',
      naam: 'Vrijwilliger bij Het Vlaamse Kruis (EHBO)',
    },
    {
      datum: 'Juli-Augustus 2022',
      naam: 'Studentenjob Paal 26 Grand-Café',
    },
  ]

  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} sx={{display: 'inline'}}>
          <Card variant="outlined" sx={{boxShadow: 4}}>
            <CardContent>
              <Box
                sx={{
                  display: {xs: 'flex', md: 'flex'},
                  justifyContent: 'center',
                  alignItems: 'center',
                  mr: 1,
                  flexGrow: 0,
                }}>
                <Avatar alt="Foto van mezelf" src={britt} sx={{width: '10em', height: '10em'}} />
              </Box>
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: {xs: 'center', md: 'flex-start'}}}>

                <Typography variant="h5" style={{margin: '5px 0px'}}>
                  Britt Meykens
                </Typography>
                <Typography variant="body1">
                  Als enthousiast programmeur in opleiding ben ik op zoek naar uitdagingen waarbij ik extra kennis kan opdoen en mijn vaardigheden kan verbeteren. Ik ben een leergierige, zelfstandige student die graag samenwerkt om zo een resultaat te bekomen waar de klant alleen maar van had kunnen dromen.
                </Typography>
                <Typography variant="h5" style={{margin: '5px 0px'}}>
                  Talen
                </Typography>
                {talen.map((item, index) => (
                  <Box key={index} sx={{marginBottom: 1}}>
                    <Typography variant="body1">
                      {item.label} {item.value}
                    </Typography>
                  </Box>
                ))}

                <Typography variant="h5" style={{margin: '5px 0px'}}>
                  Competenties
                </Typography>
                {competenties.map((item, index) => (
                  <Box key={index} sx={{marginBottom: 1}}>
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}

                <Typography variant="h5" style={{margin: '5px 0px'}}>
                  Varia
                </Typography>
                {varia.map((item, index) => (
                  <Box key={index} sx={{marginBottom: 1}}>
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} sx={{display: 'inline'}}>
          <Opleidingen />
          <Typography variant="h5" style={{margin: '5px 0px'}}>
            Werkervaring
          </Typography>
          {werkervaring.map(({datum, naam}, index) => (
            <Box key={index} sx={{marginBottom: 1}}>
              <Typography variant="body1">{datum}</Typography>
              <Typography variant="body1">{naam}</Typography>
            </Box>
          ))}

          <KennisTable />
        </Grid>
      </Grid>
    </Box>
  )
}
