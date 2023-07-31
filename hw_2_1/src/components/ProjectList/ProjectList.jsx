import React, {Component} from 'react';

class ProjectList extends Component {
    state = {
        list: this.list,
    };
    render() {
        return <div>
            <p>list: {this.list}</p>
        </div>;
    }
}

export default ProjectList;
