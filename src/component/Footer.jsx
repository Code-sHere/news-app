import React from 'react'

function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 mt-20">

            {/* BRAND */}
            <aside className="max-w-xs">
                <h2 className="text-2xl font-bold tracking-wide">📰 NewsSphere</h2>
                <p className="mt-3 text-sm text-neutral-content/80">
                    Stay informed with the latest breaking news, global headlines,
                    and trending stories — all in one place.
                </p>
                <p className="mt-4 text-xs text-neutral-content/60">
                    © {new Date().getFullYear()} NewsSphere. All rights reserved.
                </p>
            </aside>

            {/* CATEGORIES */}
            <nav>
                <h6 className="footer-title">Categories</h6>
                <a className="link link-hover">World</a>
                <a className="link link-hover">Business</a>
                <a className="link link-hover">Technology</a>
                <a className="link link-hover">Sports</a>
                <a className="link link-hover">Health</a>
            </nav>

            {/* SOURCES */}
            <nav>
                <h6 className="footer-title">Sources</h6>
                <a className="link link-hover">BBC</a>
                <a className="link link-hover">CNN</a>
                <a className="link link-hover">Reuters</a>
                <a className="link link-hover">The Times of India</a>
                <a className="link link-hover">Al Jazeera</a>
            </nav>

            {/* SOCIAL */}
            {/* SOCIAL */}
            <nav>
                <h6 className="footer-title mb-3">Follow Us</h6>

                <div className="flex gap-4">

                    {/* Twitter / X */}
                    <a
                        aria-label="Twitter"
                        className="group flex items-center justify-center w-10 h-10 rounded-full 
                 bg-neutral-content/10 hover:bg-[#1DA1F2]/20 
                 transition-all duration-300
                 hover:scale-110 hover:shadow-[0_0_20px_#1DA1F2]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 fill-current text-neutral-content
                   group-hover:text-[#1DA1F2]"
                        >
                            <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775
        4.932 4.932 0 0 0 2.165-2.724
        9.864 9.864 0 0 1-3.127 1.195
        4.916 4.916 0 0 0-8.38 4.482
        A13.94 13.94 0 0 1 1.671 3.149
        a4.916 4.916 0 0 0 1.523 6.574
        4.903 4.903 0 0 1-2.229-.616
        4.917 4.917 0 0 0 3.946 4.827
        4.996 4.996 0 0 1-2.224.084
        4.918 4.918 0 0 0 4.6 3.419
        A9.867 9.867 0 0 1 0 19.54
        a13.94 13.94 0 0 0 7.548 2.212
        c9.057 0 14.01-7.496 14.01-13.986
        0-.21 0-.423-.015-.637z"/>
                        </svg>
                    </a>

                    {/* YouTube */}
                    <a
                        aria-label="YouTube"
                        className="group flex items-center justify-center w-10 h-10 rounded-full 
                 bg-neutral-content/10 hover:bg-[#FF0000]/20
                 transition-all duration-300
                 hover:scale-110 hover:shadow-[0_0_20px_#FF0000]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 fill-current text-neutral-content
                   group-hover:text-[#FF0000]"
                        >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0
        -3.897.266-4.356 2.62-4.385 8.816
        .029 6.185.484 8.549 4.385 8.816
        3.6.245 11.626.246 15.23 0
        3.897-.266 4.356-2.62 4.385-8.816
        -.029-6.185-.484-8.549-4.385-8.816z
        M9 16v-8l8 4-8 4z"/>
                        </svg>
                    </a>

                    {/* Facebook */}
                    <a
                        aria-label="Facebook"
                        className="group flex items-center justify-center w-10 h-10 rounded-full 
                 bg-neutral-content/10 hover:bg-[#1877F2]/20
                 transition-all duration-300
                 hover:scale-110 hover:shadow-[0_0_20px_#1877F2]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 fill-current text-neutral-content
                   group-hover:text-[#1877F2]"
                        >
                            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348
        C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01
        h3.13V8.309c0-3.1 1.893-4.788 4.659-4.788
        1.325 0 2.463.099 2.795.143v3.24
        l-1.918.001c-1.504 0-1.796.715-1.796 1.763
        v2.313h3.587l-.467 3.696h-3.12V24h6.116
        C23.403 24 24 23.403 24 22.674V1.326
        C24 .597 23.403 0 22.675 0z"/>
                        </svg>
                    </a>

                </div>
            </nav>


        </footer>
    )
}

export default Footer
