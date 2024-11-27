import images from "@/public/images";
import Image from "next/image";
import React from "react";
import { Button, Form } from "react-bootstrap";
import Select, { SingleValue } from "react-select";

const DesignerFromControls = () => {
  const options = [
    { value: "option1", label: "12 Friar Street, Reading, RG1 1DB" },
    { value: "option2", label: "14 Friar Street, Reading, RG1 1DB" },
    { value: "option3", label: "15 Friar Street, Reading, RG1 1DB" },
  ];
  const [selectedOption, setSelectedOption] = React.useState<{
    value: string;
    label: string;
  } | null>(options[0]);
  const handleChange = (
    option: SingleValue<{ value: string; label: string }>
  ) => {
    setSelectedOption(option); // `option` can be `null`
  };

  return (
    <>
      <div className="container">
        <h3 className="mb-3">Form controls</h3>
        {/* radio */}
        <Form className="inline-level gap-5 ms-xl-4 mb-3">
          <Form.Check
            type="radio"
            label="Mr"
            name="gender"
            defaultChecked
            id="RadioMr"
          />
          <Form.Check type="radio" label="Mrs" name="gender" id="RadioMrs" />
          <Form.Check type="radio" label="Miss" name="gender" id="RadioMiss" />
          <Form.Check type="radio" label="Ms" name="gender" id="RadioMs" />
        </Form>

        {/* check */}
        <Form.Group className="mb-3">
          <Form className="inline-level gap-5 ms-xl-4 mb-3">
            <Form.Check
              type="checkbox"
              label="Mr"
              defaultChecked
              id="CheckMr"
            />
            <Form.Check type="checkbox" label="Mrs" id="CheckMrs" />
            <Form.Check type="checkbox" label="Miss" id="CheckMiss" />
            <Form.Check type="checkbox" label="Ms" id="CheckMs" />
          </Form>
        </Form.Group>

        {/* text */}
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        {/* textarea */}
        <Form.Group className="mb-3">
          <Form.Label>Textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        {/* add autocomplate */}
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Select
            className="react-custom-select with-text"
            classNamePrefix="select"
            options={options}
            onChange={handleChange}
          />
        </Form.Group>

        {/* select */}
        <Form.Group className="mb-3">
          <Form.Label>select</Form.Label>
          <Select
            className="react-custom-select"
            classNamePrefix="select"
            isSearchable={false}
            options={options}
            onChange={handleChange}
          />
        </Form.Group>

        {/* select dark */}
        <Form.Group className="mb-3">
          <Form.Label>select dark</Form.Label>
          <Select
            className="react-custom-select dark"
            classNamePrefix="select"
            isSearchable={false}
            options={options}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="d-flex align-items-center gap-3 bg-primary p-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary">
            With icon
            <em className="ic right">
              <Image src={images.ArrowNarrowRightSMPrimary} alt="" />
            </em>
          </Button>
          <Button className="size-lg" variant="primary">
            size-lg
          </Button>
          <Button className="size-lg" variant="secondary">
            secondary size-lg
          </Button>
          <Button className="size-lg" variant="light">
            light size-lg
          </Button>
          <Button className="btn-icon" variant="text">
            <Image src={images.ArrowNarrowLeftDark} alt="Previous" />
          </Button>
          <Button className="size-lg" variant="mid-transparent">
            Transparent mid
          </Button>
        </div>
      </div>
    </>
  );
};

export default DesignerFromControls;
