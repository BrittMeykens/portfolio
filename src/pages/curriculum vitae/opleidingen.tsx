import {FunctionComponent} from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import ListItemText from '@mui/material/ListItemText'

const Opleidingen: FunctionComponent = () => {
  const opleiding = [
    {
      datum: '2023-heden',
      naam: 'Graduaat Informatica',
      school: 'Thomas More',
      adres: 'Kleinhoefstraat 4, 2440 Geel',
      projecten: [
        'Eigen website bootstrap en eigen website HTML/CSS',
        'C# incl. OOP',
        'Eigen database creëren',
        'Unity spel maken',
        '...',
      ],
    },
    {
      datum: '2021-2023',
      naam: 'Boekhouden-Informatica',
      school: 'Spectrumcollege vzw',
      adres: 'Bogaertsveldstraat 13,3580 Beringen',
      projecten: [
        'Bedrijfseconomie + boekhouden',
        'C# incl. OOP',
        'Eigen bedrijf opstarten met HTML/CSS website',
        '...',
      ],
    },
    {
      datum: '2022-2023',
      naam: 'EHBO-cursus Basis',
      school: 'Het Vlaamse Kruis afd. Beringen',
      projecten: ['Reanimatie', 'Wondzorg', 'Verbandleer', 'Heimlich', '...'],
    },
    {
      datum: '2019-2021',
      naam: 'Handel',
      school: 'Spectrumcollege Bovenbouw Beringen vzw',
      adres: 'Bogaertsveldstraat 13,3580 Beringen',
    },
    {
      datum: '2017-2019',
      naam: 'Handel',
      school: 'Sint-Jan Spectrumcollege vzw',
      adres: 'Bogaertsveldstraat 14,3580 Beringen',
    },
  ]
  return (
    <>
      <Typography variant="h5" style={{margin: '5px 0px'}}>
        Opleidingen
      </Typography>
      {opleiding.map(({datum, naam, school, adres, projecten}, index) => (
        <Box key={index} sx={{marginBottom: 1}}>
          <Typography variant="body1">{datum}</Typography>
          <Typography variant="body1">
            {naam} - {school} - {adres || ''}
          </Typography>
          {Array.isArray(projecten) && projecten.length > 0 ? (
            <List>
              {projecten.map((project, projectIndex) => (
                <ListItem key={projectIndex} sx={{display: 'flex', marginBottom: 0.5, padding: 0}}>
                  <ListItemIcon>
                    <FiberManualRecordIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>{project}</ListItemText>
                </ListItem>
              ))}
            </List>
          ) : null}
        </Box>
      ))}
    </>
  )
}

export default Opleidingen
