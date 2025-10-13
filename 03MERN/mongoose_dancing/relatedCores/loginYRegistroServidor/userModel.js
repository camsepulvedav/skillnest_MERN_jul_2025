import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, "Campo OBLIGATORIO"] 
    },
    lastName: {
        type: String, 
        required: [true, "Campo OBLIGATORIO"] 
    },
    email: {
        type: String, 
        required: [true, "Campo OBLIGATORIO"],
        unique: [true, "Este email ya ha sido REGISTRADO. Pruebe con otro."]
    },
    password: {
        type: String, 
        required: [true, "Campo OBLIGATORIO"],
        minLength: [8, "La contraseña NO puede tener MENOS de 8 caracteres"]
    },
});

userSchema
    .virtual("confirmPassword")
    .get(function() {
        return this._confirmPassword;
    })
    .set(function (valor) {
        this._confirmPassword = valor;
});

userSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Las password DEBEN coincidir");
    }
    next();
});

userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("User", userSchema, "users"); 

export default User;