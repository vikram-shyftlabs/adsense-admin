import React from 'react';
import { Link } from 'react-router-dom';
const Header = ({ props }) => {
    return (
        <div>
            <div className='flex w-full justify-between border py-5 px-12 items-center'>
                <h1 className='font-bold text-2xl'>{props.title}</h1>
                {props?.button &&
                    <Link to={props.redirectUrl}><button className='bg-black px-8 py-2 rounded-md text-white'>{props.button} </button></Link>}
            </div>
        </div>
    );
}

export default Header;