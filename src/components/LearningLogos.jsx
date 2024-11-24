
import JavaScriptlogo from '../Icons/JavaScript';
import Nodejslogo from '../Icons/MySQLLogo';
import Gitlogo from '../Icons/Git';
import PythonLogo from '../Icons/PythonLogo';


export default function PerformingLogos() {
    return(
    <>
    <div className='flex flex-row justify-center gap-8 mt-8'>
        <div className="grid grid-cols-2 items-center md:gap-2">
            <Nodejslogo />
            <p style={{ color: "#E9DBED" }} className="hidden mr-2  lg:block">MySQL</p>
        </div>
        <div className='grid grid-cols-2 items-center'>
            <JavaScriptlogo />
            <p  style={{ color: "#E9DBED" }} className='hidden lg:block'>JavaScript</p>
        </div>
        <div className='grid grid-cols-2 items-center'>
            <Gitlogo />
            <p  style={{ color: "#E9DBED" }} className='hidden lg:block'>Git</p>
        </div>
        <div className='grid grid-cols-2 items-center'>
            <PythonLogo />
            <p  style={{ color: "#E9DBED" }} className='hidden lg:block ml-2'>Python</p>
        </div>
    </div>
    </>
    );
}