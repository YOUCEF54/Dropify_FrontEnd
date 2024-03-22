"use client";
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CgArrowTopRight } from 'react-icons/cg';
import Link from 'next/link';
import Logo from"@/public/Logo.svg";
import Image from "next/image";
import "../node_modules/flag-icon-css/css/flag-icons.min.css"; 
import { usePathname } from 'next/navigation'

import { MdKeyboardArrowDown } from "react-icons/md";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedLang,setLang] = useState("English")
  const currentPath = usePathname();
  const menu = [
    { name: 'Home', url: '/',className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 px-0" },
    { name: 'Features', url: '/Features',className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 px-0" },
    { name: 'Pricing', url: '/Pricing',className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 px-0" },
    { name: 'Who we are', url: '/Who-we-are',className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 lg:inline-flex hidden px-0" },
  ];

  const Languages = [
    {name:"Arabic"},
    {name: "English"},
    {name: "French"},
    {name: "Spanish"}]
  return (
    <Disclosure as="nav" className="bg-gray-50 pt-3 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              {/* <div className="flex justify-between"> */}
              <div className="flex justify-between items-center h-full w-full px-6 ">

                <div className="flex flex-shrink-0 items-center ">
                <Image
                    src={Logo}
                    alt="Dropify"
                    height={500}
                    width={500}
                    className=" bg-contain w-full "
                    priority
                />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">          
                    {menu.map((e, index) => (
                    <Link href={e.url} key={index} className={classNames((currentPath == e.url)&&" w-fit  border-[#707070]",e.className)} >
                        {e.name}
                    </Link>
                    ))}
                  <div class=" h-2 min-h-[1em] w-0.5 m-auto bg-neutral-200 dark:bg-white/10  max-md:hidden"></div>
                    <div className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 max-md:hidden">
                      <Menu as="div" className="relative ml-3 items-center ">
                        <div>
                          <Menu.Button className={"flex align-middle items-center"} >
                            <span className="flex align-middle">{selectedLang}</span>
                            <MdKeyboardArrowDown size={20}/>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {Languages.map((lang,index)=>(
                              <Menu.Item key={index}>
                                {({ active }) => (
                                         <button
                                         onClick={()=>setLang(lang.name)}
                                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-start')}
                                       >
                                         {lang.name}
                                       </button>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
            
                      <button className="flex items-center space-x-[2px] bg-[#0095FB] py-2 px-5 font-light text-white rounded-full">
                        <span>Login</span>
                        <CgArrowTopRight className="w-[15px] h-[15px]" />
                      </button>

                
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </Disclosure.Button>
            </div>
           
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
