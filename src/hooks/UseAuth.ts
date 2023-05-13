/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 2:10 AM
 */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export const useAuth = () => useContext(AuthContext);
