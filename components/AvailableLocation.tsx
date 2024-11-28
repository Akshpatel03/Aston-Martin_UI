import images from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { ROUTES } from "../shared/routes";
import { IDealer } from "@/utils/interface/home";
import React, { useState } from "react";
import MapComponent from "./MapComponent";

interface IAvailableLocationProps {
  dealers: IDealer[];
}
const AvailableLocation: React.FC<IAvailableLocationProps> = ({
  dealers = [],
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>();
  const updateSelectedLocation = (id: string) => {
    const listWrapper = document.getElementById(`store-location-list`);
    const item = document.getElementById(`dealer-${id}`);

    if (item && listWrapper) {
      const itemPosition = item.offsetTop;
      const containerHeight = listWrapper.offsetHeight;

      listWrapper.scrollTo({
        top: itemPosition - containerHeight / 2 + item.offsetHeight / 12,
        behavior: "smooth",
      });
      setSelectedLocation(id);
    }
  };

  return (
    <div className="location-wrapper">
      <div className="container-xxl">
        <h2 className="title am">Where to find us</h2>
        <div className="row">
          <div className="col-md-6 col-xl-5">
            <div className="info">
              <ul className="store-loaction-list" id="store-location-list">
                {dealers &&
                  dealers?.map((dealer) => (
                    <li
                      key={dealer.id}
                      id={`dealer-${dealer.id}`}
                      className={
                        selectedLocation === dealer.id
                          ? "active-location px-2"
                          : "px-2"
                      }
                    >
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
              <MapComponent
                dealers={dealers}
                updateSelectedLocation={updateSelectedLocation}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableLocation;
