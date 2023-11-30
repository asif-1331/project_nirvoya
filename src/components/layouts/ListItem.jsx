import React from 'react'

const ListItem = ({ ItemClassName, children }) => {
    return (
        <>
            <li className={ItemClassName}>
                {children}
            </li>
        </>
    )
}

export default ListItem