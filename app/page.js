import Image from 'next/image'

export default function Home() {
  return (
    <>
    <section className='min-h-screen relative '>

    {/* <div className='bg-[url("https://wallpapercave.com/wp/wp6726577.jpg")] bg-cover bg-center -z-10 w-[70%] absolute right-0 top-0 h-screen transform -scale-x-100'>

    </div> */}
    <div className='bg-[url("assets/png/hero2.png")] bg-cover bg-center -z-10 w-full lg:w-[75%]  absolute right-0 top-0 h-screen'>
    </div>

      <div className='min-h-screen bg-gradient-hero-radial lg:bg-gradient-hero px-6 py-4 lg:px-8 lg:py-6'>
        <div className='pt-32'>
      home
        </div>
      </div>
   
    </section>
    <section className='w-full min-h-screen'>
      <h1 className='mx-auto text-black w-fit'>test</h1>

    </section>
    </>
  )
}
