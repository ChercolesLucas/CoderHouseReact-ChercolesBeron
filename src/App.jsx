import './index.css'
import { HeaderNavbar } from './components/HeaderNavbar'
import { BannerNavbar } from './components/BannerNavbar'
import { SectionsPorsche } from './components/SectionsPorsche'


function App() {
  return (
    <>
        <HeaderNavbar />

        <main className='container-snap snap-y snap-mandatory relative w-full h-screen overflow-auto'>
        <div className='snap-center'>
        <BannerNavbar />
        </div>

    <div className='snap-center'>
        <SectionsPorsche 
          iconCar="718.svg" 
          headerColor="black" imageCar="porsche-718.webp"
        />
        </div>

        <div className='snap-center'>
        <SectionsPorsche 
          iconCar="911.svg" 
          headerColor="white" imageCar="porsche-911.webp"
        />
        </div>

        <div className='snap-center'>
        <SectionsPorsche 
          iconCar="taycan.svg" 
          headerColor="black" imageCar="porsche-taycan.webp"
        />
        </div>

        <div className='snap-center'>
        <SectionsPorsche 
          iconCar="panamera.svg" 
          headerColor="white" imageCar="porsche-paramera.webp"
        />
        </div>

        <div className='snap-center'>
        <SectionsPorsche 
          iconCar="macan.svg" 
          headerColor="white" imageCar="porsche-macan-1920.webp"
        />
        </div>

        <div className='snap-center'>
        <SectionsPorsche  
        iconCar="cayenne.svg" 
          headerColor="white" imageCar="porsche-Cayenne.webp"
        />
        </div>


        </main>
    </>
  )
}

export default App
