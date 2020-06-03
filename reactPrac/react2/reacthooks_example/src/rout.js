import React from 'react';

function Rout(props) {
    return (
        <pre>
            <code>{JSON.stringify(props, null, 2)}</code>
        </pre>
    )
}

export default Rout