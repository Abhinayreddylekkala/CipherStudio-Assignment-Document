import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  const projects = await Project.find({ userId: req.params.userId });
  res.json(projects);
});

export default router;
