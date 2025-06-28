import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Prevent model overwrite error in development
export const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);
