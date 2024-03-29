const {Router} = require("express");
const projectsRouter = Router();

const {addProjects, getProjects, getProjectById, postRootPageMessage} = require("./controller");


projectsRouter.post("/projects/addProjects", addProjects)
projectsRouter.get("/projects/getProjects", getProjects)
projectsRouter.get("/projects/getProjectById/:id", getProjectById);
projectsRouter.get("/", postRootPageMessage);

module.exports = projectsRouter;