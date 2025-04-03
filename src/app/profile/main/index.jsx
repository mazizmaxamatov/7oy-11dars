import React from 'react'
import List from '../main/list'
import Main from '../main/main'

const Menu = () => {
    return (
        <div>
            <div className="w-[1240px] mx-auto border-2 flex ">
                <List />
                <Main />
            </div>
        </div>
    )
}

export default Menu