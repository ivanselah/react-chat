import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";

type Inputs = {
  name?: string;
  email: string;
  password: string;
};

function Home() {
  const container = useRef<HTMLDivElement>(null);
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    const { name, email, password } = data;
    console.log(name, email, password);
  };

  const signUpAndInHandler = () => {
    const containerCurrent = container.current;
    containerCurrent?.classList.toggle("right-panel-active");
  };

  return (
    <div>
      <div ref={container} className='container' id='container'>
        <div className='form-container sign-up-container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>회원가입</h1>
            <div className='social-container'>
              <Link to='#' className='social'>
                <FaFacebookF />
              </Link>
              <Link to='#' className='social'>
                <FaGoogle />
              </Link>
              <Link to='#' className='social'>
                <FaLinkedin />
              </Link>
            </div>
            <span>or use your email for registration</span>
            <input {...register("name")} type='text' placeholder='name' />
            <input {...register("email", { required: true })} type='email' placeholder='Email' />
            <input {...register("password", { required: true })} type='password' placeholder='Password' />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className='form-container sign-in-container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>로그인</h1>
            <div className='social-container'>
              <Link to='#' className='social'>
                <FaFacebookF />
              </Link>
              <Link to='#' className='social'>
                <FaGoogle />
              </Link>
              <Link to='#' className='social'>
                <FaLinkedin />
              </Link>
            </div>
            <span>or use your account</span>
            <input {...register("email", { required: true })} type='text' placeholder='Email' />
            <input {...register("password", { required: true })} type='password' placeholder='Password' />
            <Link to='#'>Forgot your password?</Link>
            <button type='submit'>Sign In</button>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <img className='logo' src={require("./logo_w.png")} alt='' />
              <h1>MeetWork</h1>
              <p>로그인하기</p>
              <button className='ghost' id='signIn' onClick={signUpAndInHandler}>
                Sign In
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <img className='logo' src={require("./logo_w.png")} alt='' />
              <h1>MeetWork</h1>
              <p>
                MeetWork가 처음이신가요? <br />
                회원가입
              </p>
              <button className='ghost' id='signUp' onClick={signUpAndInHandler}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
