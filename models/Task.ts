import mongoose, { Schema } from "mongoose";

const TaskSchema = new mongoose.Schema({
    // ...your other fields...
    title: { type: String, required: true },
    description: { type: String, required: false }, // Make sure this is false
    completed: { type: Boolean, default: false },
    
    // --- ADD THIS ---
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    // ---------------
},
{
    timestamps: true
}
);

// Guard against cases where `mongoose.models` may be undefined in the bundler/runtime
const TaskModel = (mongoose as any).models?.Task || mongoose.model("Task", TaskSchema);
export default TaskModel;