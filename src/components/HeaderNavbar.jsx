import React, { useState, useEffect, } from "react";

export function HeaderNavbar() {
    //scripts del backdrop de la barra de navegacion
    const [menuBackdropVisible, setMenuBackdropVisible] = useState(false);
    const [menuBackdropStyles, setMenuBackdropStyles] = useState({});

    const handleMouseEnter = (event) => {
        const listItem = event.currentTarget;
        const { left, top, width, height } = listItem.getBoundingClientRect();

        setMenuBackdropStyles({ left: left + "px", top: top + "px", width: width + "px", height: height + "px" });
        setMenuBackdropVisible(true);
    };

    const handleMouseLeave = () => {
        setMenuBackdropVisible(false);
    };

    //scripts que hace que cuando se cambia de seccion este cambia de color
    useEffect(() => {
        const header = document.querySelector('#header-navbar');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.90
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const { isIntersecting } = entry;
                if (isIntersecting) {
                    const color = entry.target.getAttribute('data-header-color');
                    header.style.color = color;
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll(".landing-porsche");
        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
            <header
                id="header-navbar"
                className='py-4 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white'>

                <div className='flex flex-grow basis-0 '>

                    <svg
                        className='h-6 w-60  '
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 4500 300">
                        <title>Porsche</title>
                        <path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z" fill='currentColor'></path>
                    </svg>

                </div>

                <nav>
                    <ul className='flex text-sm [&>li>a]:font-medium [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2'>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href="#">718</a></li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href="#">911</a></li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href="#">Taycan</a></li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href="#">Paramera</a></li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href="#">Macan</a></li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href="#">Cayenne</a></li>
                    </ul>
                </nav>

                <nav className='flex flex-grow basis-0 justify-end '>
                    <ul className='flex text-sm [&>li>a]:font-medium [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2'>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href="#">Soporte</a></li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href="#">Cuenta</a></li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href="#">Tienda</a></li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href="#">Menu</a></li>
                    </ul>
                </nav>

                {menuBackdropVisible && (
                    <div
                        id="menu-backdrop"
                        className="absolute bg-black/5 backdrop-blur-lg rounded -z-10  transtion-all duration-300 
                                ease-in-out  "
                        style={{
                            left: menuBackdropStyles.left,
                            top: menuBackdropStyles.top,
                            width: menuBackdropStyles.width,
                            height: menuBackdropStyles.height
                        }}
                    />

                )}

            </header>
        </div>
    );
}

