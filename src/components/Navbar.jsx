import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/DpLogo.png"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6'>
        <div className='flex shrink-0 items-center'>
            <a href="/" aria-label='Home'>
                <img src={logo} alt="logo" className="mx-2" width={40} height={40} />
            </a>
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/prajapati-darshan-9775091bb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin/>
            </a>
             <a href="https://github.com/darsuprajapati" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub/>
            </a>
             <a href="https://www.instagram.com/darshan_prajapati813" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram/>
            </a>
        </div>  
    </div>
  )
}

export default Navbar