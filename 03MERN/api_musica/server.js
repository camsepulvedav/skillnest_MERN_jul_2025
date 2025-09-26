import express from "express"
import musicRoutes from "./routes/musicRoutes.js"

const app = express();

app.use(express.json());

app.use("/api", musicRoutes);

app.listen(3000, () => {
    console.log("Se ha iniciado el backend~🎤🎵");
})