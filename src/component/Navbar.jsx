import React, { useContext, useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/Newscontext';
import Filter from './Filter'

function Navbar() {

    // const [serachvalue, setsearchvalue] = useState('');
    const { setnews, fetchNews } = useNewsContext();

    let timer = null;
    const searchnews = (e) => {
        const searchvalue = e.target.value;
        if (!searchvalue) return;
        clearTimeout(timer);

        timer = setTimeout(async () => {
            const data = await fetchNews(`/everything?q=${searchvalue}`);
            setnews(data?.articles);
        }, 10000);
    }

    const [news, setNews] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handler = async () => {
        // Toggle the dropdown
        setIsOpen(!isOpen);

        // Only fetch if we are opening the menu and don't have news yet
        if (!isOpen && news.length === 0) {
            const today = "today/india";
            const data = await fetchNews(`/everything?q=${today}`);
            setnews(data?.articles || []);
        }
    };

    return (
        <Wrapper>
            <div className='navbar navbar-glow shadow-sm rounded-4xl'>

                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex mr-5 rounded-3xl">
                    <Filter />
                </div>

                <div className="flex gap-2">
                    <input type="text" placeholder="Search" onChange={searchnews} className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    {/* The Bell Button */}
                    <button
                        onClick={handler}
                        className="btn btn-ghost btn-circle"
                    >
                        <div className="indicator">
                            {/* Simplified Bell Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            {/* Red Dot (Primary Badge) */}
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar
