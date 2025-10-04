import express from "express"
import songsRoutes from "./routes/songsRoutes.js";
import cors from "cors";
import {connectDB} from "./config/db.js";

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/canciones", songsRoutes);

app.listen(3000, () => {
    console.log("Ponte los audífonos, que se ha iniciado el backend~🎧");
});