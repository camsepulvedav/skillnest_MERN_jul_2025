import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { getOneSong, deleteSong } from "../../../api/songsApi"
import { Box, Container, Typography, Button, Card, CardContent, CircularProgress, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from "@mui/material"
import { Headphones, Edit, Delete } from "@mui/icons-material"


const SongDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [song, setSong] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const response = await getOneSong(id);
                console.log("Canción obtenida:", response.data);
                setSong(response.data);
                setLoading(false);
            } catch (error) {
                console.error("No se pudo obtener la canción", error);
                setError(error.message);
                setLoading(false);            
            }
        };
        fetchSong();
    }, [id]);

        const handleOpenDialog = () => {
            setOpenDialog(true);
        };

        const handleCloseDialog = () => {
            setOpenDialog(false);
        }

        const handleDelete = async () => {
            try {
                await deleteSong(id);
                console.log("Canción eliminada");
                navigate("/");
            } catch (error) {
                console.error("Ocurrió un error al intentar eliminar la canción", error);
                setError(error.message);
            }
            handleCloseDialog();
        };

        const handleEdit = () => {
            navigate(`/canciones/editar/${id}`);
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

    if (!song) {
        return (
            <Container sx={{minHeight: "100vh", py: 4}}>
                <Typography variant="h1">Canción no encontrada 💔</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{minHeight:"100vh", py: 4}}>
            <Typography variant="h1" sx={{mb: 4, textAlign: "center"}}>
                Detalles de la canción</Typography>
            <Card sx={{mb: 3}}>
                <CardContent sx={{textAlign:"center", p: 4}}>
                    <Headphones
                        sx={{
                            fontSize: 64,
                            color: "primary.main",
                            mb: 3,
                        }}/>
                    <Typography variant="h2" sx={{mb: 4}}>
                        {song.title || "No especificado"}</Typography>

                    <Box sx={{textAlign:"left"}}>
                        <Box sx={{mb: 2}}>
                            <Typography variant="body2" sx={{opacity: 0.7, mb:0.5}}>
                                Interpretada por</Typography>
                            <Typography variant="body1">
                                {song.artist || "No especificado"}</Typography>
                        </Box>
                        <Box sx={{mb: 2}}>
                            <Typography variant="body2" sx={{opacity: 0.7, mb: 0.5}}>
                                Álbum</Typography>
                            <Typography variant="body1">
                                {song.album || "No especificado"}</Typography>
                        </Box>
                        <Box sx={{mb: 2}}>
                            <Typography variant="body2" sx={{opacity: 0.7, mb: 0.5}}>
                                Género</Typography>
                            <Typography variant="body1">
                                {song.genre || "No especificado"}</Typography>
                        </Box>
                        <Box sx={{mb: 2}}>
                            <Typography variant="body2" sx={{opacity: 0.7, mb: 0.5}}>
                                Año de lanzamiento</Typography>
                            <Typography variant="body1">
                                {song.yearOfRelease || "No especificado"}</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Box sx={{display: "flex", gap: 2, mb: 2}}>
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
                    <DialogTitle>¿Eliminar canción?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            ¿Está seguro de querer eliminar la canción "{song.title}"?
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
                onClick={() => navigate("/")}>
                Volver al inicio</Button>
        </Container>
    )
}

export default SongDetails