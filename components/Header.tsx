import React , { useEffect, useState} from 'react';
import Link from "next/link";
import Image from 'next/image';
import {getCategories} from '../services';



const Header = () => {

    const [categories, setCategories]= useState([]);
    useEffect(() => {
    
        getCategories()
          .then((newCatgories : any)=> setCategories(newCatgories))
    }, [])
  return (
    <div className ="block border-b-2 mb-8 px-10">
        <div className=" w-full inline-block ">
            <div className="md:float-left block">
                <Link href ='/'>
                    <span className="cursor-pointer font-bold text-5xl  font-syncopate drop-shadow-lg shadow-black text-[#a2b4c6]">
                        <Image 
                        src={require('../public/logo.png')}
                        alt="digitalyos logo"
                        width= {200}
                        height={200}/>
                    </span>
                </Link>

            </div>
            <div className="hidden md:float-left md:contents ">
                {categories.map((category)=>(<Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="md:float-right mt-6 align-middle text-2xl text-[#d6dbe0] uppercase  hover:text-[#a7beff] px-3 font-bold cursor-pointer">{category.name}</span>
                </Link>))}
            </div>

        </div>
    </div>
  )
}

export default Header