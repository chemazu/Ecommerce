import { type } from "os";
import { stringify } from "querystring";

const resultFilter = (query:any) => {
    return (item:any) => {
        for (var key in query) {
        if (item[key] == query[key]) {
          return true;
        }
        if (item[key] === undefined || item[key] != query[key])
          return false;
      }
      return true;
    };
  };
  
  export default resultFilter;
  