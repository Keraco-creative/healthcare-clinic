// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// // Import your logo image
// import Logo from '../public/blogo.png';

// // Define the navigation links
// const links = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/contact-us', label: 'Contact Us' },
//   { href: '/services', label: 'Services' },
// ];

// // Define the Navbar component
// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <Link href="/">
//             <Image src={Logo} alt="Logo" width={100} height={100} />
//           </Link>
//         </div>

//         {/* Menu Links Section */}
//         <ul className="flex space-x-6 text-lg">
//           {links.map((link) => (
//             <li key={link.href}>
//               <Link href={link.href} className="text-gray-700 hover:text-green-500 transition">
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
