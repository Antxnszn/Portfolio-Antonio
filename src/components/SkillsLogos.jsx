import GitHublogo from '../Icons/Github';
import GitHubLink from '../Icons/Githublink';
import CSSlogo from '../Icons/CSS';
import HTMLlogo from '../Icons/Html';
import JavaScriptlogo from '../Icons/JavaScript';
import Nodejslogo from '../Icons/nodejs';
import Linkedinlogo from '../Icons/Linkedin';
import CPPlogo from '../Icons/CPP';
import Clogo from '../Icons/C';
import Gitlogo from '../Icons/Git';
import GitHubprofile from '../Icons/GitHubprofile';

export default function SkillsLogos() {
    return(
      <div className='flex flex-row items-center lg:gap-10 justify-center mx-[2em] lg:mx-[0.5em] mb-[2em] lg:mb-[5em]'>
      <div className='flex flex-row gap-2'>
      <div className='grid grid-cols-2 items-center text-left justify-center'>
        <Clogo/>
        <p  style={{ color: "#E9DBED" }} className='hidden md:block ml-3'>C</p>
      </div>
      <div className="grid grid-cols-2 items-center justify-center">
        <CPPlogo />
        <p  style={{ color: "#E9DBED" }} className='hidden md:block '>C++</p>
      </div>
      </div>

      <div className='flex flex-row gap-1 lg:gap-5'>
      <div className="grid grid-cols-2 items-center text-left justify-center ">
        <HTMLlogo />
        <p  style={{ color: "#E9DBED" }} className='hidden md:block ml-3'>HTML</p>
      </div>
      <div className="grid grid-cols-2 items-center justify-center">
        <CSSlogo />
        <p  style={{ color: "#E9DBED" }} className='hidden md:block ml-3'>CSS</p>
      </div>
      </div>
      </div>
   
    );   
}