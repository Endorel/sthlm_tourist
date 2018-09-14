import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {


    render () {
        console.log('tableItems: ', this.props);
        const { removeTableItem, panToMarker, items } = this.props;
        let filteredItems = items.filter(
            (item) => {
                    return item.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) !== -1;
                
            }
        );
        return(
            <div>
                <input type='text' onChange={this.props.updateSearchString} />
                <table>
                    <TableHeader />
                    <TableBody items={filteredItems} removeTableItem={removeTableItem} panToMarker={panToMarker} />
                </table>
            </div>
        );
    }
}

export default Table;
