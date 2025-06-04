import mongoose, { Schema, Document } from "mongoose";

interface UserInterface extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
}

const userSchema = new Schema<UserInterface>({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
})

const User = mongoose.model<UserInterface>('User', userSchema);

export default User;