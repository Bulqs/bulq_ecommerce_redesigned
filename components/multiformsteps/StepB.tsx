const StepB = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div className="pb-10">
      <div className="lg:max-w-[732px] md:max-w-[744px] max-w-[375px] mx-auto bg-white">
        <div className="px-0 py-0">

          <div className="lg:max-w-[732px] md:max-w-[744px] max-w-[375px] mx-auto bg-white pb-10">
            <div>
              {/* Profile Heading Title */}
              <div className="flex gap-3 pl-5">
                <p className="text-lg font-medium text-gray-800 pb-5">
                  VERIFICATION <br /> <span className="font-normal"> Input Correct Email and Phone Number </span>
                </p>
              </div>
              <hr />


              {/* PERSONAL INFORMATION SETTINGS */}
              <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-4 md:px-6 px-4 mt-3 w-full">
                <div className=" w-full">

                  <div className="lg:flex md:flex block gap-8 lg:mt-10 md:mt-6 mt-4">
                    <div className="w-full">
                      <p className="text-base text-gray-800">Email Address</p>
                      <div className="flex justify-between border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4 border cursor-pointer">
                        <input type='email'
                          name='email'
                          value={formData.email}
                          id="email"
                          onChange={(e) => handleChangeInput(e)} placeholder="Enter Email Address"
                          className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none w-full" />
                      </div>
                    </div>

                    <div className="lg:mt-0 md:mt-0 mt-4 w-full">
                      <p className="text-base text-gray-800">Phone No:</p>
                      <input type='text'
                        name='phone'
                        value={formData.phone}
                        id="phone"
                        onChange={(e) => handleChangeInput(e)} placeholder="Phone Number"
                        className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4" />
                    </div>
                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>



        <div className='my-2 flex justify-between px-5 '>
          <button
            className='bg-appNav text-white px-4 font-bold py-2 rounded-sm'
            onClick={handlePrevStep}
          >
            Previous Step
          </button>
          <button
            className='bg-appNav text-white px-4 font-bold py-2 rounded-sm'
            onClick={handleNextStep}
          >
            Next Step
          </button>
        </div>

      </div>
    </div >
  );
};

export default StepB;