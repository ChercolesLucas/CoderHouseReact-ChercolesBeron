import React from "react"

export function BannerNavbar(){
return(
        <>
            <section className='landing-porsche h-screen  w-screen text-center relative overflow-hidden '
            data-header-color=''>
            
            <div className='z-30 relative h-full flex flex-col'> 

            <header >
            <h2 className='text-white pt-40 text-4xl font-medium'>Keep your eseence.</h2>

            </header>
            
            <footer className='flex flex-col flex-grow flex-nowrap justify-end pb-20 '>
            <div>
            <a className='border-[3px] border-white bg-white/5 backdrop-blur-sm text-sm text-white rounded font-medium px-12 py-2  inline-block 
            hover:bg-white hover:text-black transition-colors' 
            href='#'>
                View all models
            </a>
            </div>

            </footer>

            </div>

            <div className='absolute top-0 bottom-0 h-full  w-full z-10 '>
            <video className='object-center object-cover h-full w-full' autoPlay muted loop src="video.webm"></video>
            </div>
 

        </section>
        </>
)
}