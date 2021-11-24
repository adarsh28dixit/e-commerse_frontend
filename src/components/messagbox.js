import React from 'react'

function messagbox(props) {
    return (
        <>
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
        </>
    )
}

export default messagbox
