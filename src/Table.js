import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
    render () {
        const { markers, removeMarker, panToMarker } = this.props;
        return(
            <table>
                <TableHeader />
                <TableBody markers={markers} removeMarker={removeMarker} panToMarker={panToMarker} />
            </table>
        );
    }
}

export default Table;
