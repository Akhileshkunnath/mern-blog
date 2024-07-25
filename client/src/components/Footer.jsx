import {Footer} from "flowbite-react"
import { Link } from "react-router-dom"
import {BsFacebook,BsTwitter,BsInstagram,BsGithub,BsDribbble} from "react-icons/bs"

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to="/" className='   self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg'>AK's</span>
            Blog
        </Link>
                </div>

                <div className="grid grid-cols-2  gap-8  sm:grid-cols-3 mt-4 sm:gap-6">
                   <div>
                   <Footer.Title title="about"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="http://google.com" target="_blank" rel="noopener noreferrer">
                            Projects
                        </Footer.Link>
                        <Footer.Link href="http://google.com" target="_blank" rel="noopener noreferrer">
                            Akhilesh Kunnath
                        </Footer.Link>

                    </Footer.LinkGroup>
                   </div>
                   <div>
                   <Footer.Title title="Follow us"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="https://github.com/Akhileshkunnath" target="_blank" rel="noopener noreferrer">
                            Github
                        </Footer.Link>
                        <Footer.Link href="#" >
                            Instagram
                        </Footer.Link>

                    </Footer.LinkGroup>
                   </div>
                   <div>
                   <Footer.Title title="Legal"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="https://github.com/Akhileshkunnath" target="_blank" rel="noopener noreferrer">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#" >
                            Terms &amp; conditions
                        </Footer.Link>

                    </Footer.LinkGroup>
                   </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className="w-full sm:flex  sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="Ak's Blog" year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center  ">
                    <Footer.Icon href="#" icon={BsFacebook}/>
                    <Footer.Icon href="#" icon={BsInstagram}/>
                    <Footer.Icon href="#" icon={BsTwitter}/>
                    <Footer.Icon href="#" icon={BsGithub}/>
                    <Footer.Icon href="#" icon={BsDribbble}/>
                </div>
            </div>
        </div>
        </Footer>
  )
}

export default FooterCom