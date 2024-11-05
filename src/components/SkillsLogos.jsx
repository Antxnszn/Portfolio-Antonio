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
        <div className='flex flex-row items-center justify-center gap-10'>
      <div className='flex flex-row items-center justify-center'>
      <div className='grid grid-cols-2 items-center justify-center'>
        <Clogo/>
        <p  style={{ color: "#E0DFFF" }} className='hidden md:block ml-3'>C</p>
      </div>
      <div className="grid grid-cols-2 gap-0 items-center justify-center">
        <CPPlogo />
        <p  style={{ color: "#E0DFFF" }} className='hidden md:block '>C++</p>
      </div>
      </div>

      <div className='flex flex-cols-2 items-center justify-center'>
      <div className="grid grid-cols-2 items-center justify-center">
        <HTMLlogo />
        <p  style={{ color: "#E0DFFF" }} className='hidden md:block ml-3'>HTML</p>
      </div>
      <div className="grid grid-cols-2 items-center justify-center">
        <GitHublogo />
        <p  style={{ color: "#E0DFFF" }} className='hidden md:block ml-3'>GitHub</p>
      </div>
      </div>
      </div>
   
    );   
}