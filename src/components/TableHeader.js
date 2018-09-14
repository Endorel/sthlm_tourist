import React from 'react';
import TableHeadUI from '@material-ui/core/TableHead';
import TableRowUI from '@material-ui/core/TableRow';
import TableCellUI from '@material-ui/core/TableCell';


const TableHeader = () => {
    return (
        <TableHeadUI>
            <TableRowUI>
                <TableCellUI>Place</TableCellUI>
                <TableCellUI>Day</TableCellUI>
                <TableCellUI>Remove</TableCellUI>
            </TableRowUI>
        </TableHeadUI>
    );
}

export default TableHeader;
