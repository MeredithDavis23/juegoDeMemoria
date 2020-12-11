import React, { useState } from "react";

const useMessage = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }
  return { isShowing, toggle };
};

export default useMessage;