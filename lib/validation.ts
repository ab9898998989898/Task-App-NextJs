import { z } from "zod";

// =============================
// USER AUTH SCHEMAS
// =============================

// Signup Validation
export const SignupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Login Validation
export const LoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string(),
});

// =============================
// TASK SCHEMAS
// =============================

// Create Task
export const CreateTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  status: z.enum(["pending", "in-progress", "completed"]).default("pending"),
});

// Update Task
export const UpdateTaskSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(["pending", "in-progress", "completed"]).optional(),
});
