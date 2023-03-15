import axios from "axios";
import { ResponseData, singleSearchResponseSchema } from "./Response";

async function getSingleSearch(query: string): Promise<ResponseData> {
  try {
    const res = await axios({
      url: `/singlesearch/shows?q=${query}`,
      validateStatus: function (status) {
        return status >= 200 && status < 300;
      },
    });
    await singleSearchResponseSchema.validate(res.data);
    return res.data as ResponseData;
  } catch (e: unknown) {
    throw Error(e as string);
  }
}

export default getSingleSearch;
