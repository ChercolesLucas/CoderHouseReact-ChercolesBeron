import React from "react";

export function SectionsPorsche({headerColor,imageCar, iconCar}) {

  return (
    <>
    <section className="landing-porsche h-screen w-screen text-center relative overflow-hidden"
    data-header-color={headerColor}
    >
      <div className="z-30 relative ml-[40px] h-full flex flex-col pt-60 justify-center items-center">
        <header data-header-color={headerColor}>
        <img src={iconCar} alt="Icono" className="w-[200px] h-auto " />;
        </header>

        <footer className="flex flex-grow flex-col justify-end pb-20 ">
          <div className="flex mx-auto gap-x-4">
            <a
              className="bg-black  text-white rounded text-sm font-medium px-12 py-2  inline-flex justify-center items-center
            hover:bg-white hover:text-black transition-colors duration-300"
              href="#"
            >
              Descripcion general
            </a>

            <a
              className="bg-white border-[3px] border-white  rounded text-sm font-medium px-12 py-2  inline-flex
            hover:bg-black hover:border-black hover:text-white justify-center items-center text-black"
              href="#"
            >
              Personalizar
            </a>
          </div>
        </footer>
      </div>

      <div className="absolute top-0 bottom-0 h-full w-full z-10">
        <img
          src={imageCar}
          alt="Porsche"
          className="h-full w-full object-cover object-center"
        /> 
      </div>
    </section>
  </>
  )

}