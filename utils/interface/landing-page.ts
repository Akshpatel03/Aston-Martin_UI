export interface ImageFile {
    fileName: string;
    contentType: string;
    url: string;
    uploadUrl: string | null;
    uploadReference: string | null;
    details: {
      size: number;
      image: {
        height: number;
        width: number;
      };
    };
}
export interface LatestNews{
    newsHeading: string;
    newsDate: string;
    imageFile: ImageFile;
}
export interface ContentfulHomePage {
    title: string;
    content: any; 
}

export interface ModelReviews {
    reviewMessage: string;
    authorName:string;
    reviewDate: Date;
    authorDesignation: string;
  }
  export interface HeadingandSubHeading{
    title: string;
    description1: string;
    description2:string;
    description3:string;
    imageFile: ImageFile;
    explorePageRoute: string;
  }
  export interface PageNavigation{
    title:string;
    description:string;
    imageFile:ImageFile;
    pageLink: ExternalLink[];
  }
  export interface ModelInformation{
    title:string;
    heading:string;
    description:string;
  }
  export interface PageContent {
    title:string;
    tag:string;
    description:string;
    content : HeadingandSubHeading[];
    imageFile : ImageFile;
  }
  export interface SpecificationOverview {
    specificationAttribute: string;
    specificationValue: number;
    specificationUnit: string;
  }
  export interface ModelSpecifications {
    title: string;
    specifications: string[];
  }
  export interface ExternalLink{
    link: string;
    url:string;
  }