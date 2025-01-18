const StepA = ({ formData, handleChangeInput, handleNextStep }) => {
  return (
    <div className="w-full pb-10">
      <div className="lg:max-w-[732px] md:max-w-[744px] max-w-[375px] mx-auto bg-gray-100 ">
        <div className="px-0 pb-0">

          <div className="lg:max-w-[732px] md:max-w-[744px] max-w-[375px] mx-auto bg-white pb-10">
            <div>
              {/* Profile Heading Title */}
              <div className="flex gap-3 pl-5">
                <p className="text-lg font-medium text-gray-800 pb-5">
                  PROFILE SETUP <br /> <span className="font-normal"> Input your correct details </span>
                </p>
              </div>
              <hr />

              {/* STEPs SECTION COMMENTED OUT */}
              {/* <div className="lg:px-24 md:px-6 px-4 md:block hidden">
                Step Page Title Icon 
                 <div className="flex items-center justify-center mt-14">
                  <div>
                    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 3C8.83187 3 3 8.83187 3 16C3 23.1681 8.83187 29 16 29C23.1681 29 29 23.1681 29 16C29 8.83187 23.1681 3 16 3ZM22.7656 11.6431L14.3656 21.6431C14.2735 21.7529 14.1588 21.8415 14.0294 21.9031C13.9 21.9647 13.7589 21.9977 13.6156 22H13.5988C13.4586 21.9999 13.32 21.9704 13.192 21.9134C13.064 21.8563 12.9494 21.773 12.8556 21.6688L9.25562 17.6688C9.1642 17.5718 9.09308 17.4575 9.04644 17.3327C8.99981 17.2078 8.9786 17.0749 8.98407 16.9417C8.98953 16.8086 9.02156 16.6778 9.07827 16.5572C9.13498 16.4366 9.21523 16.3286 9.31429 16.2394C9.41336 16.1503 9.52925 16.0818 9.65515 16.0381C9.78105 15.9944 9.91442 15.9763 10.0474 15.9848C10.1804 15.9934 10.3104 16.0284 10.4296 16.0879C10.5489 16.1474 10.655 16.2301 10.7419 16.3312L13.5725 19.4762L21.2344 10.3569C21.4062 10.1582 21.6494 10.0351 21.9113 10.0142C22.1732 9.99335 22.4327 10.0764 22.6339 10.2454C22.8351 10.4143 22.9617 10.6557 22.9863 10.9172C23.0109 11.1788 22.9317 11.4395 22.7656 11.6431V11.6431Z"
                        fill="#4338CA" />
                    </svg>
                  </div>
                  <div className="max-w-[196px] w-full h-0.5 bg-indigo-50" />
                  <div>
                    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={16} cy={16} r={5} fill="#4338CA" />
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
                        fill="#4338CA" />
                    </svg>
                  </div>
                  <div className="max-w-[196px] w-full h-0.5 bg-indigo-50" />
                  <div>
                    <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M13 2C6.92487 2 2 6.92487 2 13C2 19.0751 6.92487 24 13 24C19.0751 24 24 19.0751 24 13C24 6.92487 19.0751 2 13 2ZM0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13Z"
                        fill="#E5E7EB" />
                    </svg>
                  </div>
                  <div className="max-w-[196px] w-full h-0.5 bg-indigo-50" />
                  <div>
                    <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M13 2C6.92487 2 2 6.92487 2 13C2 19.0751 6.92487 24 13 24C19.0751 24 24 19.0751 24 13C24 6.92487 19.0751 2 13 2ZM0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13Z"
                        fill="#E5E7EB" />
                    </svg>
                  </div>
                </div> 

               Step Page Title 
                <div className="flex items-center justify-center gap-36 md:px-10">
                  <p className="w-20 text-sm text-center text-gray-600">
                    Registration
                  </p>
                  <p className="w-20 text-sm text-center text-gray-600">
                    Personal Information
                  </p>
                  <p className="w-20 text-sm text-center text-gray-600">
                    Job Information
                  </p>
                  <p className="w-20 text-sm text-center text-gray-600">
                    Education Information
                  </p>
                </div> 
              </div> */}


              {/* <div className="mt-8 px-6 md:hidden block">
                <div className="dropdown-one w-full rounded outline-none bg-gray-100 border border-gray-200 relative mt-2">
                  <button onClick={(event) => {
                    event.stopPropagation();
                    showDropDownMenu_from_layout_wizard8(event.target);
                  }}
                    className="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full"
                  >
                    <span className="pr-4 text-gray-600 text-sm font-bold"
                      id="drop-down-content-setter_from_layout_wizard8">
                      Personal Information
                    </span>
                    <svg width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.06216 1.9393L5.43028 7.0368C5.50069 7.11892 5.58803 7.18484 5.68631 7.23003C5.78459 7.27522 5.89148 7.29862 5.99966 7.29862C6.10783 7.29862 6.21472 7.27522 6.313 7.23003C6.41128 7.18484 6.49862 7.11892 6.56903 7.0368L10.9372 1.9393C11.354 1.45273 11.0084 0.701172 10.3678 0.701172H1.63028C0.989656 0.701172 0.644031 1.45273 1.06216 1.9393Z"
                        fill="#1F2937" />
                    </svg>
                  </button>
                  <div className="hidden rounded w-full px-3 py-2 absolute top-16 right-0 bg-white shadow-lg"
                    id="drop-down-div_from_layout_wizard8">
                    <div onClick={(event) => {
                      event.stopPropagation();
                      text(event.target);
                    }}
                      className="hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold
                  hover:cursor-default"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Account Settings</p>
                      </a>
                    </div>
                    <div onClick={(event) => {
                      event.stopPropagation();
                      text(event.target);
                    }}
                      className="hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">
                          Business Information
                        </p>
                      </a>
                    </div>
                    <div onClick={(event) => {
                      event.stopPropagation();
                      text(event.target);
                    }}
                      className="hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Billing Details</p>
                      </a>
                    </div>
                    <div onClick={(event) => {
                      event.stopPropagation();
                      text(event.target);
                    }}
                      className="hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Finished</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* */}

            {/* PERSONAL INFORMATION SETTINGS */}
            <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-4 md:px-6 px-4 mt-3 w-full">
              <div className="w-full">
                <div className="lg:flex md:flex block gap-8 lg:mt-2 md:mt-2 mt-2">
                  <div className="w-full">
                    <p className="text-base text-gray-800">First Name</p>
                    <div
                      className="flex justify-between border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4 border cursor-pointer">
                      <input type='text'
                        name='firstName'
                        value={formData.firstName}
                        id="firstName"
                        onChange={(e) => handleChangeInput(e)} placeholder="Enter First Name"
                        className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none w-full " />
                    </div>
                  </div>

                  <div className="lg:mt-0 md:mt-0 mt-4 w-full">
                    <p className="text-base text-gray-800">Last Name</p>
                    <input type='text'
                      name='lastName'
                      value={formData.lastName}
                      id="lastName"
                      onChange={(e) => handleChangeInput(e)} placeholder="Enter Last Name"
                      className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4" />
                  </div>

                </div>

                {/* COUNTRY AND STATE SECTION */}
                <div className="lg:flex md:flex block gap-8 lg:mt-10 md:mt-6 mt-4">
                  <div className="w-full">
                    <p className="text-base text-gray-800">Country</p>
                    <div
                      className="flex justify-between border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4 border cursor-pointer">
                      <input type='text'
                        name='country'
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleChangeInput(e)} placeholder="Select Country"
                        className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none w-full cursor-pointer" />
                    </div>
                  </div>
                  <div className="lg:mt-0 md:mt-0 mt-4 w-full">
                    <p className="text-base text-gray-800">State</p>
                    <input type='text'
                      name='state'
                      value={formData.state}
                      id="state"
                      onChange={(e) => handleChangeInput(e)} placeholder="Enter State"
                      className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4" />
                  </div>
                </div>

                {/* CITY AND ZIP CODE */}
                <div className="lg:flex md:flex block gap-8 md:mt-4 mt-6">
                  <div className="w-full">
                    <p className="text-base text-gray-800">City</p>
                    <input type='text'
                      name='city'
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleChangeInput(e)} placeholder="Enter City"
                      className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4" />
                  </div>
                  <div className="lg:mt-0 md:mt-0 mt-4 w-full">
                    <p className="text-base text-gray-800">Zip code</p>
                    <input type='text'
                      name='zipcode'
                      id="zipcode"
                      value={formData.zipcode}
                      onChange={(e) => handleChangeInput(e)} placeholder="Enter zip code"
                      className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4" />
                  </div>
                </div>

                {/* ADDRESS SECTION */}
                <div className="lg:flex md:flex block gap-8 md:mt-4 mt-6">
                  <div className="lg:mt-0 md:mt-0 mt-4 w-full">
                    <p className="text-base text-gray-800">Home Address </p>
                    <input type='text'
                      name='address'
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleChangeInput(e)} placeholder="Enter zip code"
                      className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4" />
                  </div>
                </div>
              </div>

              {/* IMAGE UPLOAD SECTION */}

            </div>

            {/* GENDER SECTION */}
            <div className="lg:px-14 md:px-6 px-4 mt-10">
              <p className="text-base leading-none text-gray-800">Gender</p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex gap-3 items-center">
                  <input type="radio" id="male" name="radio" className="w-4 h-4 accent-indigo-700 cursor-pointer" />
                  <p className="text-sm leading-none text-gray-600">Male</p>
                </div>
                <div className="flex gap-3 items-center">
                  <input type="radio" id="female" name="radio" className="w-4 h-4 accent-indigo-700 cursor-pointer" />
                  <p className="text-sm leading-none text-gray-600">Female</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='my-2 flex justify-end items-center px-4'>
        <button
          className='bg-appNav text-white px-4 font-bold py-2 rounded-sm'
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </div>
    </div >
  );
};

export default StepA;