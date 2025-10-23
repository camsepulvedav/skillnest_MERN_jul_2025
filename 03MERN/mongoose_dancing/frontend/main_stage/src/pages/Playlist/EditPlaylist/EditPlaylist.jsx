import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { getOnePlaylist, updatePlaylist } from "../../../api/playlistApi"
import { getAllSongs } from "../../../api/songsApi"
import { Box, Container, Typography, TextField, Button, Paper, Checkbox, FormControlLabel, CircularProgress } from "@mui/material"
import { Save, Cancel, Check } from "@mui/icons-material"


const EditPlaylist = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [playlistName, setPlaylistName] = useState ("");
    const [songs, setSongs] = useState([]);
    const [selectedSongs, setSelectedSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchData = async() => {
        try {
            const playlistResponse = await getOnePlaylist(id);
            console.log("Playlist obtenida:", playlistResponse.data);
            setPlaylistName(playlistResponse.data.name || "");

            const songIds = playlistResponse.data.songs?.map(song => song._id || []);
            setSelectedSongs(songIds);

            const songsResponse = await getAllSongs();
            setSongs(songsResponse.data);

            setLoading(false);
        } catch (error) {
            console.error("Hubo un error al intentar cargar los datos", error);
            setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const handleCheckboxChange = (songId) => {
        if (selectedSongs.includes(songId)) {
            setSelectedSongs(selectedSongs.filter(id => id !== songId))
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
            const response = await updatePlaylist(id, playlistData);
            console.log("Playlist actualizada:", response.data);
            navigate(`/playlists/${id}`);
        } catch (error) {
            console.error("Hubo un error al intentar actualizar la playlist", error);
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
        }
    };

    const handleCancel = () => {
        navigate(`/playlists/${id}`);
    };

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
        <Container maxWidth="md" sx={{minHeight: "100vh", py: 4}}>
            <Paper sx={{p: 4}}>
                <Typography variant="h2" sx={{mb: 4, textAlign: "center", fontSize: "2rem"}}>
                    Editar playlist</Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Nombre de la playlist"
                        value={playlistName}
                        onChange={(event) => setPlaylistName(event.target.value)}
                        placeholder="Ingresar nombre para la playlist"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        sx={{mb: 4}}/>
                    <Typography variant="h2" sx={{mb: 2}}>
                        Seleccionar canciones</Typography>
                    {songs.length === 0? (
                        <Typography sx={{textAlign: "center", py: 4, opacity: 0.6}}>
                        No hay canciones disponibles</Typography>
                    ) : (
                        <Box sx={{mb: 4, maxHeight: "400px", overflowY: "auto"}}>
                            {songs.map(song => (
                                <FormControlLabel
                                    key={song._id}
                                    control={
                                        <Checkbox
                                            checked={selectedSongs.includes(song._id)}
                                            onChange={() => handleCheckboxChange(song._id)}/>
                                    }
                                    label={`${song.title} - ${song.artist || "Artista desconocido"}`}
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

export default EditPlaylist