import React from 'react';

const TableBody = props => {
    const rows = props.markers.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeMarker(index)}>Delete</button></td>
            </tr>
        );
    });
    
    return (
        <tbody>{rows}</tbody>
    );
}

export default TableBody;
