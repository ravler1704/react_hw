import React, {Component} from 'react';
import './Toolbar.css'

class Toolbar extends Component {
    state = {
        filters: this.props.filters,
        selected: this.props.selected
    };

    handleClick = (e, member) => {
        debugger;
        this.setState({ selected: member })
    }
    render() {
        return <div className="menu">
            {this.state.filters.map((member) => (
                <div
                    key={member}
                    className={`${member === this.state.selected ? 'menu__item active' : 'menu__item'}`}
                    onClick={(e) => {
                        this.handleClick(e, member);
                    }}
                >
                    {member}
                </div>
            ))}
        </div>;
    }
}

export default Toolbar;
