import { useState, useEffect } from "react"
import { Link } from "react-router"
import { getAllPlaylists } from "../../../api/playlistApi"
import { Box, Container, Typography, TextField, Card, CardContent, Grid, CircularProgress } from "@mui/material"

const Playlists = () => {
        const [playlists, setPlaylists] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const fetchPlaylist = async () => {
            try {
                const response = await getAllPlaylists();
                console.log("Playlists recibidas:", response.data);
                setPlaylists(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Hubo un problema para obtener las playlists", error);
                setError(error.message);
                setLoading(false); 
            }
        };
    
    useEffect(() => {
        fetchPlaylist();
    }, []);

    const filteredPlaylists = playlists.filter(playlist => {
        if (!playlist) return false;
        const name = String(playlist.name || "");
        const search = searchTerm.toLowerCase();
        return name.toLowerCase().includes(search);
    });

    if (loading) {
        return (
            <Box sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Box sx={{textAlign: "center"}}>
                    <CircularProgress sx={{color: "primary.main", mb:2}}/>
                    <Typography variant="h1">Cargando, por favor espere un momento...</Typography>
                </Box>
            </Box>
        );
    }

    if (error) {
        return (
            <Container maxWidth="lg" sx={{minHeight: "100vh", py: 4}}>
                <Typography variant="h1" color="error">Error: {error}</Typography>    
            </Container>
    );
}

    return (
        <Container maxWidth="lg" sx={{minHeight: "100vh", py: 4}}>
            <Box sx={{mb:4}}>
                <Typography variant="h1" sx={{mb:3}}>
                    Todas las playlists
                </Typography>
                <TextField 
                    fullWidth
                    placeholder="Buscar playlist por nombre"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}/>
                </Box>

                {filteredPlaylists.length === 0 ? (
                    <Typography variant="h2" sx={{textAlign: "center", mt:8, opacity: 0.6}}>
                        {searchTerm ? "No se encontraron playlists" : "No hay playlists creadas aún"}
                    </Typography>
                ) : (
                    <Grid container spacing={3}>
                        {filteredPlaylists.map((playlist) => (
                            <Grid item xs={12} sm={6} md={4} key={playlist._id}>
                                <Card 
                                    component={Link}
                                    to={`/playlists/${playlist._id}`}
                                        sx={{
                                            textDecoration: "none",
                                            transition: "transform 0.2s, box-shadow 0.2s",
                                            "&:hover": {
                                                transform: "translateY(-4px)",
                                                boxShadow: "12px 12px 16px 0 rgba(0,0,0,0.85)",
                                            }
                                        }}>
                                    <CardContent>
                                        <Typography 
                                            variant="h3"
                                            sx={{
                                                color: "text.secondary",
                                                fontSize: "1.25rem",
                                            }}>
                                                {playlist.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
        </Container>
    )
}

export default Playlists