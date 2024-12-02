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
    content: any[]; 
}

export interface CustomerReviews {
    reviewMessage: string;
    authorName:string;
    reviewDate: Date;
  }