import images from "@/public/images";
import Image from "next/image";
import React from "react";

interface Step {
  id: number;
  name: string;
}

interface StepperProps {
  stepsConfig: Step[]; // An array of Step objects
  currentStep: number;
  isComplete: boolean;
}

const Stepper: React.FC<StepperProps> = ({
  stepsConfig,
  currentStep,
  isComplete,
}) => {
  return (
    <>
      <div className="stepper-wrapper">
        <ul className="stepper">
          {stepsConfig.map((row, index) => (
            <li
              key={index}
              className={`${currentStep == index ? "active" : ""} ${
                currentStep > index || isComplete ? "done" : ""
              }`}
            >
              {currentStep > index || isComplete ? (
                <em className="i">
                  <Image src={images.IcCheck} alt="checksign" />
                </em>
              ) : (
                <em className="i">{row.id}</em>
              )}
              {row.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Stepper;
