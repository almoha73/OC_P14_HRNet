import { AuthContextProvider } from "./auth/AuthContext";
import { combineComponents } from "../context/combineComponents";

const providers = [AuthContextProvider];
export const AppContextProvider = combineComponents(...providers);
