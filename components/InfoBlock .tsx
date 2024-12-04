import images from "@/public/images";
import { ROUTES } from "@/shared/routes";
import { PageNavigation } from "@/utils/interface/landing-page";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
interface modelInfoBlockProps {
  newCarInfoBlock: PageNavigation;
  isOddIndex: boolean;
}
const InfoBlock: React.FC<modelInfoBlockProps> = ({
  newCarInfoBlock,
  isOddIndex,
}) => {
  return (
    <Fragment>
      <div className="info-block">
        <div
          className={`row align-items-center ${
            !isOddIndex && "flex-row-reverse"
          }`}
        >
          {/* Image Block */}
          <div className="col-lg-7 col-md-6">
            <Image
              className="banner"
              src={`http:${newCarInfoBlock.imageFile.url}`}
              width={newCarInfoBlock.imageFile.details.image.width}
              height={newCarInfoBlock.imageFile.details.image.height}
              alt="BannerImage"
            />
          </div>

          {/* Text Block */}
          <div className="col-lg-5 col-md-6">
            <div className="info">
              <h3 className="title am">{newCarInfoBlock.title}</h3>
              <p className="description">{newCarInfoBlock.description}</p>
              <Link className="quick-link color-primary" href={ROUTES.NewCar}>
                {newCarInfoBlock.navigationLink}
                <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoBlock;
