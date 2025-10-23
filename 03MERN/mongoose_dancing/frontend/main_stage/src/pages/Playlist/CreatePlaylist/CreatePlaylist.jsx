import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { createPlaylist } from "../../../api/playlistApi.js"
import { getAllSongs } from "../../../api/songsApi"
import { Box, Container, Typography, TextField, Button, Paper, Checkbox, FormControlLabel, CircularProgress } from "@mui/material"


const CreatePlaylist = () => {
    const navigate = useNavigate();
    const [playlistName, setPlaylistName] = useState("");
    const [songs, setSongs] = useState([]);
    const [selectedSongs, setSelectedSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});
    const fetchSongs = async () => {
        try {
            const response = await getAllSongs(); 
            setSongs(response.data);
            setLoading(false);      
        } catch (error) {
            console.error("Hubo un error al obtener las canciones", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchSongs();
    }, []);

    const handleCheckboxChange = (songId) => {
        if (selectedSongs.includes(songId)) {
            setSelectedSongs(selectedSongs.filter(id => id !== songId));
        } else {
            setSelectedSongs([...selectedSongs, songId]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const playlistData = {
                name: playlistName,
                songs: selectedSongs
            };
            const response = await createPlaylist(playlistData);
            console.log("Playlist creada:", response.data);
            navigate("/playlists");
        } catch (error) {
            console.error("Hubo un error al crear la playlist", error);
            setErrors(error.response.data.errors);
        }
    }

    if (loading) {
        return (
            <Box sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Box sx={{ textAlign: "center" }}>
                    <CircularProgress sx={{color:"primary.main", mb:2}}/>
                    <Typography variant="h1">Cargando, por favor espere...</Typography>
                </Box>
            </Box>
        );
    }

    return (
        <Container maxWidth="md" sx={{minHeight: "100vh", py: 4}}>
            <Paper sx={{p: 4}}>
                <Typography variant="h2" sx={{mb: 4, textAlign: "center", fontSize: "2rem"}}>
                    Crear Nueva Playlist</Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Nombre de la Playlist"
                        value={playlistName}
                        onChange={(e) => setPlaylistName(e.target.value)}
                        placeholder="Ingresar nombre para la playlist"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        sx={{mb: 4}}/>
                <Typography variant="h2" sx={{mb: 2}}>
                    Elegir Canciones
                </Typography>

                {songs.length === 0 ? (
                    <Typography sx={{textAlign: "center", py: 4, opacity: 0.6}}>
                        Todavía no hay canciones disponibles
                    </Typography>
                ) : (
                    <Box sx={{mb: 4, maxHeight: "400px", overflowY: "auto"}}>
                        {songs.map((song) => (
                            <FormControlLabel
                                key={song._id}
                                control={
                                    <Checkbox
                                        checked={selectedSongs.includes(song._id)}
                                        onChange={() => handleCheckboxChange(song._id)}/>
                                }
                                label={song.title}
                                sx={{
                                    display: "block",
                                    mb: 1,
                                    "&:hover": {
                                        backgroundColor: "rgba(147, 51, 234, 0.05)"
                                    }
                                }}/>
                        ))}
                    </Box>
                )}
                <Button 
                    type="submit" 
                    variant="contained"
                    fullWidth
                    size="large">
                    Crear Playlist
                </Button>
            </Box>
        </Paper>
    </Container>
    )
}

export default CreatePlaylist