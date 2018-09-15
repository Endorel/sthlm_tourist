import React, { Component } from 'react';

import TableBodyUI from '@material-ui/core/TableBody';
import TableCellUI from '@material-ui/core/TableCell';
import TableRowUI from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class TableBody extends Component {

    

    render () {
        //console.log('Table: ', this.props);
        const rows = this.props.items.map((row, index) => {
            return (
                <TableRowUI key={index}>
                    <TableCellUI><a style={{ cursor: 'pointer' }} onClick={() => this.props.panToMarker(index)}>{row.name}</a></TableCellUI>
                    <TableCellUI>{row.day}</TableCellUI>
                    <TableCellUI><IconButton onClick={() => this.props.removeTableItem(index)} variant="fab" aria-label="Delete"><DeleteIcon /></IconButton></TableCellUI>
                </TableRowUI>
            );
        });
        
        return (
            <TableBodyUI>{rows}</TableBodyUI>
        );
    }
}

export default TableBody;
