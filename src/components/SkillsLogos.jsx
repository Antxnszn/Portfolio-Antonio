import GitHublogo from '../Icons/Github';
import GitHubLink from '../Icons/Githublink';
import CSSlogo from '../Icons/CSS';
import HTMLlogo from '../Icons/Html';
import JavaScriptlogo from '../Icons/JavaScript';
import Nodejslogo from '../Icons/MySQLLogo';
import Linkedinlogo from '../Icons/Linkedin';
import CPPlogo from '../Icons/CPP';
import Clogo from '../Icons/C';
import Gitlogo from '../Icons/Git';
import GitHubprofile from '../Icons/GitHubprofile';

export default function SkillsLogos() {
    return(
      <div className='flex flex-row justify-center gap-8 mb-14 mt-8'>
        <div className="grid grid-cols-2 items-center md:gap-2">
        <Clogo/>
        <p  style={{ color: "#E9DBED" }} className='text-left hidden lg:block ml-3'>C</p>
        </div>
        <div className='grid grid-cols-2 items-center'>
        <CPPlogo />
        <p  style={{ color: "#E9DBED" }} className='hidden lg:block '>C++</p>
        </div>
        <div className='grid grid-cols-2 items-center'>
        <HTMLlogo />
        <p  style={{ color: "#E9DBED" }} className='hidden lg:block ml-3'>HTML</p>
        </div>
        <div className='grid grid-cols-2 items-center'>
        <CSSlogo />
        <p  style={{ color: "#E9DBED" }} className='hidden lg:block ml-3'>CSS</p>
        </div>
    </div>
   
    );   
}