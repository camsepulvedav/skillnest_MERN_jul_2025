import { useState, useEffect } from "react"
import { getAllSongs } from "../../../api/songsApi"
import { Link } from "react-router"
import { Box, Container, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Link as MuiLink } from "@mui/material"


const Home = () => {
    const [songs, setSongs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchSongs = async () => {
        try {
            const response = await getAllSongs();
            console.log("Canciones recibidas:", response.data);
            setSongs(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Hubo un problema al tratar de obtener las canciones", error);
            setError(error.message);
            setLoading(false);
        }
    }; 

    useEffect(() => {
        fetchSongs();
    }, []);

    const filteredSongs = songs.filter(song => {
        if (!song) return false;
        const title = String(song.title || "");
        const artist = String(song.artist || "");
        const genre = String(song.genre || "");
        const search = searchTerm.toLocaleLowerCase();

        return title.toLowerCase().includes(search) ||
                artist.toLowerCase().includes(search) ||
                genre.toLowerCase().includes(search);
    });

    if (loading){
        return (
            <Box sx= {{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Box sx={{ textAlign: "center" }}>
                    <CircularProgress sx ={{color: "primary.main", mb:2}}/>
                    <Typography variant="h1">Cargando, por favor espere un momento...</Typography>
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

    return (
        <Container maxWidth="lg" sx={{ minHeight: "100vh", py: 4 }}>
            <Box sx={{mb:4}}>
                <Typography variant="h1" sx={{mb:3}}>
                    Todas las canciones
                </Typography>
                <TextField 
                    fullWidth
                    placeholder="Buscar canción por nombre, artista o género"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell sx={{color: "#2d1b4e"}}><strong>Título</strong></TableCell>
                            <TableCell sx={{color: "#2d1b4e"}}><strong>Artista</strong></TableCell>
                            <TableCell sx={{color: "#2d1b4e"}}><strong>Género</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredSongs.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={3} align="center">
                                    <Typography sx={{py:4}}>
                                    No hay canciones para mostrar 💔
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            ):(
                            filteredSongs?.map((song) => (
                                <TableRow 
                                    key={song._id}
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "rgba(147, 51, 234, 0.05)",
                                        }
                                    }}>
                                    <TableCell>
                                        <MuiLink 
                                            component={Link}
                                            to={`/canciones/${song._id}`}
                                            sx={{
                                                color: "text.primary",
                                                fontStyle: "italic",
                                                textDecoration: "none",
                                                "&:hover": {
                                                    color: "primary.main",
                                                    textDecoration: "underline"
                                                }
                                            }}>
                                            {song.title}
                                        </MuiLink>
                                    </TableCell>
                                    <TableCell>{song.artist}</TableCell>
                                    <TableCell>{song.genre}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Home