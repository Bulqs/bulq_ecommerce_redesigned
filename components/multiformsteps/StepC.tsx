import Imageuploads from "./Imageuploads";

const StepC = ({
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
                  IMAGE UPLOAD <br /> <span className="font-normal"> Upload any form of identification </span>
                </p>
              </div>
              <hr />

              <Imageuploads />
              <p className="text-xs leading-5 font-bold text-gray-600 ml-5">PNG, JPG, JPEG up to 2MB</p>
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

export default StepC;