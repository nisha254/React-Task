import React, { useState } from "react";
import img from "./assets/img.png";
import document from "./assets/document.png";
import file from "./assets/file.png";
import edit from "./assets/edit.png";
import Group from "./assets/Group.png";
import Layer from "./assets/Layer.png";
import person from "./assets/person.png";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  const [buyerButton, setBuyerButton] = useState("Buyer");
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center bg-cover bg-no-repeat	 justify-center h-96  bg-bg text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Are You a Supplier?
        </h1>
        <p className="text-lg md:text-2xl text-white mb-6">
          Explore Matching Opportunities.
        </p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-lg">
          <div className="px-4 flex items-center py-2 rounded-md bg-white  w-full md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.8em"
              height="1.6em"
              viewBox="0 0 24 24"
            >
              <path
                fill="orange"
                fill-rule="evenodd"
                d="M4 9.657c0-.818 0-1.226.152-1.594c.152-.367.442-.657 1.02-1.235l.656-.656c.578-.578.868-.868 1.235-1.02S7.84 5 8.657 5h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l.656.656c.579.578.867.868 1.02 1.235c.152.368.152.776.152 1.594V10H4zM15.333 12H20v4c0 1.886 0 2.828-.586 3.414S17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586S4 17.886 4 16v-4h4.666v3.667c0 .765 0 1.147.1 1.352a1 1 0 0 0 1.231.51c.215-.075.486-.345 1.027-.886c.25-.25.375-.376.508-.446a1 1 0 0 1 .935 0c.133.07.259.195.51.446c.54.54.81.811 1.026.887a1 1 0 0 0 1.231-.51c.1-.206.1-.588.1-1.353z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search your required service here"
              className="px-4 py-1 rounded-md focus:outline-none w-full md:w-auto"
            />
          </div>
          <div className="px-4 flex items-center py-2 rounded-md bg-white  w-full md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.8em"
              height="1.6em"
              viewBox="0 0 24 24"
            >
              <path
                fill="Orange"
                d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
              />
            </svg>

            <input
              type="text"
              placeholder="Search your desired location here"
              className="px-4 py-1 rounded-md focus:outline-none w-full md:w-auto"
            />
          </div>
          <button className="px-6 py-2 text-white rounded-lg bg-green">
            Search
          </button>
        </div>
        <p className="text-white mt-4">
          Are you a buyer?
          <a href="#" className="text-blue underline ">
            Click here if you are looking to post a requirement
          </a>
        </p>
      </div>
      
    

      
      <div className=" flex px-10 py-10 justify-between flex-wrap gap-2">
        <div className="lg:w-1/2">
          <p className="font-bold text-2xl p-2">Ready to dive into HABOT?</p>
          <p className="p-2">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>

          <button className="px-6 py-2  text-white rounded-lg bg-green">
            Sign up Today !
            <svg
              className="inline ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1.78em"
              height="1em"
              viewBox="0 0 16 9"
            >
              <path
                fill="white"
                d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
              />
              <path
                fill="white"
                d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
              />
            </svg>
          </button>
        </div>
        <div className=" grid grid-cols-2  gap-4">
          <button className="px-6 py-2 hover:bg-orange hover:text-white hover:border-none border rounded-md border-orange border bg-white ">
            Abu Dhabi
            <svg
              className="inline ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1.78em"
              height="1em"
              viewBox="0 0 16 9"
            >
              <path
                fill="white"
                d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
              />
              <path
                fill="white"
                d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
              />
            </svg>
          
          </button>

          <button className="px-6 py-2 hover:bg-orange hover:text-white hover:border-none border rounded-md border-orange border bg-white ">
            Dubai
            <svg
              className="inline ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1.78em"
              height="1em"
              viewBox="0 0 16 9"
            >
              <path
                fill="white"
                d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
              />
              <path
                fill="white"
                d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
              />
            </svg>
          
          </button>

          <button className="px-6 py-2 hover:bg-orange hover:text-white hover:border-none border rounded-md border-orange border bg-white ">
            Sharjah & Ajman
            <svg
              className="inline ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1.78em"
              height="1em"
              viewBox="0 0 16 9"
            >
              <path
                fill="white"
                d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
              />
              <path
                fill="white"
                d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
              />
            </svg>
          
          </button>

          <button className="px-6 py-2 hover:bg-orange hover:text-white hover:border-none border rounded-md border-orange border bg-white ">
            Fujairah
            <svg
              className="inline ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1.78em"
              height="1em"
              viewBox="0 0 16 9"
            >
              <path
                fill="white"
                d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
              />
              <path
                fill="white"
                d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
              />
            </svg>
          
          </button>

          <button className="px-6 py-2 hover:bg-orange hover:text-white hover:border-none border rounded-md border-orange border bg-white ">
            Fujairah
            <svg
              className="inline ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1.78em"
              height="1em"
              viewBox="0 0 16 9"
            >
              <path
                fill="white"
                d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
              />
              <path
                fill="white"
                d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
              />
            </svg>
          
          </button>
        </div>
      </div>
      

    
      <div className="   p-10">
        <div className="w-full flex flex-wrap gap-10 bg-blue border-2 rounded-lg p-6">
          <div className="relative  rounded-md">
            <img
              src={img}
              alt="Video Thumbnail"
              className="w-full h-54 object-cover"
            />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-red-600 text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-6.408-3.69A1 1 0 007 8.528v7.385a1 1 0 001.344.943l6.408-2.887a1 1 0 00.008-1.719l-.008-.002z"
                  />
                </svg>
              </button>
            </div>
          </div>

        
          <div className="flex text-white mt-4 p-4 w-96">
            <div className="">
              <div className="flex gap-10  justify-between w-96">
                <h3
                  onClick={() => {
                    setBuyerButton("Buyer");
                  }}
                  className={`font-bold text-2xl py-2 w-96  text-center ${
                    buyerButton == "Buyer"
                      ? "text-darkOrange w-96 border-b border-darkOrange border-b-2"
                      : ""
                  }`}
                >
                  Buyer
                </h3>
                <h3
                  onClick={() => {
                    setBuyerButton("Supplier");
                  }}
                  className={`font-bold text-2xl py-2 w-96  text-center ${
                    buyerButton == "Supplier"
                      ? "text-darkOrange w-96 border-b border-darkOrange border-b-2"
                      : ""
                  }`}
                >
                  Supplier
                </h3>
              </div>
{buyerButton=="Buyer"?
              <div className="flex flex-col py-6">
                <div className="flex gap-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="1.6em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p> Post your requirements.</p>
                </div>
                <div className="flex gap-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="1.6em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p>Sit back for suppliers to contact you.</p>
                </div>
              </div>
              :
              <div className="flex flex-col py-6">
              <div className="flex gap-2 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="1.6em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="green"
                    fill-rule="evenodd"
                    d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>               Complete your profile and get verified.
                </p>
              </div>
              <div className="flex gap-2 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="1.6em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="green"
                    fill-rule="evenodd"
                    d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>              Select service tags for relevant opportunities.
                </p>
              </div>
            </div>
}
            </div>
          </div>
        </div>
      </div>
      {/* div 3 section end */}

      {/* div 4 section start */}

      <div className="py-10 bg-acqua flex justify-evenly">
        <p className="font-bold text-2xl">
          Let Suppliers{" "}
          <span className="border-b border-b-2 border-b-darkOrange">
            Find You{" "}
          </span>
        </p>
        <button className="bg-darkOrange text-white px-6 py-2 rounded-md ">
          Get Verified
        </button>
      </div>
      {/* div 4 section end */}

      {/* div 5 section start */}
      <div className="py-12">
        <div className="text-center  mb-8">
          <h2 className="text-2xl font-bold">How it works?</h2>
          <p className="text-gray-600 mt-2 max-w-md mx-auto">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="text-center bg-acqua p-6 rounded-lg ">
            <div className="flex justify-center items-center mb-4">
              <img src={person} alt="Icon" className="h-12 w-12" />
            </div>
            <p className="font-semibold">Select Your Role and Sign Up</p>
          </div>

          {/* Step 2 */}
          <div className="text-center bg-white p-6 rounded-lg">
            <div className="flex justify-center items-center mb-4">
              <img src={document} alt="Icon" className="h-12 w-12" />
            </div>
            <p className="font-semibold">Buyers Post Your Requirements</p>
          </div>

          {/* Step 3 */}
          <div className="text-center bg-acqua p-6 rounded-lg ">
            <div className="flex justify-center items-center mb-4">
              <img src={Layer} alt="Icon" className="h-12 w-12" />
            </div>
            <p className="font-semibold">
              Review, Select and Contact the Best Suppliers
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center bg-white p-6 rounded-lg">
            <div className="flex justify-center items-center mb-4">
              <img src={edit} alt="Icon" className="h-12 w-12" />
            </div>
            <p className="font-semibold">
              Suppliers Complete Your Profile and Get Notified for Opportunities
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center bg-acqua p-6 rounded-lg ">
            <div className="flex justify-center items-center mb-4">
              <img src={file} alt="Icon" className="h-12 w-12" />
            </div>
            <p className="font-semibold">
              Contact to Buyers and Share Your Quote for the Service
            </p>
          </div>

          {/* Step 6 */}
          <div className="text-center bg-white p-6 rounded-lg">
            <div className="flex justify-center items-center mb-4">
              <img src={Group} alt="Icon" className="h-12 w-12" />
            </div>
            <p className="font-semibold">
              Both Parties Can Connect and Make Business, Leave a Feedback
            </p>
          </div>
        </div>
      </div>
      {/* div 5 section end */}

      <Footer/>
    </>
  );
}

export default Home;
