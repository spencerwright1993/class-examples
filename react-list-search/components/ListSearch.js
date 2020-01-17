import React from 'react';

import List from './List';
import Search from './Search';

class ListSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            originalList: ['Apples', 'Bananas', 'Apricots', 'Pineapples', 'Blueberries', 'Oranges', 'Grapes', 'Watermelon', 'Your Mom'],
            list: []
        };


        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchEnterKeyPress = this.handleSearchEnterKeyPress.bind(this);
    }
    }

    componentDidMount() {
        const list = [...this.state.originalList] {

        this.setState({
            list: list
        });
    }

    handleSearchEnterKeyPress(event) {
        if(event.keycode === 'Enter' {
            const value = event.target.value;

            this.handleSearchChange(value);
        }

    }

    handleSearchChange(value) {
        const newList = this.state.originalList.filter((item) => {
            const itemLowercase = item.toLowerCase();
            const valueLowercase = value.toLowerCase();


            if(itemLowercase.includes(valueLowercase)) {
                return true;
            }
        });

        this.setState({
            list: newList
        });
    }

    render() {
        return (
            <div>
                <Search 
                    placeholder="Search..." 
                    disable={ true }
                    handleChange={ this.handleSearchChange }
                    handleKeyPress={ this.handleKeyPress }
                />
                <List items={ this.state.list } />
            </div>
        );
    }
}

export default ListSearch;