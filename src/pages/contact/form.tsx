import {FunctionComponent, useState, ChangeEvent, FormEvent, useContext} from 'react'
import Grid from '@mui/material/Grid'
import {TextField} from '@mui/material'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import {DarkLightContext} from '../../context/darkLightMode.tsx'

interface FormData {
  naam: string
  voornaam: string
  email: string
  onderwerp: string
  bericht: string
}

const Form: FunctionComponent = () => {
  const {theme} = useContext(DarkLightContext)
  const [errors, setErrors] = useState<string[]>([])
  const [successMessage, setSuccessMessage] = useState<string>('')
  const [formData, setFormData] = useState<FormData>({
    naam: '',
    voornaam: '',
    email: '',
    onderwerp: '',
    bericht: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {id, value} = e.target
    setFormData(prevData => ({...prevData, [id]: value}))
  }

  const checkFieldEmpty = (field: keyof FormData, errorMsg: string): string | null => {
    if (!formData[field]) {
      return errorMsg
    }
    return null
  }

  const validateForm = () => {
    const newErrors = [
      checkFieldEmpty('naam', 'Vul uw naam in.'),
      checkFieldEmpty('voornaam', 'Vul uw voornaam in.'),
      checkFieldEmpty('email', 'Vul uw e-mail adres in.'),
      checkFieldEmpty('onderwerp', 'Vul het onderwerp van het boek in.'),
      checkFieldEmpty('bericht', 'Geef een bericht mee.'),
    ]

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.push('Vul een geldig e-mailadres in.')
    }

    const filteredErrors = newErrors.filter((error): error is string => error !== null)
    setErrors(filteredErrors)

    if (filteredErrors.length === 0) {
      setSuccessMessage('Formulier is correct ingevuld!')
    } else {
      setSuccessMessage('')
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    validateForm()
  }

  return (
    <Box>
      {successMessage && (
        <Alert icon={false} sx={{backgroundColor: '#32A8526B !important'}}>
          <AlertTitle>Success</AlertTitle>
          {successMessage}
        </Alert>
      )}
      {errors.length > 0 && (
        <Alert icon={false} sx={{backgroundColor: '#A100006B !important'}}>
          <AlertTitle>Error</AlertTitle>
          {errors.map((error, index) => (
            <Box key={index}>{error}</Box>
          ))}
        </Alert>
      )}
      <Box
        component="form"
        padding={3}
        sx={{flexGrow: 1, boxShadow: 4}}
        autoComplete="off"
        onSubmit={handleSubmit}
        className={theme === 'dark' ? 'form-dark' : 'form-light'}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="naam"
              label="Naam"
              variant="outlined"
              fullWidth
              value={formData.naam}
              onChange={handleChange}
              sx={{
                '& label': {
                  color: 'var(--text-primary-color)',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="voornaam"
              label="Voornaam"
              variant="outlined"
              fullWidth
              value={formData.voornaam}
              onChange={handleChange}
              sx={{
                '& label': {
                  color: 'var(--text-primary-color)',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              sx={{
                '& label': {
                  color: 'var(--text-primary-color)',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="onderwerp"
              label="Onderwerp"
              variant="outlined"
              fullWidth
              value={formData.onderwerp}
              onChange={handleChange}
              sx={{
                '& label': {
                  color: 'var(--text-primary-color)',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="bericht"
              label="Uw bericht"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.bericht}
              onChange={handleChange}
              sx={{
                '& label': {
                  color: 'var(--text-primary-color)',
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 2,
          }}>
          <Button type="submit" variant="contained">
            Verzenden
          </Button>
        </Grid>
      </Box>
    </Box>
  )
}

export default Form
