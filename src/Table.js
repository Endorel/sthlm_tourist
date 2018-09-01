import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
    render () {
        const { markers, removeMarker } = this.props;
        return(
            <table>
                <TableHeader />
                <TableBody markers={markers} removeMarker={removeMarker} />
            </table>
        );
    }
}

export default Table;
