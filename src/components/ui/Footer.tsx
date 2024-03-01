import logo from "@/assets/footer-logo.svg"
import Image from "next/image";
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
    </>
  );
};

export default Footer;
