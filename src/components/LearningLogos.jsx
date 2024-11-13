import GitHublogo from '../Icons/Github';
import GitHubLink from '../Icons/Githublink';
import CSSlogo from '../Icons/CSS';
import HTMLlogo from '../Icons/Html';
import JavaScriptlogo from '../Icons/JavaScript';
import Nodejslogo from '../Icons/nodejs';
import Gitlogo from '../Icons/Git';
import PythonLogo from '../Icons/PythonLogo';


export default function PerformingLogos() {
    return(
        <>
        <div className='flex flex-row justify-center gap-5'>
            <div className='grid grid-cols-2 items-center'>
            <Nodejslogo />
            <p  style={{ color: "#E9DBED" }} className='hidden md:block'>Node.js</p>
            </div>
            <div className='grid grid-cols-2 items-center'>
            <JavaScriptlogo />
            <p  style={{ color: "#E9DBED" }} className='hidden md:block'>JavaScript</p>
            </div>
            <div className='grid grid-cols-2 items-center'>
            <Gitlogo />
            <p  style={{ color: "#E9DBED" }} className='hidden md:block'>Git</p>
            </div>
            <div className='grid grid-cols-2 items-center'>
            <PythonLogo />
            <p  style={{ color: "#E9DBED" }} className='hidden md:block'>Python</p>
            </div>
        </div>
        </>
    );
}