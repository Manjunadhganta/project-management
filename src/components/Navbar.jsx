import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FcCollaboration } from "react-icons/fc";
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";


const Navbar = () =>{

    const items = [
        'Home',
        'About',
        'Testimonials',
        'Pricing',
        'Contact Us'
    ]

    const [isOpen, setOpen] = useState(false);

    return (

        <>
            <div className="w-full flex justify-center mt-4 fixed">
                <div style={{fontFamily:'"Space Grotesk", sans-serif'}} className="mx-auto gap-45 bg-white rounded-full px-7 py-4 items-center justify-between inline-flex shadow-md">
                    <div style={{fontFamily:'"Edu NSW ACT Cursive", cursive'}} className="font-semibold text-xl text-[#3FBDF1]">
                        <span className="flex items-center gap-2"><FcCollaboration className="text-[25px]"/>Collabify</span>
                    </div>

                    <div className="hidden lg:flex justify-center gap-4 items-center">
                        {items.map((item, index)=>(
                            <a key={index} href={`#${item.toLowerCase()}`} className="text-lg">
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex gap-4">
                        <button className="px-3 py-1 border-black border rounded-lg">Sign Up</button>
                        <button className="px-3 py-1 bg-black text-white rounded-lg flex items-center gap-2"><FaRegUserCircle /> Log in</button>
                    </div>

                    {/* Mobile Version Code */}

                    <div className="lg:hidden flex items-center">
                        <button onClick={()=>setOpen(!isOpen)}>
                            {isOpen ? <IoCloseOutline size={28} /> : <IoMenu size={28} />}
                        </button>
                    </div>

                    {isOpen && (
                        <div className="absolute top-17 left-0 w-full bg-white shadow-md z-50 px-8 py-5 flex flex-col lg:hidden gap-4 items-center">
                                {items.map((item, index)=>(
                                    <a key={index} className="text-lg">
                                        {item}
                                    </a>
                                ))}
                            <div className="flex flex-col gap-4">
                                <button className="px-9 py-1 border-black border-1 rounded-lg">Sign Up</button>
                                <button className="px-9 py-1 bg-black text-white rounded-lg flex items-center gap-2"><FaRegUserCircle /> Log in</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default Navbar;