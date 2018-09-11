import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            items: this.props.items,
            searchString: ''
        }

        this.updateSearchString = this.updateSearchString.bind(this);
    }

    updateSearchString (event) {
        this.setState({
            searchString: event.target.value.substr(0, 50)
        });
    }

    render () {
        const { removeTableItem, panToMarker } = this.props;
        let filteredItems = this.props.items.filter(
            (item) => {
                
                return item.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1;
            }
        );
        return(
            <div>
                <input type='text' onChange={this.updateSearchString} />
                <table>
                    <TableHeader />
                    <TableBody items={filteredItems} removeTableItem={removeTableItem} panToMarker={panToMarker} />
                </table>
            </div>
        );
    }
}

export default Table;
