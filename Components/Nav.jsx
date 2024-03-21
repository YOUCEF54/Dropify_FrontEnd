import Image from "next/image";
import Logo from"@/public/logo.png";
import { MdModeStandby } from 'react-icons/md';
import Link from "next/link";
import { CgArrowTopRight, CgArrowTopRightO } from "react-icons/cg";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";


export default function Nav(){
    const menu = [
        { name: 'Home', url: '#home' },
        { name: 'Features', url: '#Features' },
        { name: 'Pricing', url: '#Pricing' },
        { name: 'Who we are', url: '#Who-we-are' },
        { name: 'Contact', url: '#contact',className:"hidden lg:block" },
      ];
    return(
        <nav className="fixed w-full h-[10%] ">
            <div className="flex justify-between items-center h-full w-full px-6 lg:px-[8%]">
                <Image
                    src={Logo}
                    alt="Dropify"
                    height={500}
                    width={500}
                    className=" bg-contain w-[16%] lg:w-[11%] "
                    priority
                />
                <div className="flex items-center">
                <ul className="  flex  right-0 top-0 bottom-0 justify-center space-x-10 sm:m-10 m-3 ">
                    {menu.map((e, index) => (
                    <Link href={e.url} key={index} className={e.className} >
                        {e.name}
                    </Link>
                    ))}
                </ul>
                
                <button className="flex items-center space-x-[2px] bg-[#0095FB] py-2 px-5 font-light text-white rounded-full">
                    <span>Login</span>
                    <CgArrowTopRight className="w-[15px] h-[15px]" />
                </button>
                </div>
            </div>
                    
        </nav>
    )
}