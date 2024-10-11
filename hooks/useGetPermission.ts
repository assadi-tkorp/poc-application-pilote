import { requestStoragePermission } from "@/lib/requestPermission";
import React from "react";

const useGetPermission = () => {
  React.useEffect(() => {
    (async function () {
      await requestStoragePermission();
    })();
  }, []);
};

export default useGetPermission;
