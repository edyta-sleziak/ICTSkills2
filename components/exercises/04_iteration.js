import React , { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class CourseModulesCollections extends Component {
    render() {
        let list = this.props.modules.map((f, index) => (
            <tr key={index}>
                <td>{f.name}</td>
                <td>{f.noLectures}</td>
                <td>{f.noPracticals}</td>
            </tr>
        ));
        return (
            <div>
                <h1>{`${this.props.course} modules table`} </h1>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>No lectures</th>
                        <th>No practicals</th>
                    </tr>
                    </thead>
                    <tbody >
                        {list}
                    </tbody >
                </table>
            </div>
        );
    }
}