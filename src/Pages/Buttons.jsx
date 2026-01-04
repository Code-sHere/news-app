import React from 'react'
import Wrapper from '../component/Wrapper'
import { useNewsContext } from '../context/Newscontext';

function Buttons() {

    const { setnews, fetchNews } = useNewsContext();

    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    const buttonStyles = [
        'btn-primary',
        'btn-secondary',
        'btn-accent',
        'btn-info',
        'btn-success',
        'btn-warning',
        'btn-error',
    ];

    const handler = async (e) => {
        const value = e.target.value;
        const data = await fetchNews(`/everything?q=${value}`);
        setnews(data?.articles);
    }

    return (

        <Wrapper>
            <div className='max-w-full w-fit m-auto flex overflow-x-auto'>
                {categories.map((category, color) => {
                    return (
                        <button onClick={handler} value={category} className={`btn btn-soft m-2 ${buttonStyles[color]}`}>{category}</button>
                    )
                })}
            </div>
        </Wrapper>

    )
}

export default Buttons
