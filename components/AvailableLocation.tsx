import images from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { ROUTES } from "../shared/routes";
import { IDealer } from "@/utils/interface/home";
import React from "react";

interface IAvailableLocationProps {
  dealers: IDealer[];
}
const AvailableLocation: React.FC<IAvailableLocationProps> = ({
  dealers = [],
}) => {
  return (
    <div className="location-wrapper">
      <div className="container-xxl">
        <h2 className="title am">Where to find us</h2>
        <div className="row">
          <div className="col-md-6 col-xl-5">
            <div className="info">
              <ul className="store-loaction-list">
                {dealers &&
                  dealers?.map((dealer) => (
                    <li key={dealer.id}>
                      <Image
                        className="dealer-logo"
                        src={images.DealerLogoBlack}
                        alt="Dealer"
                      />
                      <div className="dealer-info">
                        <h5 className="name">{dealer.name}</h5>
                        <p className="address">
                          {dealer.street}, {dealer.city}, {dealer.country},{" "}
                          {dealer.postalCode}
                        </p>
                        <Link
                          href={`tel:${dealer.phone}`}
                          className="link grey mb-3"
                        >
                          {dealer.phone}
                        </Link>
                        <br />
                        <Link
                          className="quick-link color-primary"
                          href={ROUTES.NewCar}
                        >
                          More
                          <Image src={images.ChevronDownPrimary} alt="More" />
                        </Link>
                      </div>
                      <Button className="size-lg" variant="primary">
                        Full details
                      </Button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-xl-7">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.744610540673!2d-2.106266315706369!3d51.914086370182346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48711b62d3120961%3A0x41e1ea579c912fb0!2sAston%20Martin%20Cheltenham!5e0!3m2!1sen!2sin!4v1731929784268!5m2!1sen!2sin"
                width="100%"
                height="736"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableLocation;
