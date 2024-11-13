import {useState} from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import score1 from '../../assets/images/cv/score1.png'
import score2 from '../../assets/images/cv/score2.png'
import score3 from '../../assets/images/cv/score3.png'
import score4 from '../../assets/images/cv/score4.png'
import score05 from '../../assets/images/cv/score05.png'
import {SelectChangeEvent} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'

interface Data {
  name: string
  initialScore: string
  finalScore: string
  category: 'frontend' | 'backend' | 'rest'
}

function createData(
  name: string,
  initialScore: string,
  finalScore: string,
  category: 'frontend' | 'backend' | 'rest',
): Data {
  return {name, initialScore, finalScore, category}
}

const rows = [
  createData('MS Excel', score3, score3, 'rest'),
  createData('MS PowerPoint', score3, score3, 'rest'),
  createData('MS Word', score3, score3, 'rest'),
  createData('MS Outlook', score3, score3, 'rest'),
  createData('HTML5 + CSS3', score3, score3, 'frontend'),
  createData('Bootstrap', score3, score3, 'frontend'),
  createData('JavaScript', score1, score3, 'frontend'),
  createData('React', score05, score3, 'frontend'),
  createData('C#', score2, score4, 'backend'),
  createData('SQL/Databanken', score3, score3, 'backend'),
  createData('Wiskundig inzicht', score2, score3, 'rest'),
]

export default function KennisTable() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'rest'>('all')

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as 'all' | 'frontend' | 'backend' | 'rest')
  }
  const filteredRows = filter === 'all' ? rows : rows.filter(row => row.category === filter)

  return (
    <Paper sx={{width: '100%'}}>
      <FormControl sx={{margin: 2, minWidth: 120}}>
        <Select value={filter} onChange={handleFilterChange}>
          <MenuItem value="all">Alles</MenuItem>
          <MenuItem value="frontend">Front-end</MenuItem>
          <MenuItem value="backend">Back-end</MenuItem>
          <MenuItem value="rest">Rest</MenuItem>
        </Select>
      </FormControl>
      <TableContainer sx={{maxHeight: 440}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Kennis Nu
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Kennis na voltooien opleiding
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map(row => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">
                  <img src={row.initialScore} alt="Score Nu" />
                </TableCell>

                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">
                  <img src={row.finalScore} alt="Score Na" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
