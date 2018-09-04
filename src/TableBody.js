import React from 'react';

const TableBody = props => {
    const rows = props.markers.map((row, index) => {
        return (
            <tr key={index}>
                <td><a style={{ cursor: 'pointer' }} onClick={() => props.panToMarker(index)}>{row.name}</a></td>         
                <td><button onClick={() => props.removeMarker(index)}>Delete</button></td>
            </tr>
        );
    });
    
    return (
        <tbody>{rows}</tbody>
    );
}

export default TableBody;
