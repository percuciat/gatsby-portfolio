import { useContext } from "react";
import { GlobalContext } from "app/model";

const useGlobalStore = () => useContext(GlobalContext);

export default useGlobalStore;
