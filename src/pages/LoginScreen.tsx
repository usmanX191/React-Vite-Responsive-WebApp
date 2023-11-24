import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MobileLoginScreen(){

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email.toLocaleLowerCase() === 'usman@gmail.com' && password === "usman12345"){
        navigate("/dashboard");
    }
    // You can handle form submission here, e.g., validate and send data to the server.
  };

  return (
    <>
    {/* <div className='w-full h-2 text-center bg-white'></div> */}
    <div className='2xl:hidden  flex flex-col  items-center align-middle justify-center  min-h-screen w-full' style={{backgroundColor: 'rgba(78, 198, 163, 0.7)'}}>
      <div className='overflow-y-auto w-full login-main'style={{alignItems:"center", alignContent:"center" }}>
          <p className='text-white text-center text-3xl font-bold mt-5' style={{fontSize:"250%"}}>Welcome</p>
          <p className='text-white text-center text-sm font-bold mt-5' style={{fontSize:"100%"}}>Start your journey with us.</p>
          <div className='text-center justify-center mt-5'>
            <img src='/logo2.png' alt='' className='mx-auto  align-middle items-center' style={{ width: '209px', height: '158px',borderRadius:'224.5px' }} />
          </div>

            <form className='text-center' onSubmit={handleSubmit}>
              <div className='mt-8'>
                <input
                  type='email'
                  placeholder='Username or email'
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className='px-4 py-4 h-18 text-black shadow-xl font-semibold rounded-xl'
                  style={{width: " 80%", fontSize:"100%", borderColor: '#00D094', backgroundColor:'white', borderWidth: 3, borderRadius: 12 }}
                />
              </div>

              <div className='mt-3' >
                <input
                  type='password'
                  placeholder='password'
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className='px-4 py-4  h-18 text-black shadow-xl font-semibold rounded-xl'
                  style={{width: " 80%", fontSize:"100%", borderColor: '#00D094', backgroundColor:'white', borderWidth: 3, borderRadius: 12}}
                />
              </div>
              <button className='mt-7 bg-teal-100 font-bold hover:text-white hover:bg-teal-700 text-center items-center justify-center text-teal-100 bg-opacity-25 px-4 py-3 rounded-lg xs:w-32 sm:w-52' type='submit' style={{fontSize:"95%"}}>Sign In</button>
              <br />
            <p className='text-white text-center font-bold mt-4' style={{fontSize:"95%"}}>OR</p>
            <button className='text-center font-bold text-white hover:text-blue-600 mt-3' style={{fontSize:"100%"}}>Register Now</button>
            <br />
            <button
              className='text-center font-bold text-white hover:text-blue-600 -mt-10 mb-5'
              // style={{marginBottom:"20%"}}
              style={{fontSize:"100%"}}
              onClick={() => {
                // Add your logic for handling the button click, such as dialing the phone number
                navigate('./forgotpassword')
              }}
            >
              Forgot Password
            </button>
            </form>
        </div>
      </div>
    </>
  );
}

function DesktopLoginScreen(){

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email.toLocaleLowerCase() === 'usman@gmail.com' && password === "usman12345"){
        navigate("/dashboard");
    }
    // You can handle form submission here, e.g., validate and send data to the server.
  };


  return (
    <>
    <div className='bg-gray-200 min-h-screen w-screen overflow-y-auto flex align-middle justify-center items-center'>
        <div className='bg-white h-[570px] flex-col w-[850px] px-5 py-5 mt-5 mb-5'>
            <img src="/logo1.png" className='mt-1' style={{height:"12%", width:"10%"}}/>
            <div className=' relative grid grid-cols-2 gap-4 h-auto text-center justify-center' style={{marginLeft:"10%",marginRight:"1.5%" }} >
              
              <div className=''>
                <p className='-ml-6 font-extrabold text-3xl' style={{color:'rgba(78, 198, 163, 1)'}}>Welcome</p>
                <p className='-ml-10 mt-2 font-bold text-base' style={{color:'rgba(78, 198, 163, 1)'}}>Start your journey with us.</p>
                <img src='/logo2.png' alt='main-pic' className='absolute items-center justify-center -ml-12 h-[296px] w-[520px] mt-10'/>
              </div>
              
              <div className=''>
                <div className='relative items-center opacity-95 justify-center h-[382px] py-10 px-8' style={{width:"100%", backgroundColor:"rgba(78, 198, 163, 1)"}}>
                <div className='text-white font-bold text-center inline-block align-middle w-full login-main'><p className='mt-1 text-xl font-bold' style={{color:'hsla(0, 0%, 100%, 1)'}}>Login</p><br/> 
                <div className=''>
                <form onSubmit={handleSubmit}>
                <div className='-mt-1' >
                <input
                type="email"
                placeholder="Username or email"
                value={email}
                onChange={handleEmailChange}
                required
                className='px-3 py-3 w-full text-sm text-black shadow-xl font-semibold rounded-lg'
                style={{ borderColor: '#00D094', backgroundColor:'white', borderWidth:3,borderRadius: 12}}
                />
                </div>
                <div className='' style={{marginTop:"4%"}}>
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className='px-3 py-3 text-sm text-black shadow-xl font-semibold w-full rounded-lg'
                style={{borderColor: '#00D094', borderWidth:3,borderRadius: 12}}
                />
                </div>
                <button className=' bg-teal-100 hover:text-white hover:bg-teal-700 text-teal-100 text-center bg-opacity-25 text-sm py-3 rounded-lg' type="submit" style={{ width: " 50%", borderRadius:'10px', paddingLeft:"5%", paddingRight:"5%", marginTop:"5%" }} >Sign in</button><br/>
                </form>
                <p className='text-white text-center font-bold text-xl' style={{marginTop:"1.5%"}}>OR</p>
                <button className='text-center text-base font-semibold text-white hover:text-blue-600 mt-1'>Register Now</button><br/>
                <button className='text-center text-base font-semibold text-white hover:text-blue-600' style={{marginTop:"0.5%"}} onClick={() => {
                // Add your logic for handling the button click, such as dialing the phone number
                navigate('./forgotpassword')
                }}>Forgot Password</button>
                </div>
                </div>
                </div>
              </div>
            </div>
                <img src="/logo3.png" className='relative' style={{height:"10%", width:"10%",marginTop:"3%", marginBottom:"1%",  marginLeft:"89%"}}/>
        </div>
    </div>
    </>
  );
}




const LoginScreen: React.FC = () => {
  return(
    <>
    <div className='xs:hidden 2xl:block'><DesktopLoginScreen/></div>
    <div className='xs:block 2xl:hidden'><MobileLoginScreen /></div>
    </>
  );
}
export default LoginScreen;

