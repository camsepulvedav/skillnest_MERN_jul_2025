import { useState } from "react"
import { useNavigate } from "react-router"
import { createSong } from "../../../api/songsApi"
import { Box, Container, TextField, Button, Typography, Paper } from "@mui/material"


const AddSong = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        artist: "",
        genre: "",
        album: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await createSong(formData);
            console.log("Canción creada:" ,response.data);
            navigate("/");
        }catch (error) {
            console.error("No se pudo crear la canción", error);
                setErrors(error.response.data.errors);
        }
    };

    return (
        <Container maxWidth="sm" sx={{minHeight: "100hv", py: 4}}>
            <Paper sx={{p: 4}}>
                <Typography variant="h2" sx={{mb: 4, textAlign: "center", fontSize: "2rem"}}>
                    Nueva Canción
                </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Título"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Ingresar el título de la canción"
                    error={!!errors.title}
                    helperText={errors.title?.message}
                    sx={{mb: 3}}/>
                <TextField
                    fullWidth
                    label="Artista"
                    name="artist"
                    value={formData.artist}
                    onChange={handleChange}
                    placeholder="Ingresar el nombre del artista"
                    error={!!errors.artist}
                    helperText={errors.artist?.message}
                    sx={{mb: 3}}/>
                <TextField
                    fullWidth
                    label="Género"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    placeholder="Ingresar el género"
                    error={!!errors.genre}
                    helperText={errors.genre?.message}
                    sx={{mb: 3}}/>
                <TextField
                    fullWidth
                    label="Álbum"
                    name="album"
                    value={formData.album}
                    onChange={handleChange}
                    placeholder="Ingresar el nombre del álbum"
                    error={!!errors.album}
                    helperText={errors.album?.message}
                    sx={{mb: 3}}/>
                <Button 
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large">
                    Agregar canción
                </Button>
            </Box>
        </Paper>
    </Container>    
    )
}

export default AddSong