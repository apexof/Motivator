import auth0Client from "../components/Auth/Auth";

export const START = "_START";
export const ERR = "_ERR";
export const getHeaders = () => ({ Authorization: `Bearer ${auth0Client.getIdToken()}` });
