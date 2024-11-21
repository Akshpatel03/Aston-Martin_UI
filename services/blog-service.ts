/* eslint-disable import/no-anonymous-default-export */
import { Blog } from "@/utils/interface";
import httpClient from "./base-service";

const endPointBaseURL = `/api/Contentful`;

const getBlog = async (): Promise<Blog[]> => {
  const response = await httpClient.get(endPointBaseURL);
  return response.data;
};

export default {
  getBlog,
};
