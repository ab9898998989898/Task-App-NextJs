import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetTokenHash: { type: String },
    resetTokenExpiry: { type: Date },
},
{
    timestamps: true
}
);

// Guard against cases where `mongoose.models` may be undefined in the bundler/runtime
const UserModel = (mongoose as any).models?.User || mongoose.model("User", UserSchema);
export default UserModel;