import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { AiFillHome, AiFillHeart } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { HiBellAlert } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Dashboard: React.FC = () => {
//   const navigate = useNavigate();
  const navigate = useNavigate();

  const [home,setHome] = useState<boolean>(true);
  const [myfiles,setMyFiles] = useState<boolean>(false);
  const [fav,setFav] = useState<boolean>(false);
  const [share,setShare] = useState<boolean>(false);
  const [signInPopup,setSignInPopup] = useState<boolean>(false);

  const handleHome = () => {
    if(home===false){
      setHome(true);
      setMyFiles(false);
      setFav(false);
      setSignInPopup(false);
      setShare(false);
    }
  }
  const handleMyFiles = () => {
    if(myfiles===false){
      setHome(false);
      setMyFiles(true);
      setFav(false);
      setSignInPopup(false);
      setShare(false);
    }
  }
  const handleFav = () => {
    if(fav===false){
      setHome(false);
      setMyFiles(false);
      setFav(true);
      setSignInPopup(false);
      setShare(false);
    }
  }
  const handleShare = () => {
    if(share===false){
      setHome(false);
      setMyFiles(false);
      setFav(false);
      setSignInPopup(false);
      setShare(true);
    }
  }

  // const handlePopup = () => {
  //   setSignInPopup(!(signInPopup));
  // }
  

  return (
    <div className='2xl:block xs:hidden bg-gray-200 h-screen w-full ' >
      <div className='flex '>
        <div className='flex-col min-h-fit bg-[rgba(83, 199, 165, 1)] shadow-xl' style={{width:'26.5%',backgroundColor:'rgba(83, 199, 165, 1)',filter:'drop-shadow(4px 4px 4px #007352)'}}>
          <div className='overflow-y-auto'>
            <div className='w-full h-[87px] flex justify-center items-center align-middle' style={{textAlign:'center',alignItems:'center',marginTop:'40px'}}><p className='text-center text-white text-3xl font-bold' style={{fontFamily:'Inter', fontSize: '36px', fontStyle:'normal',fontWeight:'70%', lineHeight:'normal', letterSpacing:'0.65px'}}> LOGO </p></div>
            <div className='px-8' style={{marginTop:'10%'}}>
                {home ? (<div className='cursor-pointer items-center'><div className='-ml-8 w-[7px] mt-2 absolute h-[80px] text-center bg-white'></div><div className='flex text-center py-8'><p className='inline-block'><AiFillHome size={35} style={{ color: 'white' }}/></p><p className='inline-block mt-2 text-white hover:text-white ml-5 mb-3'  style={{fontFamily:'Inter', fontSize: '22px', fontStyle:'normal',fontWeight:'60%', lineHeight:'normal'}}>Home</p></div></div>) :

                  (<div className='cursor-pointer items-center' onClick={handleHome}><div className='-ml-8 flex text-center p-8'><p className='inline-block'><AiFillHome size={35} className="text-teal-100 hover:text-white" /></p><p  className='inline-block mt-2 text-teal-100 hover:text-white ml-5 mb-3'  style={{fontFamily:'Inter', fontSize: '22px', fontStyle:'normal',fontWeight:'60%', lineHeight:'normal'}}>Home</p></div></div>)}
                
                {myfiles ? (<div className='cursor-pointer items-center -mt-10'><div className='-ml-8 w-[7px] mt-2 absolute h-[80px] text-center bg-white'></div><div className='flex text-center py-8'><p className='inline-block'><FontAwesomeIcon icon={faBriefcase} color='white' size="2x" /></p><p className='inline-block mt-1 text-white hover:text-white ml-5 mb-3'  style={{fontFamily:'Inter', fontSize: '22px', fontStyle:'normal',fontWeight:'60%', lineHeight:'normal'}}>My Files</p></div></div>) :

                  (<div className='cursor-pointer items-center -mt-10' onClick={handleMyFiles}><div className='-ml-8 flex text-center p-8'><p className='inline-block'><FontAwesomeIcon className="text-teal-100 hover:text-white" icon={faBriefcase} color='white' size="2x" /></p><p  className='inline-block mt-1 text-teal-100 hover:text-white ml-5 mb-3'  style={{fontFamily:'Inter', fontSize: '22px', fontStyle:'normal',fontWeight:'60%', lineHeight:'normal'}}>My Files</p></div></div>)}

                {fav ? (<div className='cursor-pointer items-center -mt-10'><div className='-ml-8 w-[7px] mt-2 absolute h-[80px] text-center bg-white'></div><div className='flex text-center py-8'><p className='inline-block'><AiFillHeart size={35} style={{ color: 'white' }}/></p><p className='inline-block mt-1 text-white hover:text-white ml-5 mb-3'  style={{fontFamily:'Inter', fontSize: '22px', fontStyle:'normal',fontWeight:'60%', lineHeight:'normal'}}>Fav</p></div></div>) :

                    (<div className='cursor-pointer items-center -mt-10' onClick={handleFav}><div className='-ml-8 flex text-center p-8'><p className='inline-block'><AiFillHeart size={35} className="text-teal-100 hover:text-white" /></p><p  className='inline-block mt-1 text-teal-100 hover:text-white ml-5 mb-3'  style={{fontFamily:'Inter', fontSize: '22px', fontStyle:'normal',fontWeight:'60%', lineHeight:'normal'}}>Fav</p></div></div>)}
                
                {share ? (<div className='cursor-pointer items-center -mt-10'><div className='-ml-8 w-[7px] mt-2 absolute h-[80px] text-center bg-white'></div><div className='flex text-center py-8'><p className='inline-block'><FontAwesomeIcon icon={faShareSquare} color='white' size="2x" /></p><p className='inline-block mt-1 text-white hover:text-white ml-5 mb-3'  style={{fontFamily:'Inter', fontSize: '22px', fontStyle:'normal',fontWeight:'60%', lineHeight:'normal'}}>Shared with me</p></div></div>) :

                    (<div className='cursor-pointer items-center -mt-10' onClick={handleShare}><div className='-ml-8 flex text-center p-8'><p className='inline-block'><FontAwesomeIcon className="text-teal-100 hover:text-white" icon={faShareSquare} color='white' size="2x" /></p><p  className='inline-block mt-1 text-teal-100 hover:text-white ml-5 mb-3'  style={{fontFamily:'Inter', fontSize: '22px', fontStyle:'normal',fontWeight:'60%', lineHeight:'normal'}}>Shared with me</p></div></div>)}
          </div>
        </div>
        </div>
        <div>
        </div>
        
        <div className='bg-gray-200 min-h-screen' style={{backgroundColor:'rgba(242, 242, 242, 1)' , width:'73.5%'}}>
        {home && (<><div className='flex'>
          <div className='mt-[40px] ml-[65px]'>
            <h1 className='font-extrabold' style={{color:'#0E0F0E', fontFamily:'Inter', fontSize:'34px', fontStyle:'bold', fontWeight:'700', lineHeight:'normal',letterSpacing:'0.64px'}}>My Drive, </h1><br/>
            <h2 className='font-extrabold -mt-1' style={{color:'#0E0F0E', fontFamily:'Inter', fontSize:'28px', fontStyle:'bold', fontWeight:'700', lineHeight:'normal',letterSpacing:'0.48px'}}> Welcome, Usman Mahmood</h2>
            <h3 className='font-extrabold' style={{marginTop:'40px',color:'#0E0F0E', fontFamily:'Inter', fontSize:'28px', fontStyle:'extra-bold', fontWeight:'800', lineHeight:'normal',letterSpacing:'0.48px'}}>All Assets</h3>
          </div>
          <div className='right-0 top-1' style={{position:'absolute'}}>
              <div className='flex flex-col'>
              <div className='grid grid-cols-3'>
                <div className='cursor-pointer mr-[32px] mt-[45px] w-[40px] h-[40px] items-center justify-center py-2 px-2 hover:bg-teal-300' onClick={() => setSignInPopup(false)} style={{borderRadius:'10px', background:'white', boxShadow:'0px 4px 6px 2px rgba(0, 0, 0, 0.25)'}}><HiBellAlert size={25} className= 'items-center justify-center' /></div>
                <div className='cursor-pointer mr-[32px] mt-[45px] w-[40px] h-[40px] items-center justify-center py-2 px-2' onClick={() => setSignInPopup(false)} style={{borderRadius:'10px', background:'white', boxShadow:'0px 4px 6px 2px rgba(0, 0, 0, 0.25)'}}><IoMdSettings size={25} className= 'items-center justify-center' /></div>
                <div className='cursor-pointer mr-[34px] mt-[45px] w-[40px] h-[40px] items-center justify-center' onClick={() => setSignInPopup(!(signInPopup))} style={{borderRadius:'10px', background:'', boxShadow:'0px 4px 6px 2px rgba(0, 0, 0, 0.25)'}}><img src='./image.png' className='w-full h-full object-cover' style={{borderRadius:'10px'}}/></div>
              </div>
              {signInPopup && (
              <div className="absolute top-full h-70 xs:w-auto right-0 mr-9 p-2 bg-gray-300 text-black rounded-lg" style={{top:'47%',borderRadius:'10px'}} onMouseEnter={() => setSignInPopup(true)} onMouseLeave={() => setSignInPopup(false)}>
                <button className="w-[200px] hover:bg-green-600 bg-blue-400 text-center p-2 text-white font-semibold text-base py-4 px-5" style={{borderRadius:'10px'}}>
                  Account Information
                </button>
                <button className="w-[200px] text-center mt-1 hover:font-extrabold hover:bg-red-600 bg-blue-400 text-white font-semibold text-lg py-4 px-5" style={{borderRadius:'10px'}} onClick={() => navigate('//', { replace: true }) }>
                  Sign Out
                </button>
                
              </div>)}

              <div className='cursor-pointer hover:bg-teal-700 bg-[#7FD3BB] mt-[55px] -ml-6 w-[220px] h-[65px] py-5 px-16' onClick={() => setSignInPopup(false)} style={{borderRadius:'10px', alignItems:'center', justifyContent:'center'}}><button className='text-white font-bold items-center justify-center'><FaPlus className='inline-block text-white font-bold' color='white' size={10} /> Add New </button></div>
            </div>
          </div>
        </div>

        <table className="relative border-collapse" style={{width:'90%', marginTop: '30%', marginRight: '2%', marginLeft: '6%',marginBottom:'5%' }}>
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-green-500 px-2 py-1 font-bold text-black text-left" style={{width:'15%',paddingTop:'0.9%',paddingBottom:'0.9%'}}>Name</th>
          <th className="border border-green-500 px-2 py-1 font-bold text-black text-left" style={{width:'15%'}}>Size</th>
          <th className="border border-green-500 px-2 py-1 font-bold text-black text-left" style={{width:'15%'}}>Date Modified</th>
          <th className="border border-green-500 px-2 py-1 font-bold text-black text-left" style={{width:'15%'}}>Shared with/by</th>
          <th className="border border-green-500 px-2 py-1 font-bold text-black text-left" style={{width:'15%'}}></th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
        </tr>
        <tr className="bg-white">
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
        </tr>
        <tr className="bg-white">
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
        </tr>
        <tr className="bg-white">
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
          <td className="border border-green-500 px-2 py-1" style={{padding:'1.8%'}}></td>
        </tr>
      </tbody>
    </table></>)}
    {myfiles && (<>
      <div className='mt-[30px] ml-[65px]'>
            <h1 className='font-semibold' style={{color:'#0E0F0E', fontFamily:'Inter', fontSize:'32px', fontStyle:'normal', fontWeight:'600', lineHeight:'normal',letterSpacing:'0.64px'}}>My Files, </h1><br/>
            <h2 className='font-semibold -mt-3' style={{color:'#0E0F0E', fontFamily:'Inter', fontSize:'24px', fontStyle:'normal', fontWeight:'600', lineHeight:'normal',letterSpacing:'0.48px'}}> Welcome, Usman Mahmood</h2>
          </div>
    </>)}
    {fav && (<>
      <div className='mt-[30px] ml-[65px]'>
            <h1 className='font-semibold' style={{color:'#0E0F0E', fontFamily:'Inter', fontSize:'32px', fontStyle:'normal', fontWeight:'600', lineHeight:'normal',letterSpacing:'0.64px'}}>My Favourites, </h1><br/>
            <h2 className='font-semibold -mt-3' style={{color:'#0E0F0E', fontFamily:'Inter', fontSize:'24px', fontStyle:'normal', fontWeight:'600', lineHeight:'normal',letterSpacing:'0.48px'}}> Welcome, Usman Mahmood</h2>
          </div>
    </>)}
    {share && (<>
      <div className='mt-[30px] ml-[65px]'>
            <h1 className='font-semibold' style={{color:'#0E0F0E', fontFamily:'Inter', fontSize:'32px', fontStyle:'normal', fontWeight:'600', lineHeight:'normal',letterSpacing:'0.64px'}}>Shared Files Page,</h1><br/>
            <h2 className='font-semibold -mt-3' style={{color:'#0E0F0E', fontFamily:'Inter', fontSize:'24px', fontStyle:'normal', fontWeight:'600', lineHeight:'normal',letterSpacing:'0.48px'}}> Welcome, Usman Mahmood</h2>
          </div>
    </>)}    
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
