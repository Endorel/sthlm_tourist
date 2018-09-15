import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import TableHeadUI from '@material-ui/core/TableHead';
import TableRowUI from '@material-ui/core/TableRow';
import TableCellUI from '@material-ui/core/TableCell';



const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2196f3'
        }
    },
    typography: {
        fontSize: 16
    }
  });

  const styles = {
      backgroundColor: theme.palette.primary.main,
      fontSize: theme.typography.fontSize
  }

const TableHeader = () => {
    return (
        <TableHeadUI>
            <TableRowUI>
                <TableCellUI style={styles}>Place</TableCellUI>
                <TableCellUI style={styles}>Day</TableCellUI>
                <TableCellUI style={styles}>Remove</TableCellUI>
            </TableRowUI>
        </TableHeadUI>
    );
}

export default TableHeader;
