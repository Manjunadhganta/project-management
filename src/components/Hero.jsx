import project from '../assets/project.svg'

const Hero = () =>{
    return(
        <>
            <section id='home' className='pt-24 pb-16 lg:min-h-screen flex items-center'>
                <div className='max-w-7xl mx-auto px-5 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-20'>

                        {/* Left Part */}
                        <div className='flex justify-center items-center'>
                            <img src={project} alt="SaaS Illustration" className='w-full max-w-md' />
                        </div>

                        {/* Right Part */}
                        <div className='flex flex-wrap gap-6'>
                            <h1 style={{fontFamily: '"Space Grotesk", sans-serif'}} className='text-4xl md:text-5xl lg:text-7xl font-semibold text-black leading-tight'>
                            Manage. <br /> Grow. Rise. 🚀
                            </h1>
                            <p className='text-lg text-gray-600'>
                            Empower your team to plan smarter, collaborate better, and deliver faster. Our all-in-one project management platform gives startups and teams the clarity, control, and momentum they need to turn ideas into impact.
                            </p>

                            <div className='flex gap-6 mt-6'>
                            <button className='px-6 py-3 bg-[#3FBDF1] text-black border-2 border-black rounded-lg hover:bg-black hover:text-white transition'>
                                Get Started
                            </button>
                            <button className='px-6 py-3 border-black border-2 rounded-lg hover:border-[#3FBDF1] hover:text-[#3FBDF1] transition'>
                                View Pricing
                            </button>
                            </div>
                        </div>    
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default Hero;