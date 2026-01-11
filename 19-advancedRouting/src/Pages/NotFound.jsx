import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1 className='text-red-600'>404 | Not Found</h1>
    </div>
  )
}

export default NotFound
// import React, { useEffect, useState } from "react";

// const generateStars = (count) => {
//   return Array.from({ length: count }, (_, i) => ({
//     id: i + Math.random(),
//     size: Math.random() * 2 + 1,
//     top: `${Math.random() * 50}%`,
//     left: `${Math.random() * 100}%`,
//     duration: Math.random() * 3 + 4,
//     delay: Math.random() * 4,
//     direction: Math.random() > 0.5 ? "topLeft" : "topRight",
//   }));
// };

// const NotFound = () => {
//   const [stars, setStars] = useState([]);

//   useEffect(() => {
//     setStars(generateStars(30));

//     const interval = setInterval(() => {
//       setStars((prev) => [...prev.slice(-20), ...generateStars(10)]);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* Styles */}
//       <style>{`
//         @import url("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css");

//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }

//         @keyframes tilt {
//           0%, 100% { transform: rotate(-2deg); }
//           50% { transform: rotate(2deg); }
//         }

//         @keyframes fallTopLeft {
//           0% { transform: translate(0,0); opacity: 0; }
//           10% { opacity: 1; }
//           90% { opacity: 1; }
//           100% { transform: translate(-100px, 100vh); opacity: 0; }
//         }

//         @keyframes fallTopRight {
//           0% { transform: translate(0,0); opacity: 0; }
//           10% { opacity: 1; }
//           90% { opacity: 1; }
//           100% { transform: translate(100px, 100vh); opacity: 0; }
//         }

//         .animate-fall-topLeft {
//           animation: fallTopLeft 5s linear infinite;
//         }

//         .animate-fall-topRight {
//           animation: fallTopRight 5s linear infinite;
//         }

//         .bg-space {
//           background: url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9770934.jpg-Wl31ERQfbntJABIblVId5PIBjqP5Gx.jpeg")
//             no-repeat center center / cover;
//         }

//         .ufo {
//           position: absolute;
//           top: 33%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           animation: float 6s ease-in-out infinite, tilt 6s ease-in-out infinite;
//         }
//       `}</style>

//       <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center">
//         {/* Background */}
//         <div className="absolute inset-0 bg-space"></div>

//         {/* Falling Stars */}
//         <div className="absolute inset-0 overflow-hidden">
//           {stars.map((star) => (
//             <div
//               key={star.id}
//               className={`absolute ${
//                 star.direction === "topLeft"
//                   ? "animate-fall-topLeft"
//                   : "animate-fall-topRight"
//               }`}
//               style={{
//                 top: star.top,
//                 left: star.left,
//                 width: `${star.size}px`,
//                 height: `${star.size}px`,
//                 animationDuration: `${star.duration}s`,
//                 animationDelay: `${star.delay}s`,
//               }}
//             >
//               <div className="h-full w-full rounded-full bg-white opacity-80" />
//             </div>
//           ))}
//         </div>

//         {/* UFO */}
//         <div className="ufo">
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8794272-p5k6GdbD8O2RIat5GWtUGJGkDgXoxf.png"
//             alt="UFO"
//             width={300}
//             height={150}
//           />
//         </div>

//         {/* Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
//           <p className="mb-2 text-7xl font-bold">404</p>
//           <p className="mb-8 text-xl text-gray-300">
//             Oops! Looks like this page got lost in space
//           </p>
//           <a
//             href="/"
//             className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700"
//           >
//             Return Home
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NotFound;
