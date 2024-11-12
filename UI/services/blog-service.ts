/* eslint-disable import/no-anonymous-default-export */
import { AxiosResponse } from "axios";
import httpClient from "./base-service";

const endPointBaseURL = `/api/Contentful`;

const getBlog = async (): Promise<AxiosResponse> =>
  httpClient.get(`${endPointBaseURL}`);

export default {
  getBlog,
};
