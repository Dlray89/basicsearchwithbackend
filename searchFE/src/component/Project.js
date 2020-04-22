import React,{ Component } from "react"

export default class Projects extends Component{
    render(){
        
        return(
            <div>
                <div>
                    {this.props.project.name} ({this.props.project.description})
                </div>
            </div>
        )
    }
}