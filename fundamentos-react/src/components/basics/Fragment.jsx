import React from 'react'

const Fragment = function Fragment(props) {
    return (
        // isso faz que o componente não precise ter uma div em volta dele
        <>
            <h1>Fragment</h1>
            <h3>Fragment is a component that does not render any HTML element. It is used to wrap multiple components without the need to create a div or any other HTML element.</h3>
        </>
    )
}

export default Fragment;