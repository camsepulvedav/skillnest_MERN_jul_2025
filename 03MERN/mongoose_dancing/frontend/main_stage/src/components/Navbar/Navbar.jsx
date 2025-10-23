import { NavLink } from "react-router"
import { AppBar, Toolbar, Box, Button } from "@mui/material"
import { MusicNote, LibraryMusic, QueueMusic, PlaylistAdd } from "@mui/icons-material"


const Navbar = () => {
    const navItems = [
        {
            to: "/",
            label: "Canciones",
            icon: <MusicNote sx={{fontSize: 28}}/>
        },
        {
            to: "/agregar",
            label: "Añadir Canción",
            icon: <PlaylistAdd sx={{fontSize: 28}}/>
        },
        {
            to: "/playlists",
            label: "Playlists",
            icon: <PlaylistAdd sx={{fontSize: 28}}/>
        },
        {
            to: "/playlists/crear",
            label: "Crear Playlist",
            icon: <QueueMusic sx={{fontSize: 28}}/>
        }
    ];

    return(
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: "secondary.main",
                boxShadow: "none",
                borderBottom: "2px solid",
                borderColor: "divider"
            }}>
            <Toolbar sx={{justifyContent: "center", gap: 2, py: 1}}>
                {navItems.map((item) => (
                    <Button
                        key={item.to}
                        component={NavLink}
                        to={item.to}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 0.5,
                            color: "text.primary",
                            textTransform: "none",
                            minWidth: "120px",
                            py: 1.5,
                            px: 2,
                            borderRadius: 2,
                            transition: "all 0.3s",
                            "&:hover": {
                                backgroundColor: "rgba(147, 51, 234, 0.1)",
                                color: "primary.light",
                            },
                        "&.active": {
                            backgroundColor: "primary.main",
                            color: "primary.contrastText",
                            borderBottom: "3px solid",
                            borderColor: "primary.light",
                            "&:hover": {
                                backgroundColor: "primary.dark",
                            }
                        }
                    }}>
                    <Box component="span">{item.icon}</Box>
                    <Box component="span" 
                        sx={{
                            fontSize: "0.875rem",
                            fontWeight: 500
                        }}>{item.label}</Box>
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    )
};

export default Navbar