import {useState} from 'react'
import {Box, TextField, Button, Typography, Link, Container} from '@mui/material'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '', 
        password: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        }); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos capturados para registrarse:', formData);
        //lógica
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
        }}>
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: 'flex',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '10px 10px 20px 0 rgba(0,0,0,0.75)',
                    minHeight: '500px',
                }}>
                <Box
                    sx={{
                        flex: 1,
                        background: 'linear-gradient(135deg, #9333ea 0%, #5f3e7a 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 6,
                        color: '#ffffff',
                    }}>
                    <Typography
                        variant='h2'
                        sx={{
                            fontSize: '2.5rem',
                            fontWeight: 700,
                            marginBottom: 2,
                        }}>
                        ¡Hola!
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            marginBottom: 4,
                            opacity: 0.9,
                        }}>
                            Ingrese sus datos personales para poder usar todas las funcionalidades.
                    </Typography>
                    <Button
                        variant='outlined'
                        sx={{
                            color: '#ffffff',
                            borderColor: '#ffffff',
                            paddingX: 4,
                            paddingY: 1,
                            '&:hover': {
                                borderColor: '#ffffff',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }
                        }}
                        href='/login'>
                        Iniciar Sesión
                    </Button>
                </Box>
            <Box
                sx={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    padding: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                <Typography 
                    variant='h1' 
                    sx={{
                        color: '#212121',
                        fontSize: '2rem',
                        fontWeight: 700,
                        marginBottom: 3,
                    }}>
                    Crear Cuenta
                </Typography>
            <Box component='form' onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    name='name'
                    placeholder='Nombre'
                    value={formData.name}
                    onChange={handleChange}
                    sx={{marginBottom: 2}}
                />
                <TextField
                    fullWidth
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    sx={{marginBottom: 2}}
                />
                <TextField
                    fullWidth
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    sx={{marginBottom: 1}}
                />
                <Button
                    type='submit'
                    variant='contained'
                    fullWidth
                    sx={{marginTop: 3, paddingY: 1.5,}}>
                    Registrarse
                </Button>
            </Box>
        </Box>
    </Box>
</Container>
</Box>
);
}

export default Register