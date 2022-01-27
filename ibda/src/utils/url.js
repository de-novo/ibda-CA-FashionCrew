import queryString from "query-string";
import { omit } from "lodash";

export const queryStringToObject = (str, options = {}) => {
    return queryString.parse(str, {
        arrayFormat: "bracket",
        ...options,
    });
}; ///return obj
export const objectToQueryString = (obj, options = {}) => {
    return queryString.stringify(obj, {
        arrayFormat: "bracket",
        ...options,
    });
}; ///return str

export const omitFromQueryString = (str, key) => objectToQueryString(omit(queryStringToObject(str), key));
///str -> obj .omit -> str

export const addToQueryString = (str, fields) =>
    objectToQueryString({
        ...queryStringToObject(str),
        ...fields,
    });
///str -> obj + fields
