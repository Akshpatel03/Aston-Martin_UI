import images from "@/public/images";
import { PageNavigation } from "@/utils/interface/landing-page";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
interface modelInfoBlockProps {
  newCarInfoBlock: PageNavigation[];
}
const InfoBlock: React.FC<modelInfoBlockProps> = ({ newCarInfoBlock }) => {
  return (
    <Fragment>
      {newCarInfoBlock.map((info, index) => (
        <div key={index} className="info-block">
          <div
            className={`row align-items-center ${
              index % 2 === 0 && "flex-row-reverse"
            }`}
          >
            {/* Image Block */}
            <div className="col-lg-7 col-md-6">
              <Image
                className="banner"
                src={`http:${info.imageFile.url}`}
                width={info.imageFile.details.image.width}
                height={info.imageFile.details.image.height}
                alt="BannerImage"
              />
            </div>

            {/* Text Block */}
            <div className="col-lg-5 col-md-6">
              <div className="info">
                <h3 className="title am">{info.title}</h3>
                <p className="description">{info.description}</p>
                <Link
                  className="quick-link color-primary"
                  href={info.pageLink[0].url}
                >
                  {info.pageLink[0].link}
                  <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default InfoBlock;
