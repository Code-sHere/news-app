import React, { useEffect } from 'react'
import Wrapper from '../component/Wrapper'
import { useNewsContext } from '../context/Newscontext';
import Loader from '../component/Loader'

function Newspage() {

    const { news, setnews, fetchNews, loading } = useNewsContext();

    useEffect(() => {
        (async () => {
            const data = await fetchNews();
            setnews(data?.articles);
        })();
    }, []);

    if(loading) return <Loader/>

    return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center m-10">
                {news.map((newdetails, index) => (
                    <a
                        href={newdetails.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-3d cursor-pointer"
                        key={index}
                    >
                        <div className="card w-80 bg-black text-white
                            bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),
                            radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)]
                            bg-size-[4.95em_4.95em]"
                        >
                            <div className="card-body">

                                <div className="flex justify-between mb-3 text-xs opacity-40">
                                    <span>{newdetails.source?.name || 'Unknown Source'}</span>
                                    <span>{newdetails.publishedAt?.slice(0, 10)}</span>
                                </div>

                                {newdetails.urlToImage && (
                                    <img
                                        src={newdetails.urlToImage}
                                        alt={newdetails.title}
                                        className="w-full h-40 object-cover rounded-lg mb-3"
                                    />
                                )}

                                <h2 className="text-sm font-bold mb-2 line-clamp-2">
                                    {newdetails.title}
                                </h2>

                                <p className="text-xs opacity-60 line-clamp-2 mb-2">
                                    {newdetails.description || 'No description available'}
                                </p>

                                <div className="text-[10px] opacity-30">
                                    {newdetails.author || 'Unknown Author'}
                                </div>
                            </div>
                        </div>

                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i}></div>
                        ))}
                    </a>
                ))}
            </div>
    );
}

export default Newspage;
