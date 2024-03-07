import logo from "@/assets/footer-logo.svg"
import Image from "next/image";
import { FaFacebook,FaTwitter,FaYoutube,FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">TOP DESTINATION</h6>
          <a className="link link-hover hover:text-orange-600">Branding</a>
          <a className="link link-hover hover:text-orange-600">Design</a>
          <a className="link link-hover hover:text-orange-600">Marketing</a>
          <a className="link link-hover hover:text-orange-600">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title mb-5 hidden"></h6>
          <a className="link link-hover mt-9 hover:text-orange-600">About us</a>
          <a className="link link-hover hover:text-orange-600">Contact</a>
          <a className="link link-hover hover:text-orange-600">Jobs</a>
          <a className="link link-hover hover:text-orange-600">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">COMPANY</h6>
          <a className="link link-hover hover:text-orange-600">Terms of use</a>
          <a className="link link-hover hover:text-orange-600">Privacy policy</a>
          <a className="link link-hover hover:text-orange-600">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">COMMUNITY</h6>
          <a className="link link-hover hover:text-orange-600">Terms of use</a>
          <a className="link link-hover hover:text-orange-600">Privacy policy</a>
          <a className="link link-hover hover:text-orange-600">Cookie policy</a>
        </nav>
        <nav className="flex items-end justify-end foot">
          <div className=" text-right ">
            <Image
              src={logo}
              width={200}
              height={200}
              alt="Picture of the author"
            />
            <h2 className="text-md my-1 text-right">2972 Westheimer Rd. Santa <br />
              Ana, Illinois 85486</h2>
            <p className="text-lg text-orange-500 my-2">+(40) 800 0246 888</p>
            <p>contact@example.com</p>
          </div>
          <br />
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, recusandae?</p> */}
        </nav>

      </footer>

      <div>
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
          <aside className="items-center grid-flow-col">
            <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
            <p>© 2022 - <span className="text-orange-400">Zourney</span> All right reserved</p>
          </aside>
          <nav className="flex gap-4">
            <a href="#">Terms & Condition</a>
            <a href="#">Cookies</a>
            <a href="#">Privacy Policy</a>

          </nav>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end relative">
            <div className="border border-yellow-600 rounded-full p-1 hover:text-orange-400">
              <FaFacebook className="text-3xl" />
            </div>
            <div className="hover:border hover:border-yellow-600 rounded-full p-1 hover:text-orange-400">
              <FaTwitter className="text-3xl" />
            </div>
            <div className="border border-yellow-600 rounded-full  p-1 hover:text-orange-400">
              <FaYoutube className="text-3xl" />
            </div>
            <div className="border border-yellow-600 rounded-full   p-1 hover:text-orange-400">
              <FaInstagram className="text-3xl" />
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
