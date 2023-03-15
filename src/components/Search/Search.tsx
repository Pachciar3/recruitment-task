import { useEffect, useState } from "react";
import { getSingleSearchResponse } from "../../api/getSingleSearch";
import { ResponseData } from "../../api/getSingleSearch/Response";

export default function Search() {
  const [data, setData] = useState<undefined | ResponseData>(undefined);
  useEffect(() => {
    getSingleSearchResponse("1")
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  console.log(data);
  if (data)
    return (
      <div className="card">
        {JSON.stringify(data)}
        <a href={data.url}>
          <img src={data.image?.medium} alt={data.name} />{" "}
        </a>
      </div>
    );
  else return <div>We have a problem</div>;
}
