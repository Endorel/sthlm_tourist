import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBodyComp from './TableBody';

//MATERIAL UI IMPORTS

import TableUI from '@material-ui/core/Table';
import Input from '@material-ui/core/Input';
import Search from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

class Table extends Component {

    render () {
        const { removeTableItem,
                panToMarker,
                items,
                searchString,
                updateSearchString } = this.props;

        //search functionality
        let filteredItems = items.filter(
            (item) => {
                    return item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;                
            }
        );

        return (
            <div style={{marginTop: '50px', marginBottom: '200px'}}>
                <Paper style={{width: '70%', margin: 'auto'}}>
                <Input type='text'
                       onChange={updateSearchString}
                       style={{width: '100%', height: '50px'}}
                       startAdornment={<Search position="start" style={{height: '30px', margin: 'auto 2%'}}>$</Search>}
                       placeholder="Search"
                        />
                <TableUI >
                    <TableHeader />
                    <TableBodyComp items={filteredItems}
                                   removeTableItem={removeTableItem}
                                   panToMarker={panToMarker} />
                </TableUI>
                </Paper>
            </div>
        );
    }
}

export default Table;
