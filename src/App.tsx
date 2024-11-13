import './App.css'
import {FunctionComponent} from 'react'
import NavBar from './navigation/navbar.tsx'
import {BrowserRouter} from 'react-router-dom'
import Routing from '../src/navigation/routing.tsx'
import Footer from '../src/Footer/footer.tsx'
import {DarkLightProvider} from './context/darkLightMode.tsx'
import Box from '@mui/material/Box'

const App: FunctionComponent = () => {
  return (
    <DarkLightProvider>
      <BrowserRouter>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <NavBar />
          <Box
            component="main"
            flexGrow={1}
            sx={{
              paddingX: {xs: 2, sm: 4, md: 0},
            }}>
            <Routing />
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </DarkLightProvider>
  )
}

export default App
