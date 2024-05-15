import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

import person1 from '../assets/profile/per1.jpg'
import person2 from '../assets/profile/per2.jpg'
import person3 from '../assets/profile/per3.jpg'
import person4 from '../assets/profile/per4.jpg'
import person5 from '../assets/profile/per5.jpg'

const Reviews = () => {
  return (
   <main className="container mx-auto">
      <h2 className="text-white font-bold text-4xl text-center pt-4">Customer Experience</h2>
      
     <Marquee pauseOnHover speed={200}>
      <div className="rounded-lg bg-white shadow-xl p-8  w-[400px] mx-8 my-20">
        <div className="flex gap-8 items-center">
          <div>
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={person1} />
              </div>
            </div>
          </div>
          <div className="font-bold">
            <p className="text-2xl">Pitt</p>
            <p className="text-sm"> Product Recommender</p>
          </div>
        </div>
        <p className="font-bold text-sm text-gray-500">
        AutoSelectPro is an invaluable tool for any automotive enthusiast. From performance upgrades to maintenance essentials, their recommendations are spot-on. Saved me time and money by suggesting the perfect products every time!
        </p>

        <div className="flex gap-4 justify-end">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStarHalfStroke />
          </span>
        </div>
      </div>
      
      <div className="rounded-lg bg-white shadow-xl p-8 mx-8 w-[400px]">
        <div className="flex gap-8 items-center">
          <div>
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={person2} />
              </div>
            </div>
          </div>
          <div className="font-bold">
            <p className="text-2xl">Johnson</p>
            <p className="text-sm">Automotive journalist</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-sm text-gray-500">
          As a car expert, I rely on this recommendation system for the latest aftermarket parts and accessories. It's my go-to resource for finding the perfect upgrades for my test vehicles.
          </p>
        </div>

        <div className="flex gap-4 justify-end">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStarHalfStroke />
          </span>
          <span>
            <FaStarHalfStroke />
          </span>
        </div>
      </div>

      <div className="rounded-lg bg-white shadow-xl p-8 mx-8 w-[400px]">
        <div className="flex gap-8 items-center">
          <div>
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={person3} />
              </div>
            </div>
          </div>
          <div className="font-bold">
            <p className="text-2xl">Rose Keny</p>
            <p className="text-sm">Car enthusiast</p>
          </div>
        </div>
        <p className="font-bold text-sm text-gray-500">
        This platform has helped me discover top-notch performance parts and tools for tuning my car. The recommendations are spot-on, and the user-friendly interface makes browsing a breeze
        </p>

        <div className="flex gap-4 justify-end">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStarHalfStroke />
          </span>
          <span>
            <FaStarHalfStroke />
          </span>
        </div>
      </div>
      <div className="rounded-lg bg-white shadow-xl p-8 mx-8 w-[400px]">
        <div className="flex gap-8 items-center">
          <div>
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={person4} />
              </div>
            </div>
          </div>
          <div className="font-bold">
            <p className="text-2xl">J.F. primo</p>
            <p className="text-sm">Automotive engineer</p>
          </div>
        </div>
        <p className="font-bold text-sm text-gray-500">
        As someone deeply involved in vehicle design, I appreciate the precision and quality of the recommendations provided by this platform. It's an invaluable resource for sourcing reliable aftermarket components
        </p>

        <div className="flex gap-4 justify-end">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStarHalfStroke />
          </span>
          <span>
            <FaStarHalfStroke />
          </span>
        </div>
      </div>
      <div className="rounded-lg bg-white shadow-xl p-8 mx-8 w-[400px]">
        <div className="flex gap-8 items-center">
          <div>
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={person5} />
              </div>
            </div>
          </div>
          <div className="font-bold">
            <p className="text-2xl">Ryan Clark</p>
            <p className="text-sm">Performance tuner</p>
          </div>
        </div>
        <p className="font-bold text-sm text-gray-500">
        Finding the right parts for tuning cars can be challenging, but this recommendation system simplifies the process. Whether it's turbochargers, exhaust systems, or ECU tuners, I always find what I need here
        </p>

        <div className="flex gap-4 justify-end">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStarHalfStroke />
          </span>
          <span>
            <FaStarHalfStroke />
          </span>
        </div>
      </div>
    </Marquee>
   </main>
  );
};

export default Reviews;
