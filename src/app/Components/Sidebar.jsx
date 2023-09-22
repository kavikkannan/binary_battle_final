// import React from 'react'
// import Link from 'next/link';


// function Sidebar() {

//     let isTrueQ1 = true;
    
//     // let isTrueQ2 = true;
//     // let .... 

//     return (
//         <div className="bg-opacity-10 bg-gradient-to-b from-[#4d4f4f6a] from-10% via-[#42434462] via-30% to-[#41414100] to-100% ... text-white h-[100%] w-[100%] overflow-y-auto grid grid-rows-auto gap-0 z-0 m-2">
//             <ul className={"md:flex-auto px-4 z-0 py-3"}>
//                 <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center bg-${isTrueQ1 ? 'green-500' : 'red-300'} ${isTrueQ1 ? 'bg-opacity-60' : 'bg-opacity-20'} animate-glow-opacity-${isTrueQ1 ? 'green' : 'red'} hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100`}>

//                     <Link href="">
//                         Question 1
//                     </Link>

//                 </li>
//                 <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center bg-${isTrueQ1 ? 'green-500' : 'red-300'} ${isTrueQ1 ? 'bg-opacity-60' : 'bg-opacity-20'} animate-glow-opacity-${isTrueQ1 ? 'green' : 'red'} hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100`}>
//                     <Link href="">
//                         Question 2
//                     </Link>
//                 </li>
//                 <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center bg-${isTrueQ1 ? 'green-500' : 'red-300'} ${isTrueQ1 ? 'bg-opacity-60' : 'bg-opacity-20'} animate-glow-opacity-${isTrueQ1 ? 'green' : 'red'} hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100`}>
//                     <Link href="">
//                         Question 3
//                     </Link>
//                 </li>
//                 <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center bg-${isTrueQ1 ? 'green-500' : 'red-300'} ${isTrueQ1 ? 'bg-opacity-60' : 'bg-opacity-20'} animate-glow-opacity-${isTrueQ1 ? 'green' : 'red'} hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100`}>
//                     <Link href="">
//                         Question 4
//                     </Link>
//                 </li>
//                 <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center bg-${isTrueQ1 ? 'green-500' : 'red-300'} ${isTrueQ1 ? 'bg-opacity-60' : 'bg-opacity-20'} animate-glow-opacity-${isTrueQ1 ? 'green' : 'red'} hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100`}>
//                     <Link href="">
//                         Question 5
//                     </Link>
//                 </li>
//                 <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center bg-${isTrueQ1 ? 'green-500' : 'red-300'} ${isTrueQ1 ? 'bg-opacity-60' : 'bg-opacity-20'} animate-glow-opacity-${isTrueQ1 ? 'green' : 'red'} hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100`}>
//                     <Link href="">
//                         Question 6
//                     </Link>
//                 </li>
//                 <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center bg-${isTrueQ1 ? 'green-500' : 'red-300'} ${isTrueQ1 ? 'bg-opacity-60' : 'bg-opacity-20'} animate-glow-opacity-${isTrueQ1 ? 'green' : 'red'} hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100`}>
//                     <Link href="">
//                         Question 7
//                     </Link>
//                 </li>
//                 <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center bg-${isTrueQ1 ? 'green-500' : 'red-300'} ${isTrueQ1 ? 'bg-opacity-60' : 'bg-opacity-20'} animate-glow-opacity-${isTrueQ1 ? 'green' : 'red'} hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100`}>
//                     <Link href="">
//                         Question 8
//                     </Link>
//                 </li>
//                 <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center bg-${isTrueQ1 ? 'green-500' : 'red-300'} ${isTrueQ1 ? 'bg-opacity-60' : 'bg-opacity-20'} animate-glow-opacity-${isTrueQ1 ? 'green' : 'red'} hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100`}>
//                     <Link href="">
//                         Question 9
//                     </Link>
//                 </li>
//                 <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center bg-${isTrueQ1 ? 'green-500' : 'red-300'} ${isTrueQ1 ? 'bg-opacity-60' : 'bg-opacity-20'} animate-glow-opacity-${isTrueQ1 ? 'green' : 'red'} hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100`}>
//                     <Link href="/">
//                         Question 10
//                     </Link>
//                 </li>
//             </ul>

//         </div>

//     );
// }

// export default Sidebar