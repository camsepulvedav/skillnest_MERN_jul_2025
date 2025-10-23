import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { getOneSong, updateSong } from "../../../api/songsApi"
import { Box, Container, Typography, TextField, Button, Paper, CircularProgress } from "@mui/material"
import { Save, Cancel } from "@mui/icons-material"


const EditSong = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState ({
        title: "",
        artist: "",
        genre: "",
        album: "",
        yearOfRelease: ""
    });
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchSong = async() => {
        try {
            const response = await getOneSong(id);
            console.log("Canción obtenida:", response.data);
            setFormData({
                title: response.data.title || "",
                artist: response.data.artist || "",
                genre: response.data.genre || "",
                album: response.data.album || "",
                yearOfRelease: response.data.yearOfRelease || ""
            });
            setLoading(false);
        } catch (error) {
            console.error("Hubo un error al intentar obtener la canción", error);
            setLoading(false);
            }
        };
        fetchSong();
    }, [id]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await updateSong(id, formData);
            console.log("Canción actualizada:", response.data);
            navigate(`/canciones/${id}`);
        } catch (error) {
            console.error("Hubo un error al intentar actualizar la canción", error);
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
        }
    };

    const handleCancel = () => {
        navigate(`/canciones/${id}`);
    }

    if (loading) {
        return (
            <Box sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
            }}>
                <Box sx={{textAlign: "center"}}>
                    <CircularProgress sx={{color: "primary.main", mb: 2}}/>
                    <Typography variant="h1">Cargando, por favor espere...</Typography>
                </Box>
            </Box>
        );
    }

    return (
        <Container maxWidth="sm" sx= {{minHeight: "100vh", py: 4}}>
            <Paper sx={{p: 4}}>
                <Typography variant="h2" sx={{mb: 4, textAlign: "center", fontSize: "2rem"}}>
                    Editar canción</Typography>
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
                    <TextField
                        fullWidth
                        label="Año de lanzamiento"
                        name="yearOfRelease"
                        value={formData.yearOfRelease}
                        onChange={handleChange}
                        placeholder="Ingresar el título de la canción"
                        error={!!errors.yearOfRelease}
                        helperText={errors.yearOfRelease?.message}
                        sx={{mb: 3}}/> 
                <Box sx={{display: "flex", gap: 2}}>
                    <Button
                        type= "submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        startIcon={<Save/>}>
                            Guardar cambios</Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        size="large"
                        startIcon={<Cancel/>}
                        onClick={handleCancel}>
                            Cancelar</Button>
                </Box>
            </Box>
        </Paper>
    </Container>
    )
}

export default EditSong