"use client";
import Slider from "react-slick";
import { Fade, Slide } from "react-awesome-reveal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import Rating from "../ui/Rating";
import Link from "next/link";
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`w-14 h-14 sheardButtonIcons about-custom-tarvel absolute left-[80px] top-[41%]  shadow-sm  rounded-full z-[1] hover:bg-white  `}
    >
      <IoIosArrowBack className="text-xl ml-[18px] text-[#e46d30]" />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`w-14 h-14 sheardButtonIcons about-custom-tarvel absolute right-24 top-[40%] hover:bg-white shadow-sm  rounded-full `}
    >
      <IoIosArrowForward className="text-xl ml-[18px] text-[#e46d30] " />
    </button>
  );
};

const HomeHeaderSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Autoplay interval in milliseconds (e.g., 2000ms = 2 seconds)
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <Slider {...settings}>
            <div className="w-100 header-section-home overflow-hidden ">
              <div
                className="w-full h-72 sm:h-[540px] md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/30 before:inset-0 transform home-header-section-img"
                style={{
                  backgroundImage: `url(https://i.ibb.co/wN7BPnt/revslider-1.jpg)`,
                }}
              >
                {/* text container here */}

                <div className="drop-shadow-lg text-white text-center px-5">
                  <Fade
                    delay={1000}
                    cascade
                    damping={0.1}
                    className="home-header-details"
                  >
                    amagingTour
                  </Fade>

                  <Slide direction="up" delay={100} damping={0.01}>
                    <h2 className="text-xl lg:text-7xl font-semibold mb-3  ">
                      Maldives
                    </h2>
                  </Slide>
                  <div className="flex items-center justify-center mt-3">
                    <Slide
                      direction="down"
                      delay={500}
                      damping={0.1}
                      className="mr-3"
                    >
                      <p className="text-sm">689 | Reviews </p>
                    </Slide>
                    <Slide direction="down" delay={500} damping={0.1}>
                      <Rating rating={4} />
                    </Slide>
                  </div>
                  <Slide direction="up" delay={1000} duration={1000}>
                    <Link href={"/link"}>
                      <button className="mt-8 text-sm w-56 h-14 before:absolute border-[1px] border-slate-50 before:block before:inset-0 before:-z-10 before:bg-none text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-orange-400 after:absolute relative  inline-block hover:border-none ">
                        Take Me There{" "}
                      </button>
                    </Link>
                  </Slide>
                </div>
              </div>
            </div>
            <div className="w-100 header-section-home overflow-hidden ">
              <div
                className="w-full h-72 sm:h-[540px] md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/30 before:inset-0 transform home-header-section-img"
                style={{
                  backgroundImage: `url(https://i.ibb.co/Z1Kvsxy/revslider-2.jpg)`,
                }}
              >
                {/* text container here */}

                <div className="drop-shadow-lg text-white text-center px-5">
                  <Fade
                    delay={1000}
                    cascade
                    damping={0.1}
                    className="home-header-details"
                  >
                    amagingTour
                  </Fade>

                  <Slide direction="up" delay={100} damping={0.01}>
                    <h2 className="text-xl lg:text-7xl font-semibold mb-3  ">
                      Venice
                    </h2>
                  </Slide>
                  <div className="flex items-center justify-center mt-3">
                    <Slide
                      direction="down"
                      delay={500}
                      damping={0.1}
                      className="mr-3"
                    >
                      <p className="text-sm">649 | Reviews </p>
                    </Slide>
                    <Slide direction="down" delay={500} damping={0.1}>
                      <Rating rating={5} />
                    </Slide>
                  </div>
                  <Slide direction="up" delay={1000} duration={1000}>
                    <Link href={"/link"}>
                      <button className="mt-8 text-sm w-56 h-14 before:absolute border-[1px] border-slate-50 before:block before:inset-0 before:-z-10 before:bg-none text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-orange-400 after:absolute relative  inline-block hover:border-none ">
                        Take Me There{" "}
                      </button>
                    </Link>
                  </Slide>
                </div>
              </div>
            </div>
            <div className="w-100 header-section-home overflow-hidden ">
              <div
                className="w-full h-72 sm:h-[540px] md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/30 before:inset-0 transform home-header-section-img"
                style={{
                  backgroundImage: `url(https://i.ibb.co/MRSn958/revslider-3.jpg)`,
                }}
              >
                {/* text container here */}

                <div className="drop-shadow-lg text-white text-center px-5">
                  <Fade
                    delay={1000}
                    cascade
                    damping={0.1}
                    className="home-header-details"
                  >
                    amagingTour
                  </Fade>

                  <Slide direction="up" delay={100} damping={0.01}>
                    <h2 className="text-xl lg:text-7xl font-semibold mb-3  ">
                      Santorini
                    </h2>
                  </Slide>
                  <div className="flex items-center justify-center mt-3">
                    <Slide
                      direction="down"
                      delay={500}
                      damping={0.1}
                      className="mr-3"
                    >
                      <p className="text-sm">789 | Reviews </p>
                    </Slide>
                    <Slide direction="down" delay={500} damping={0.1}>
                      <Rating rating={4} />
                    </Slide>
                  </div>
                  <Slide direction="up" delay={1000} duration={1000}>
                    <Link href={"/link"}>
                      <button className="mt-8 text-sm w-56 h-14 before:absolute border-[1px] border-slate-50 before:block before:inset-0 before:-z-10 before:bg-none text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-orange-400 after:absolute relative  inline-block hover:border-none ">
                        Take Me There{" "}
                      </button>
                    </Link>
                  </Slide>
                </div>
              </div>
            </div>
            <div className="w-100 header-section-home overflow-hidden ">
              <div
                className="w-full h-72 sm:h-[540px] md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/30 before:inset-0 transform home-header-section-img"
                style={{
                  backgroundImage: `url(https://i.ibb.co/k0YHzt8/revslider-4.jpg)`,
                }}
              >
                {/* text container here */}

                <div className="drop-shadow-lg text-white text-center px-5">
                  <Fade
                    delay={1000}
                    cascade
                    damping={0.1}
                    className="home-header-details"
                  >
                    amagingTour
                  </Fade>

                  <Slide direction="up" delay={100} damping={0.01}>
                    <h2 className="text-xl lg:text-7xl font-semibold mb-3  ">
                      Caribbean
                    </h2>
                  </Slide>
                  <div className="flex items-center justify-center mt-3">
                    <Slide
                      direction="down"
                      delay={500}
                      damping={0.1}
                      className="mr-3"
                    >
                      <p className="text-sm">679 | Reviews </p>
                    </Slide>
                    <Slide direction="down" delay={500} damping={0.1}>
                      <Rating rating={4} />
                    </Slide>
                  </div>
                  <Slide direction="up" delay={1000} duration={1000}>
                    <Link href={"/link"}>
                      <button className="mt-8 text-sm w-56 h-14 before:absolute border-[1px] border-slate-50 before:block before:inset-0 before:-z-10 before:bg-none text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-orange-400 after:absolute relative  inline-block hover:border-none ">
                        Take Me There{" "}
                      </button>
                    </Link>
                  </Slide>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderSection;
