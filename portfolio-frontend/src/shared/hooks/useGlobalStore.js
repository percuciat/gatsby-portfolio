import React, { useContext } from "react";
import { GlobalContext } from "app/model";

export const useGlobalStore = () => useContext(GlobalContext);
