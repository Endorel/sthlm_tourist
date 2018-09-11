import React, { Component } from 'react';

class TableBody extends Component {

    

    render () {
        console.log('Table: ', this.state);
        const rows = this.props.items.map((row, index) => {
            return (
                <tr key={index}>
                    <td><a style={{ cursor: 'pointer' }} onClick={() => this.props.panToMarker(index)}>{row.name}</a></td>
                    <td>{row.day}</td>
                    <td><button onClick={() => this.props.removeTableItem(index)}>Delete</button></td>
                </tr>
            );
        });
        
        return (
            <tbody>{rows}</tbody>
        );
    }
}

export default TableBody;
