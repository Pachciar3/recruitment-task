import { object, string, number, array } from "yup";

export interface ResponseData {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  image: {
    medium: string;
  } | null;
}

export interface GetSingleSearchResponse {
  status: number;
  data: undefined | ResponseData;
}

export const singleSearchResponseSchema = object({
  id: number().required(),
  url: string().required(),
  name: string().required(),
  type: string().required(),
  language: string().required(),
  genres: array().of(string()),
  status: string().required(),
  runtime: number().required().nullable(),
  averageRuntime: number().required().nullable(),
  premiered: string().required().nullable(),
  ended: string().required().nullable(),
  officialSite: string().required().nullable(),
  image: object({
    medium: string().optional(),
  })
    .required()
    .nullable(),
});
