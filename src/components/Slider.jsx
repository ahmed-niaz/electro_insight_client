import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import slider_1 from '../assets/slider/slider-1.jpg'
import slider_2 from '../assets/slider/slider-2.jpg'
import slider_3 from '../assets/slider/slider-3.jpg'
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <main className="container mx-auto mt-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${slider_1})` }}
            className="h-[400px] lg:h-[600px] bg-cover rounded-xl w-full"
          >
            <div className=" text-white flex flex-col  justify-center h-[400px] lg:h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
              <div>
                <h1 className="font-extrabold text-4xl text-center lg:text-start lg:text-7xl w-11/12 lg:w-1/3  mb-8 m-0 lg:ml-16">
                Personalized Auto Picks Inside
                </h1>
                <div className="flex gap-6  m-0 lg:ml-16 justify-center lg:justify-start">
                  <Link to='/suggest-more' className="btn glass bg-[#0000] text-white">
                    Suggest More
                  </Link>
                  <Link to='/queries' className="btn hover:glass btn-outline font-bold hover:bg-[#0000] bg-none border-[#0000] text-white ">
                   Queries
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${slider_2})` }}
            className="h-[400px] lg:h-[600px] bg-cover rounded-xl w-full"
          >
            <div className=" text-white flex flex-col  justify-center h-[400px] lg:h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
              <div>
                <h1 className="font-extrabold text-4xl text-center lg:text-start lg:text-7xl w-11/12 lg:w-1/3 mb-8 m-0 lg:ml-16">
                Effortless Auto Enhancements Await
                </h1>
                <div className="flex gap-6  m-0 lg:ml-16 justify-center lg:justify-start">
                  <Link to='/suggest-more' className="btn glass bg-[#0000] text-white">
                    Suggest More
                  </Link>
                  <Link to='/queries' className="btn hover:glass btn-outline font-bold hover:bg-[#0000] bg-none border-[#0000] text-white ">
                   Queries
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${slider_3})` }}
            className="h-[400px] lg:h-[600px] bg-cover rounded-xl w-full"
          >
            <div className=" text-white flex flex-col  justify-center h-[400px] lg:h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
              <div>
                <h1 className="font-extrabold text-4xl text-center lg:text-start lg:text-7xl w-11/12 lg:w-1/3 mb-8 m-0 lg:ml-16">
                Navigate Your Options, Find Your Perfect Fit
                </h1>
                <div className="flex gap-6  m-0 lg:ml-16 justify-center lg:justify-start">
                  <Link to='/suggest-more' className="btn glass bg-[#0000] text-white">
                    Suggest More
                  </Link>
                  <Link to='/queries' className="btn hover:glass btn-outline font-bold hover:bg-[#0000] bg-none border-[#0000] text-white ">
                   Queries
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        
      </Swiper>
    </main>
  );
};

export default Slider;