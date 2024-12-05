import { ContentfulHomePage } from '@/utils/interface/landing-page';
import { AxiosResponse } from 'axios';
/* eslint-disable import/no-anonymous-default-export */
 
import httpClient from "./base-service";
import { BaseResponse } from "@/utils/interface/base-response";
 
const endPointBaseURL = `${process.env.NEXT_PUBLIC_LOCAL_API}/api/LandingPage`;
 


const getHomePageContent = async (slug: string): Promise<AxiosResponse<BaseResponse<ContentfulHomePage>>> => 
         await httpClient.get<BaseResponse<ContentfulHomePage>>(`${endPointBaseURL}/${slug}`);
    
const getExploreModelRoutes = async (): Promise<AxiosResponse<BaseResponse<string[]>>> => 
    await httpClient.get<BaseResponse<string[]>>(`${endPointBaseURL}/ExploreCarRoutes`);
 
export default {
    getHomePageContent,
    getExploreModelRoutes
};