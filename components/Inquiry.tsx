import images from "@/public/images";
import Image from "next/image";
import { ROUTES } from "@/shared/routes";
import Link from "next/link";
import Select from "react-select";
import {
  Offcanvas,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Form,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import Stepper from "./Stepper";
import DBX707Green from "@/public/images/home/DBX707-green.png";
import DBX707GreenBack from "@/public/images/explore-model/DBX707-green-back.png";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IEnquiryData } from "@/utils/interface";

interface IInquiryProps {
  equireDrawer: boolean;
  setEquireDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  enquireData?: IEnquiryData;
}
const Inquiry: React.FC<IInquiryProps> = ({
  equireDrawer,
  setEquireDrawer,
  enquireData,
}) => {
  const navigate = useRouter();
  const [offcanavasPlacement, setoffcanavasPlacement] = useState<
    "start" | "end" | "top" | "bottom"
  >("end");
  const stepperData = [
    { id: 1, name: "Nature of enquiry" },
    { id: 2, name: "Contact details" },
    { id: 3, name: "Preferred dealership" },
    { id: 4, name: "Schedule test drive" },
  ];

  const options = [
    { value: "option1", label: "12 Friar Street, Reading, RG1 1DB" },
    { value: "option2", label: "14 Friar Street, Reading, RG1 1DB" },
    { value: "option3", label: "15 Friar Street, Reading, RG1 1DB" },
  ];
  const [showStepper, setShowStepper] = useState(true);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [startDate] = React.useState();
  const goToNextStep = () => {
    setCurrentStep((next) => {
      if (next === stepperData.length) {
        setIsComplete(true);
        return next;
      } else {
        return next + 1;
      }
    });
  };
  const goToPreviousStep = () => {
    setCurrentStep((prev) => {
      if (prev <= 0) {
        return prev;
      } else {
        setIsComplete(false);
        return prev - 1;
      }
    });
  };
  const handleReturnHome = () => {
    navigate.push(ROUTES.Home);
    setTimeout(() => {
      setShowStepper(true);
      setCurrentStep(0);
    }, 500);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1199) {
        setoffcanavasPlacement("bottom");
      } else {
        setoffcanavasPlacement("end");
      }
    };

    handleResize();

    // Add the scroll event listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    // Cleanup the event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <Offcanvas
      scroll={false}
      show={equireDrawer}
      placement={offcanavasPlacement}
      onHide={() => {
        setEquireDrawer(false);
        setTimeout(() => {
          setShowStepper(true);
        }, 500);
      }}
    >
      <Button
        className="btn-icon canvas-close"
        variant="light"
        onClick={() => {
          setEquireDrawer(false);
          setTimeout(() => {
            setShowStepper(true);
          }, 500);
        }}
      >
        <Image src={images.CloseBlack} alt="Close Icon" />
      </Button>
      <Offcanvas.Body className="enquiry-wrapper-drawer">
        {showStepper ? (
          <>
            <div className="stepper-head">
              <h3>Make an Enquiry</h3>
              <span className="selected-enquiry">Sale/purchase enquiry</span>
              <Stepper
                stepsConfig={stepperData}
                currentStep={currentStep}
                isComplete={isComplete}
              />
            </div>
            <div className="stepper-body">
              <div className="enquiry-form">
                {currentStep === 0 ? (
                  <>
                    <h5 className="form-title mb-40p">
                      Tell us about the nature of your enquiry below
                    </h5>

                    <p className="secondary-form-title">Select</p>
                    <ToggleButtonGroup
                      className="toggle-radio"
                      type="radio"
                      name="options"
                    >
                      <ToggleButton
                        className="mirror-card"
                        id="tbg-radio-1"
                        value={1}
                        variant="light"
                      >
                        Sale/purchase
                        <span className="highlighted">Sale/purchase</span>
                      </ToggleButton>
                      <ToggleButton
                        className="mirror-card"
                        id="tbg-radio-2"
                        value={2}
                        variant="light"
                      >
                        Book a test drive
                        <span className="highlighted">Book a test drive</span>
                      </ToggleButton>
                      <ToggleButton
                        className="mirror-card"
                        id="tbg-radio-3"
                        value={3}
                        variant="light"
                      >
                        General
                        <span className="highlighted">General</span>
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </>
                ) : (
                  ""
                )}

                {currentStep === 1 ? (
                  <>
                    <h5 className="form-title mb-40p">
                      Please provide us with your personal details and contact
                      information
                    </h5>
                    <p className="secondary-form-title">Title</p>
                    <Form className="inline-level justify-content-sm-start justify-content-between column-gap-sm-5 row-gap-3 mb-24p">
                      <Form.Check
                        type="radio"
                        label="Mr"
                        name="gender"
                        defaultChecked
                        id="RadioMr"
                      />
                      <Form.Check
                        type="radio"
                        label="Mrs"
                        name="gender"
                        id="RadioMrs"
                      />
                      <Form.Check
                        type="radio"
                        label="Miss"
                        name="gender"
                        id="RadioMiss"
                      />
                      <Form.Check
                        type="radio"
                        label="Ms"
                        name="gender"
                        id="RadioMs"
                      />
                    </Form>
                    <div className="row">
                      <div className="col-sm-6">
                        <Form.Group className="mb-24p">
                          <Form.Label>First name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </div>
                      <div className="col-sm-6">
                        <Form.Group className="mb-24p">
                          <Form.Label>Last name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </div>
                    </div>
                    <Form.Group className="mb-24p">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-24p">
                      <Form.Label>Phone number</Form.Label>
                      <Form.Label className="text-neutral50 d-block">
                        Include the country code (e.g. +44)
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-24p">
                      <Form.Label>Address</Form.Label>
                      <Select
                        className="react-custom-select with-text"
                        classNamePrefix="select"
                        options={options}
                      />
                    </Form.Group>
                    <div className="mb-24p">
                      <Link
                        className="quick-link color-primary align-items-start"
                        href={ROUTES.NewCar}
                      >
                        Enter your address manually
                        <Image src={images.ChevronDownPrimary} alt="More" />
                      </Link>
                    </div>
                    <Form.Group className="mb-24p">
                      <Form.Label>Your enquiry</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <p className="secondary-form-title">
                      How you would like us to contact with you
                    </p>
                    <Form className="inline-level gap-3 mb-24p">
                      <Form.Check
                        type="radio"
                        label="No preference"
                        name="contact"
                        defaultChecked
                        id="RadioNP"
                      />
                      <Form.Check
                        type="radio"
                        label="Email"
                        name="contact"
                        id="RadioEmail"
                      />
                      <Form.Check
                        type="radio"
                        label="Phone"
                        name="contact"
                        id="RadioPhone"
                      />
                    </Form>

                    <Form.Label>
                      Would you like to receive news and updates from Dealer X?
                      If so, please select your contact preferences.
                    </Form.Label>
                    <Form className="inline-level gap-3 mb-24p">
                      <Form.Check
                        type="checkbox"
                        label="Email"
                        defaultChecked
                        id="checkEmail"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Phone"
                        id="checkPhone"
                      />
                      <Form.Check type="checkbox" label="SMS" id="checkSms" />
                    </Form>

                    <p className="body2 text-neutral50">
                      By submitting this form, you are giving consent for a
                      member of the Dealer X team to contact you using the
                      personal information provided for the purposes which are
                      directly related to this enquiry.
                    </p>
                  </>
                ) : (
                  ""
                )}

                {currentStep === 2 ? (
                  <>
                    <h5 className="form-title mb-40p">
                      Let us know your preferred dealership location
                    </h5>
                    <Form.Label>Search by country, city or address</Form.Label>
                    <div className="input-group mb-24p space">
                      <Form.Group className="w-100">
                        <Select
                          className="react-custom-select with-text"
                          classNamePrefix="select"
                          options={options}
                        />
                      </Form.Group>
                      <Button variant="secondary" className="size-lg">
                        Use my location
                        <em className="ic right">
                          <Image src={images.IcLocMark} alt="" />
                        </em>
                      </Button>
                    </div>

                    <Form.Group className="mb-3">
                      <Form.Label>Select dealership</Form.Label>
                      <Select
                        className="react-custom-select"
                        classNamePrefix="select"
                        isSearchable={false}
                        options={options}
                      />
                    </Form.Group>
                  </>
                ) : (
                  ""
                )}

                {currentStep === 3 || currentStep === 4 ? (
                  <>
                    <p className="secondary-form-title am-sans mb-3">
                      Please select a preferred date for a test drive
                    </p>
                    <div className="mb-lg-5 mb-4">
                      <DatePicker
                        inline
                        calendarClassName="inline-datepicker"
                        selected={startDate}
                        renderCustomHeader={({
                          date,
                          decreaseMonth,
                          increaseMonth,
                          prevMonthButtonDisabled,
                          nextMonthButtonDisabled,
                        }) => (
                          <div className="custom-header">
                            <Button
                              className="btn-icon"
                              variant="light"
                              onClick={decreaseMonth}
                              disabled={prevMonthButtonDisabled}
                            >
                              <Image
                                src={images.DatepickerPrev}
                                alt="Datepicker Previous"
                              />
                            </Button>

                            <span className="month_name">
                              {new Intl.DateTimeFormat("en-US", {
                                month: "long",
                                year: "numeric",
                              }).format(date)}
                            </span>

                            <Button
                              className="btn-icon"
                              variant="light"
                              onClick={increaseMonth}
                              disabled={nextMonthButtonDisabled}
                            >
                              <Image
                                src={images.DatepickerNext}
                                alt="Datepicker Next"
                              />
                            </Button>
                          </div>
                        )}
                      />
                    </div>

                    <p className="secondary-form-title am-sans mb-3">
                      Please select a preferred time
                    </p>
                    <ToggleButtonGroup
                      className="toggle-chips"
                      type="radio"
                      name="time-slot-options"
                    >
                      <ToggleButton
                        className="toggle-button"
                        id="time-slot-radio-1"
                        value={1}
                        variant="secondary"
                      >
                        10:00 <sup>AM</sup>
                      </ToggleButton>
                      <ToggleButton
                        className="toggle-button"
                        id="time-slot-radio-2"
                        value={2}
                        variant="secondary"
                      >
                        11:30 <sup>AM</sup>
                      </ToggleButton>
                      <ToggleButton
                        className="toggle-button"
                        id="time-slot-radio-3"
                        value={3}
                        variant="secondary"
                      >
                        12:00 <sup>AM</sup>
                      </ToggleButton>
                      <ToggleButton
                        className="toggle-button"
                        id="time-slot-radio-4"
                        value={4}
                        variant="secondary"
                      >
                        1:30 <sup>PM</sup>
                      </ToggleButton>
                      <ToggleButton
                        className="toggle-button"
                        id="time-slot-radio-5"
                        value={5}
                        variant="secondary"
                      >
                        2:00 <sup>PM</sup>
                      </ToggleButton>
                      <ToggleButton
                        className="toggle-button"
                        id="time-slot-radio-6"
                        value={6}
                        variant="secondary"
                      >
                        3:30 <sup>PM</sup>
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </>
                ) : (
                  ""
                )}

                <div className="action mt-auto">
                  {currentStep !== 0 ? (
                    <Button
                      variant="secondary"
                      className="size-lg"
                      onClick={goToPreviousStep}
                      disabled={currentStep === 0}
                    >
                      Back
                    </Button>
                  ) : (
                    ""
                  )}
                  {currentStep < 3 ? (
                    <Button
                      variant="primary"
                      className="size-lg ms-auto"
                      onClick={goToNextStep}
                      disabled={currentStep === stepperData.length}
                    >
                      Next
                      <em className="ic right">
                        <Image src={images.ArrowNarrowRightSMWhite} alt="" />
                      </em>
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      className="size-lg"
                      onClick={() => setShowStepper(false)}
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </div>
              <div className="enquiry-car">
                <div className="car-detail">
                  <p className="car-badge">{enquireData?.tag}</p>
                  <h1 className="title">{enquireData?.modelName}</h1>
                </div>
                <img
                  src={DBX707Green.src}
                  alt="DBX707Green"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="enquiry-summary">
            <div className="form-summary">
              <h1 className="am">Thank you for your enquiry John</h1>

              <p className="grey-text">
                A member of our team will be in touch to discuss your enquiry
                shortly.
              </p>

              <div className="detail-block">
                <h5 className="detail-title">Personal details</h5>
                <ul className="detail-lisitng">
                  <li>
                    <p className="label">Name</p>
                    <p className="value">John Smith</p>
                  </li>
                  <li>
                    <p className="label">Email</p>
                    <p className="value">john.smith@gmail.com</p>
                  </li>
                  <li>
                    <p className="label">Address</p>
                    <p className="value">12 Friar Street, Reading, RG1 1DB</p>
                  </li>
                  <li>
                    <p className="label">Phone number</p>
                    <p className="value">07735478560</p>
                  </li>
                </ul>
              </div>

              <div className="detail-block">
                <h5 className="detail-title">Preferred dealership</h5>
                <ul className="detail-lisitng">
                  <li>
                    <p className="label">Name</p>
                    <p className="value">Aston Martin Reading</p>
                  </li>
                  <li>
                    <p className="label">Address</p>
                    <p className="value">
                      Aston Martin, Station Rd, Pangbourne, Reading RG8 7AN
                    </p>
                  </li>
                  <li>
                    <p className="label">Phone number</p>
                    <p className="value">0333 014 4445</p>
                  </li>
                </ul>
              </div>

              <div className="detail-block">
                <h5 className="detail-title">Enquiry message</h5>
                <ul className="detail-lisitng">
                  <li>
                    <p className="label">Your enquiry</p>
                    <p className="value">
                      I&rsquo;m interested in booking a test drive with the
                      Aston Martin DBX707 and would like to know more about the
                      model shown on the Dealer X website.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="detail-block">
                <h5 className="detail-title">Test drive booking</h5>
                <ul className="detail-lisitng">
                  <li>
                    <p className="label">Date:</p>
                    <p className="value">11/08/2023</p>
                  </li>
                  <li>
                    <p className="label">Time:</p>
                    <p className="value">11.30 am</p>
                  </li>
                </ul>
              </div>

              <Button
                className="size-lg w-sm-auto w-100"
                variant="primary"
                onClick={handleReturnHome}
              >
                Return to the home page
              </Button>
            </div>
            <div className="car-model">
              <img src={DBX707GreenBack.src} alt="DBX707GreenBack" />
            </div>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Inquiry;
