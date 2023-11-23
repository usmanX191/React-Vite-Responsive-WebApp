// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AiFillHome, AiFillHeart } from 'react-icons/ai';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

// const Dashboard: React.FC = () => {
//   const navigate = useNavigate();

//   const [home,setHome] = useState<Boolean>(false);
//   const [myfiles,setMyFiles] = useState<Boolean>(false);
//   const [fav,setFav] = useState<Boolean>(false);
//   const [share,setShare] = useState<Boolean>(false);

//   const handleHome = () => {
//     if(home===false){
//       setHome(true);
//       setMyFiles(false);
//       setFav(false);
//       setShare(false);
//     }
//   }
//   const handleMyFiles = () => {
//     if(myfiles===false){
//       setHome(false);
//       setMyFiles(true);
//       setFav(false);
//       setShare(false);
//     }
//   }
//   const handleFav = () => {
//     if(fav===false){
//       setHome(false);
//       setMyFiles(false);
//       setFav(true);
//       setShare(false);
//     }
//   }
//   const handleShare = () => {
//     if(share===false){
//       setHome(false);
//       setMyFiles(false);
//       setFav(false);
//       setShare(true);
//     }
//   }

//   return (
//     <div className='bg-gray-200 h-screen w-full'>
//       <div className='flex'>
//         <div className='flex-col w-[382px] h-[651px] bg-emerald-400 shadow-xl'>
//             <div className='justify-center'><p className='text-center mt-10 text-white text-5xl font-bold '> LOGO </p></div>
//             <div className='mt-20 px-8'>
//                 {home ? (<div className='cursor-pointer'><div className='-ml-8 w-2 absolute h-20 text-center bg-white'> </div><div className='flex text-center p-6'> <p className='inline-block'><AiFillHome size={35} style={{ color: 'white' }}/></p><p  className='inline-block text-2xl text-white hover:text-white font-bold ml-5 mb-3'>Home</p></div></div>) :

//                   (<div className='cursor-pointer' onClick={handleHome}><div className='flex text-center p-6'><p className='inline-block'><AiFillHome size={35} className="text-teal-100 hover:text-white" /></p><p  className='inline-block text-2xl text-teal-100 hover:text-white font-bold ml-5 mb-3'>Home</p></div></div>)}
                
//                 {myfiles ? (<div className='cursor-pointer'><div className='-ml-8 w-2 absolute h-20 text-center bg-white'> </div><div className='flex text-center p-6'> <p className='inline-block'><FontAwesomeIcon icon={faBriefcase} color='white' size="2x" /></p><p  className='inline-block text-2xl text-white hover:text-white font-bold ml-5 mb-3'>My Files</p></div></div>) :

//                   (<div className='cursor-pointer' onClick={handleMyFiles}><div className='flex text-center p-6'><p className='inline-block'><FontAwesomeIcon className="text-teal-100 hover:text-white" icon={faBriefcase} color='white' size="2x" /></p><p  className='inline-block text-2xl text-teal-100 hover:text-white font-bold ml-5 mb-3'>My Files</p></div></div>)}

//                 {fav ? (<div className='cursor-pointer'><div className='-ml-8 w-2 absolute h-20 text-center bg-white'> </div><div className='flex text-center p-6'> <p className='inline-block'><AiFillHeart size={35} style={{ color: 'white' }}/></p><p  className='inline-block text-2xl text-white hover:text-white font-bold ml-5 mb-3'>Fav</p></div></div>) :

//                   (<div className= 'cursor-pointer' onClick={handleFav}><div className='flex text-center p-6'><p className='inline-block'><AiFillHeart size={35} className="text-teal-100 hover:text-white" /></p><p  className='inline-block text-2xl text-teal-100 hover:text-white font-bold ml-5 mb-3'>Fav</p></div></div>)}
                
//                 {share ? (<div className='cursor-pointer'><div className='-ml-8 w-2 absolute h-20 text-center bg-white'> </div><div className='flex text-center p-6'> <p className='inline-block'><FontAwesomeIcon icon={faShareSquare} color='white' size="2x" /></p><p  className='inline-block text-2xl text-white hover:text-white font-bold ml-5 mb-3'>Shared with me</p></div></div>) :

//                   (<div className='cursor-pointer' onClick={handleShare}><div className='flex text-center p-6'><p className='inline-block'><FontAwesomeIcon className="text-teal-100 hover:text-white" icon={faShareSquare} color='white' size="2x" /></p><p  className='inline-block text-2xl text-teal-100 hover:text-white font-bold ml-5 mb-3'>Shared with me</p></div></div>)}
//             </div>
//         </div>
//         <div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
