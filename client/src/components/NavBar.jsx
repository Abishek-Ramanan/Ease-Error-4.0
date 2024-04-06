import React, {useState} from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'


const NavBarItem =({title, classProps }) =>{
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>

  )
}

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='w-full  flex md:justify-center justify-between items-center  '>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
     
        <h2 >E² Bond</h2>
        
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["Register","About","Bonds","Parties"].map((items,index)=>(
          <NavBarItem key={items + index} title={items}/>
        ))}
        <li className='bg-[#2952e3] py-2 px-7 mx-12 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Connect
        </li>
      </ul>
      <div className='flex relative '>
        {toggleMenu? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=>{setToggleMenu(false)}}/>:
        <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=>setToggleMenu(true)}/>}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={()=> setToggleMenu(false)}/>
            </li>
            {["Register","About","Bonds","Parties"].map((items,index)=>(
          <NavBarItem key={items + index} title={items} classProps="my-2 text-lg"/>
        ))}
          </ul>
        )}

      </div>

    </nav>
  )
}

export default NavBar