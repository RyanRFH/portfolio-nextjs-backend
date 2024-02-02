const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        id: String,
        projectName: String,
        projectDesc: String,
        projectApp: String,
        projectCode: String,
        projectTech: Array,
        projectImages: Array
    }

)

const Project = mongoose.model("Project", projectSchema)

module.exports = Project;