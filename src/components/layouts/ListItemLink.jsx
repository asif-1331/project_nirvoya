import React from 'react'

const ListItemLink = ({ ItemClassName, Link, LinkClassName, children }) => {
    return (
        <>
            <li className={ItemClassName}>
                <a href={Link} className={LinkClassName}>
                    {children}
                </a>
            </li>
        </>
    )
}

export default ListItemLink