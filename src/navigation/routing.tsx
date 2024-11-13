import {FunctionComponent} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/home/home.tsx'
import Cv from '../pages/curriculum vitae/cv.tsx'
import Contact from '../pages/contact/contact.tsx'
import Box from '@mui/material/Box'

const Routing: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Box>Pagina niet gevonden</Box>} />
    </Routes>
  )
}

export default Routing
