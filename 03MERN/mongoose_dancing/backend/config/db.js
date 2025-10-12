import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:1bEe3EbRcIdl6EZO@cluster0.tgc3m1i.mongodb.net/Mongoose_dancing");
        console.log("La conexión al DB ha sido exitosa, a cantar a todo pulmón! 🧑‍🎤🎵");
    } catch (error) {
        console.log(error);
    }
}