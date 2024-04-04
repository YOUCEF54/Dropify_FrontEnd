import Image from 'next/image';
import { CgArrowTopRight } from 'react-icons/cg';
import VectImg from "../public/VectImg.png"
import VectBill from "../public/VectBill.png"
import Vect1 from "../public/Vect1.svg"
export default function Hero(){

    const classeNames = (...Classes) => {
        return  Classes.join(' ')
    }

    const nClassNames = (...objects) => {
        return objects.reduce((result, obj) => {
            const [mediaQuery, className] = Object.entries(obj)[0];
            const classes = className.split(' ');
            const prefixedClasses = classes.map(cls => `${mediaQuery}${cls}`);
            return [...result, ...prefixedClasses];
          }, []).join(' ');
      };

    return(
        <div className="bg-gray-50 h-[80%] justify-center  ">
        <h1 className={
            classeNames(
                "font-sofia-pro-bold mt-[8vh] font-extrabold text-[3rem] text-center leading-[3.2rem] text-gray-900 m-auto",
                "lg:text-[3.8rem] lg:leading-[4rem]",
                "max-md:w-[90%]",
                "max-sm:mt-[4vh] max-sm:text-[2rem] max-sm:leading-[2.2rem]")}>
            Launch your own<br/>eCommerce store with Dropify
        </h1>
        <p className="leading-[2.9rem] mt-3 lg:w-[55rem] lg:text-[1.5vw]  max-sm:mt-[1rem] max-sm:w-[90%] max-sm:leading-[2rem] w-[55vw] m-auto text-center font-medium text-[2.3vw] max-md:w-[90%] max-md:text-[1.3rem] text-gray-500 md:w-[90%]">In just a few clicks and Maximise your ROI with 500%+. Create your own store without prior experience in programming</p>
        <form className='  z-50 opacity-[95%] relative  m-auto  max-w-[70%]  mt-10 lg:w-[40%] md:w-[53%] max-md:w-[90%]  h-[66px] '>
            <input className='  py-5 px-7 border self-center rounded-full w-[100%] h-[100%] border-gray-500' type="Email" placeholder="Enter your Emai Address"/>
            <button className=" absolute right-[3.8px] top-[5%]  bottom-0 h-[90%] rounded-full   flex items-center space-x-[2px] bg-[#0095FB] py-4 px-6 text-lg font-light text-white shadow-2xl shadow-[#0097fba0]">
                        <span>Get Started</span>
                        <CgArrowTopRight className="w-[23px] h-[23px] font-extrabold" />
            </button>
        </form>
            <div className=' block'>
            <div className='max-md:relative transition-all w-full h-[15vw]'>
                <Image
                    src={VectImg}
                    width={500}
                    height={500}
                    className={classeNames(
                        'w-[20vw] absolute right-[5vw] top-[50%] ',
                        'max-md:right-[.1vw] ')}
                />
                <Image
                    src={VectBill}
                    width={1000}
                    height={720}
                    className={classeNames( 
                        " absolute top-[57%] left-[5vw] w-[15vw]",
                    )}
                />
                <Image
                    src={Vect1}
                    width={500}
                    height={500}
                    className={classeNames(
                        ' absolute w-[74vw]  m-auto top-0 left-0 -translate-y-[3vw] right-0 z-40',
                        ' md:w-[74vw] md:top-[55%] md:translate-y-[1vw] ',
                        ' max-md:-translate-y-[8vw] max-md:w-[90vw]',
                        ' lg:-translate-y-[8vw]'
                    )}
                />
            </div>
            <div className="Features w-full flex flex-col items-center justify-center mt-[30vw] max-sm:mt-[40vw] max-md:mt-[50vw]">
            <button className="opacity-85 py-[0.6rem] text-[1.4vw] px-6 rounded-full border-l bg-sky-100 border-sky-300 text-dBlue mb-4">Features</button>
            <h1 className="text-center font-jakarta font-bold text-[4.1vw]">Dropify Is Not Just A Platform</h1>

            <div className="grid sm:grid-rows-6 max-sm:grid-rows-[32] grid-cols-3 cont  gap-4 lg:w-[100vw] w-[90vw] max-sm:grid-cols-2 max-sm:grid-flow-row mt-8 h-[30rem] max-sm:h-[60rem] ">

                <div className={classeNames(
                    "bg-zinc-50 border border-zinc-300 items-center p-4 rounded-3xl ",
                    "sm:row-span-3",
                    "max-sm:row-end-5 max-sm"
                )}>
                    <div className={nClassNames(
                        {"":'bg-zinc-300 m-auto w-full rounded-2xl h-[60%]'},
                        {"max-sm:":" row-start-1"}
                    )}></div>
                    <h1></h1>

                </div>
                <div className="rounded-3xl   row-span-3 max-sm:row-start-15 flex flex-col justify-between c2">
                    <div className={classeNames(
                        "bg-zinc-50 border border-zinc-300  p-4 h-[calc((100%/3)*2-8px)] rounded-3xl "
                    )}>Card 2.1</div>
                    <div className={nClassNames(
                        {"":"bg-zinc-50 border border-zinc-300  p-4 rounded-3xl "},
                        {"sm:":"h-[calc((100%/3)*1-10px)] bg-purple-600"}
                    )}>Card2.2</div>
                </div>

                <div className="bg-zinc-50 border border-zinc-300  p-4 rounded-3xl sm:row-span-4 max-sm:row-start-4 max-sm:row-span-4 c3">
                    Card 3
                </div>

                <div className={classeNames(
                    "bg-zinc-50 border border-zinc-300 p-4 rounded-3xl",
                    "sm:col-span-2 sm:row-start-4 sm:row-span-3",
                    "max-sm:row-span-4"
                )}>Card 4</div>

                <div className={nClassNames(
                    {"":"bg-zinc-50 border border-zinc-300 p-4 rounded-3xl"},
                    {"sm:":"col-span-2 row-start-4 row-span-3"},
                    {"max-sm:":"row-start-5 row-span-3"}
                )}>Card 5</div>
            </div>
            </div>
            <div className='cont'>
                <div className='header'>header</div>
            </div>
            </div>
        </div>
    )
}