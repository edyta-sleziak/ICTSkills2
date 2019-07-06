import React , { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class CourseModulesWithProps extends Component {
    render() {
        let header = "HDip Computer Science - Modules table";
        return (
            <div>
                <h1>{`${header}`}</h1>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>No lectures</th>
                        <th>No practicals</th>
                    </tr>
                    </thead>
                    <tbody >
                    <tr>
                        <td>{this.props.modules[0].name}</td>
                        <td>{this.props.modules[0].noLectures}</td>
                        <td>{this.props.modules[0].noPracticals}</td>
                    </tr>
                    <tr>
                        <td>{this.props.modules[1].name}</td>
                        <td>{this.props.modules[1].noLectures}</td>
                        <td>{this.props.modules[1].noPracticals}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}