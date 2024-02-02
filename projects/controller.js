const Project = require("./model");

const postRootPageMessage = async (req, res) => {
    res.send("<p>THIS IS THE ROOT PAGE</p>");
};

const addProjects = async (req, res) => {
    try {
        const newProjects = await Project.insertMany(req.body)
        const successResponse = {
            message: "Success",
            newProject: newProjects
        }
        res.status(201).json(successResponse)

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse);
    }
}

const getProjects = async (req, res) => {
    try {
        console.log(req.query)
        const allProjects = await Project.find({})
        const successResponse = {
            message: "Success",
            allProjects: allProjects
        }
        res.status(201).json(successResponse)

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse);
    }
}

const getProjectById = async (req, res) => {
    try {
        const project = await Project.findOne({id:req.params.id});
        const successResponse = {
            message: "Success",
            project: project
        }
        res.status(201).json(successResponse);

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse);
    }
}


module.exports = {
    addProjects,
    getProjects,
    getProjectById,
    postRootPageMessage
}