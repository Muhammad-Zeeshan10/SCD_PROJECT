import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)"
        }}
      />
 
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-2xl">
          <span className="block mb-4 text-yellow-500 text-lg font-medium">
            New Collection
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Best Collection for 
            <span className="block">Home Decoration</span>
          </h1>
 
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Transform your living space with our curated collection of premium home decor. 
            Discover unique pieces that blend style, comfort and elegance to create your perfect sanctuary.
          </p>
 
          <Link 
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-lg transition-colors duration-200"
          >
            Shop Collection
          </Link>
        </div>
      </div>
    </div>
  );
 };
 
 export default Hero;
