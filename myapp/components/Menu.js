import React from 'react'

const data = [
    {id: 1, name: "Home", url:"/"},
    {id: 2, name: "About", url: "/about"},
    {id: 3, name: "Contact", url: "/contact"}
]

const Menu = () => {
  return (
    <ul
    className='hidden md:flex items-center gap-8 font-medium text-black'
    >

    </ul>
  )
}

export default Menu