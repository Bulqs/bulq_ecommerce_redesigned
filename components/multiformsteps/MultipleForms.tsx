'use client';
import React, { useEffect, useState } from 'react';
import StepA from './StepA';
import StepB from './StepB';
import StepC from './StepC';
import StepD from './StepD';
import StepFinal from './StepFinal';

// This is the parent component.
// This component will control and manage steps and data

// Step A: Customer Identity Info
// Step B: Customer Business Info
// Step C: Customer Financial Info
// Step D: Confirm Form  Data

// Step Final: Succes Result

const initialFormData = {
  firstName: '',
  lastName: '',
  businessName: '',
  businessCity: '',
  businessWebsite: '',
  businessEmail: '',
  incomePerMonth: 0,
  taxPercantage: 0,
  agreeToTerms: false,
};

const stepsArray = ['profilesetup', 'verification', 'imageupload', 'verificationcode'];

const MultipleForms = ({ showStepNumber }) => {
  const [step, setStep] = useState('profilesetup');
  const [formData, setFormData] = useState(initialFormData);

  // We need a method to go to next step
  const handleNextStep = () => {
    if (step === 'profilesetup') setStep('verification');
    else if (step === 'verification') setStep('imageupload');
    else if (step === 'imageupload') setStep('verificationcode');
  };

  // We need a method to go to prev step
  const handlePrevStep = () => {
    if (step === 'verificationcode') setStep('imageupload');
    else if (step === 'imageupload') setStep('verification');
    else if (step === 'verification') setStep('profilesetup');
  };

  // We need a method to update our formData
  const handleChangeInput = (event) => {
    const fieldName = event.target.name;
    let fieldValue;
    if (fieldName === 'agreeToTerms') {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  // We need a method to do final operation
  const handleSubmitFormData = () => {
    // Here You can do final Validation and then Submit Your form
    if (!formData.agreeToTerms) {
      alert('Error!!!!!!   You must agree to Terms of Services!!!!');
    } else {
      setStep('Final');
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Section for render StepNumbers
  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === 'Final') {
      return null;
    }
    return (
      <section className='mt-2 mb-4 flex justify-between bg-yellow-600'>
        {stepsArray.map((item) => (
          <div
            key={item}
            className={`px-4 py-2 flex justify-center items-center cursor-pointer ${item === step ? 'bg-appTitleBgColor text-white' : ''
              }`}
            onClick={() => setStep(item)}
          >
            {item}
          </div>
        ))}
      </section>
    );
  };

  return (
    <div className=' w-[740px] max-w-full px-6 py-1 mx-auto rounded-lg border-2 bg-white  border-sky-300 '>
      {renderTopStepNumbers()}

      {/* // Render Steps */}
      {step === 'profilesetup' ? (
        <StepA
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'verification' ? (
        <StepB
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'imageupload' ? (
        <StepC
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'verificationcode' ? (
        <StepD
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleSubmitFormData={handleSubmitFormData}
        />
      ) : null}
      {step === 'Final' ? <StepFinal /> : null}
    </div>
  );
};

export default MultipleForms
