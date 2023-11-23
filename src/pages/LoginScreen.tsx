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
    <div className='2xl:hidden  flex flex-col  items-center align-middle justify-center  min-h-screen w-full' style={{backgroundColor: '#4EC6A3B2'}}>
      <div className='overflow-y-auto w-full login-main'style={{alignItems:"center", alignContent:"center" }}>
          <p className='text-white text-center text-3xl font-bold mt-5' style={{fontSize:"250%"}}>Welcome</p>
          <p className='text-white text-center text-sm font-bold mt-5' style={{fontSize:"100%"}}>Start your journey with us.</p>
          <div className='text-center justify-center mt-5'>
            <img src='/images/logo2.png' alt='' className='mx-auto' style={{ width: '209px', height: '158px' }} />
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
    <div className='bg-gray-200 min-h-screen w-screen overflow-y-auto flex py-5 px-5 align-middle justify-center items-center'>
        <div className='bg-white h-[600px] flex-col w-[1280px] px-5 py-5'>
            <img src="/images/logo1.png" className='mt-1' style={{height:"10%", width:"8%"}}/>
            <div className='relative grid grid-cols-2 gap-4 h-auto text-center justify-center' style={{marginLeft:"10%",marginRight:"1.5%" }} >
              
              <div className=''>
                <p className='text-emerald-400 font-extrabold text-4xl'>Welcome</p>
                <p className='text-emerald-400 mt-4 font-extrabold text-base'>Start your journey with us.</p>
                <img src='/images/logo2.png' alt='main-pic' className='absolute z-0 items-center justify-center ml-8 h-[300px] w-[654px] mt-12' style={{width:"60%"}}/>
              </div>
              
              <div className=''>
                <div className=' bg-emerald-400 relative z-10 opacity-90 items-center justify-center h-[408px] py-10 px-10' style={{width:"100%"}}>
                <div className='text-white font-bold text-center inline-block align-middle w-full login-main'><p className='text-2xl font-bold'>Login</p><br/> 
                <div className=''>
                <form onSubmit={handleSubmit}>
                <div className='mt-0' >
                <input
                type="email"
                placeholder="Username or email"
                value={email}
                onChange={handleEmailChange}
                required
                className='px-4 py-4 w-full text-sm text-black border border-emerald-500 shadow-xl font-semibold rounded-lg'
                />
                </div>
                <div className='' style={{marginTop:"5%"}}>
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className='px-4 py-4 text-sm text-black border border-emerald-500 shadow-xl font-semibold w-full rounded-lg'
                />
                </div>
                <button className=' bg-teal-100 hover:text-white hover:bg-teal-700 text-teal-100 text-center bg-opacity-25 text-sm py-3 rounded-lg' type="submit" style={{fontSize:"100%", width: " 50%", paddingLeft:"5%", paddingRight:"5%", marginTop:"5%" }} >Sign in</button><br/>
                </form>
                <p className='text-white text-center font-bold text-xl' style={{marginTop:"1%"}}>OR</p>
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
                <img src="/images/logo3.png" className='relative' style={{height:"10%", width:"8%",marginTop:"2%", marginBottom:"2%",  marginLeft:"91%"}}/>
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
