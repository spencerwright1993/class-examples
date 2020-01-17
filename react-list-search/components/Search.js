import React from 'react';
import Search from './Search';
class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    disabled= { this.props.disabled ? 'disabled' : ''}
                    placeholder={ this.props.placeholder }
                    onKeyPress= { (e) => this.props.handleKeyPress(e) }
                    //onChange={ (e) => this.props.handleSearchChange(e.target.value) }
                />
            </div>
        );
    }
}

export default Search;