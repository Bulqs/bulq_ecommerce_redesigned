import Link from "next/link";

const StepFinal = () => {
  return (
    <div>
      <h1 className='mt-2 text-xl font-bold text-appNav'>
        Data Submited Successfully
      </h1>
      <div className='my-4 gap-y-6'>

        <h5 className="text-black">Dear Campbell your ID is <span className="text-appNav"> CAMPBELL2292</span> </h5>

        <Link href="/" className="flex gap-x-2 justify-startr mt-4 items-baseline" >
          <span className="font-extrabold">Click here </span>
          <h5 className="text-appNav">Go To Profile</h5>
        </Link>
      </div>
      <div className='my-2 flex justify-between px-0 '>
        <Link href="/"
          className='bg-appNav text-white px-4 font-bold py-2 rounded-md'
        >
          START SHOPPING
        </Link>
      </div>
    </div>
  );
};

export default StepFinal;