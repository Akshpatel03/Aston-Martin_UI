/* eslint-disable import/no-anonymous-default-export */
import httpClient from "./base-service";
import { BaseResponse } from "@/utils/interface/BaseResponse";
import { IDealerBaseResponse } from "@/utils/interface/home";

// const endPointBaseURL = `/api/Contentful`;
const salesforceBaseURL = `/api/Salesforce`;

const getAllBranches = async (): Promise<BaseResponse<IDealerBaseResponse>> =>
  (await httpClient.get(`${salesforceBaseURL}/AllBranches`)).data;

export default {
  getAllBranches,
};
