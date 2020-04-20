import React from "react"

const Project = ({ project }) => (
    <div>
        <div>
            {project.name} ({project.description})
        </div>
    </div>
)

export default Project