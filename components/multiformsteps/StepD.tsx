
import Imageuploads from "./Imageuploads";

const StepD = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleSubmitFormData,
}) => {
  return (
    <div className="pb-10">
      {/* <DataConfirmRow label='First Name:' value={formData.firstName} />
      <DataConfirmRow label='Last Name:' value={formData.lastName} />
      <DataConfirmRow label='Country' value={formData.country} />
      <DataConfirmRow label='State:' value={formData.state} />
      <DataConfirmRow
        label='Business Website:'
        value={formData.city}
        value={formData.city}
      />
      <DataConfirmRow label='Zip code:' value={formData.zipcode} />
      <DataConfirmRow
        label='Income Per Month:'
        value={formData.address}
      />
      <DataConfirmRow label='Phone Number:' value={formData.phone} />
      <DataConfirmRow label='Image:' value={formData.imageUpload} /> */}
      <div className="lg:max-w-[732px] md:max-w-[744px] max-w-[375px] mx-auto bg-white">
        <div className="px-0 py-0">

          <div className="lg:max-w-[732px] md:max-w-[744px] max-w-[375px] mx-auto bg-white pb-10">
            <div>
              {/* Profile Heading Title */}
              <div className="flex gap-3 pl-5">
                <p className="text-lg font-medium text-gray-800 pb-5">
                  VERIFICATION <br /> <span className="font-normal">Code Verification </span>
                </p>
              </div>
              <hr />


              {/* PERSONAL INFORMATION SETTINGS */}
              <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-4 md:px-6 px-4 mt-3 w-full">
                <div className=" w-full">
                  <div className="lg:px-2 md:px-6 px-4 mt-10 grid gap-y-4">
                    <div className="flex gap-3 items-center">
                      <input type="radio" id="male" name="radio" className="w-4 h-4 accent-indigo-700 cursor-pointer" />
                      <p className="text-sm leading-none text-gray-600">Send code via Phone number</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <input type="radio" id="female" name="radio" className="w-4 h-4 accent-indigo-700 cursor-pointer" />
                      <p className="text-sm leading-none text-gray-600">Send code via Email</p>
                    </div>


                    <div className='my-2 flex justify-start px-1 gap-x-4 '>
                      <button
                        className='bg-green-900 text-white px-4 font-bold py-2 rounded-sm'
                      >
                        Send Code
                      </button>

                      <button
                        className='bg-red-900 text-white px-4 font-bold py-2 rounded-sm'
                      >
                        Resend Code
                      </button>
                    </div>
                  </div>


                  <div className="lg:flex md:flex block gap-8 lg:mt-10 md:mt-6 mt-4">
                    <div className="w-full">
                      <p className="text-base text-gray-800">Verification code</p>
                      <div className="flex justify-between lg:min-w-[250px] w-96 bg-white py-3 px-3 mt-4 border-[1px] border-gray-400">
                        <input type='email'
                          name='email'
                          value={formData.email}
                          id="email"
                          onChange={(e) => handleChangeInput(e)} placeholder="Enter Verification code"
                          className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border-gray-300" />

                        <button
                          className='bg-green-900 text-white px-4 font-bold py-2 rounded-sm'
                        >
                          Verify Code
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-8 flex items-center ml-5'>
                <input
                  type='checkbox'
                  name='agreeToTerms'
                  id='agreeToTerms'
                  value={formData.agreeToTerms}
                  onChange={(e) => handleChangeInput(e)}
                  className='w-4 h-4 mr-2 accent-pink-300 focus:accent-pink-500'
                />
                <label htmlFor='agreeToTerms'>I Agree to Terms of Services</label>
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
            className='bg-green-900 text-white px-4 font-bold py-2 rounded-sm'
            onClick={handleSubmitFormData}
          >
            SUBMIT
          </button>
        </div>


      </div>
    </div >
  );
};

export default StepD;


// A Seperate component to show data
const DataConfirmRow = ({ label, value }) => {
  return (
    <div>
      <div className='my-3 border border-dashed border-gray-200 p-1 rounded-lg'>
        <span className='mr-4 text-slate-500'>{label}</span>
        <span className='mr-4 text-slate-900'>{value}</span>
      </div>


    </div >
  );
};