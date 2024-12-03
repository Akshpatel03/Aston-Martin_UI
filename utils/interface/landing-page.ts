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

export interface CustomerReviews {
    reviewMessage: string;
    authorName:string;
    reviewDate: Date;
  }
  export interface HeadingandSubHeading{
    title: string;
    description1: string;
    description2:string;
    description3:string;
    imageFile: ImageFile;
  }
  export interface PageNavigation{
    title:string;
    description:string;
    navigationLink: string;
    imageFile:ImageFile;
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
    model : HeadingandSubHeading[];
    imageFile : ImageFile;
  }