import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { getOnePlaylist, deletePlaylist } from "../../../api/playlistApi"
import { Box, Container, Typography, Button, Card, CardContent, CircularProgress, List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"
import { Edit, Delete, MusicNote } from "@mui/icons-material"


const PlaylistDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [playlist, setPlaylist] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const response = await getOnePlaylist(id);
                console.log("Playlist obtenida", response.data);
                setPlaylist(response.data);
                setLoading(false);
            } catch (error) {
                console.error("No se pudo obtener la playlist", error);
                setError(error.message);
                setLoading(false);
            }
        };
        fetchPlaylist();
    }, [id]);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    const handleDelete = async () => {
        try {
            await deletePlaylist(id);
            console.log("Playlist eliminada");
            navigate("/playlists");
        } catch (error) {
            console.error("Ocurrió un error al intentar eliminar la playlist", error);
            setError(error.message);
        }
        handleCloseDialog();
    };

    const handleEdit = () => {
        navigate(`/playlists/editar/${id}`);
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
                    <CircularProgress sx={{color: "primary.main", mb:2}}/>
                    <Typography variant="h1">Cargando, por favor espere...</Typography>
                </Box>
            </Box>
        );
    }

    if (error) {
        return (
            <Container sx={{minHeight: "100vh", py: 4}}>
                <Typography variant="h1" color="error">Error: {error}</Typography>
            </Container>
        );
    }

    if (!playlist) {
        return (
            <Container sx={{minHeight: "100vh", py: 4}}>
                <Typography variant="h1">Playlist no encontrada 💔</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{minHeight:"100vh", py: 4}}>
            <Typography variant="h1" sx={{mb: 4, textAlign: "center"}}>
                {playlist.name}</Typography>
            <Card sx={{mb: 3}}>
                <CardContent>
                    <Typography variant="h2" sx={{mb: 3}}>
                        Canciones</Typography>

                    {!playlist.songs || playlist.songs.length === 0? (
                        <Typography sx={{textAlign: "center", py: 4, opacity: 0.6}}>
                        Esta playlist aún no tiene canciones</Typography>
                    ) : (
                        <List>
                            {playlist.songs.map((song, index) => (
                            <ListItem
                                key={song._id || index}
                                sx={{
                                    borderRadius: 1,
                                    mb: 1,
                                    "&:hover": {
                                        backgroundColor: "rgba(147, 51, 234, 0.05)"
                                    }
                                }}>
                                <MusicNote sx={{mr: 2, color:"primary.main"}}/>
                                <ListItemText
                                    primary={song.title || "Sin título"}
                                    secondary={song.artist ? song.artist : null}/>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </CardContent>
            </Card>
            <Box sx={{display: "flex", gap: 2}}>
                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    startIcon={<Edit/>}
                    onClick={handleEdit}>
                        Editar</Button>
                <Button 
                    variant="outlined"
                    fullWidth
                    size="large"
                    color="error"
                    startIcon={<Delete/>}
                    onClick={handleOpenDialog}>
                        Eliminar</Button>
            </Box>

            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}>
                    <DialogTitle>¿Eliminar playlist?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            ¿Está seguro de querer eliminar la playlist "{playlist.name}"?
                            Esta acción no se puede deshacer.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="inherit">Cancelar</Button>
                        <Button onClick={handleDelete} color="error" variant="contained">Eliminar</Button>
                    </DialogActions>
            </Dialog>
            <Button
                variant="text"
                fullWidth
                onClick={() => navigate("/playlists")}
                sx={{mt: 2}}>
                    Volver a playlists</Button>
        </Container>
    )
}

export default PlaylistDetails