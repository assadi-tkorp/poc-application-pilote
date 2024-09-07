import React from "react";

/**
 * Hook custom qui permet de gerer les valeur boolean et retourné la valeurs l'inverse
 *
 * Exemple :
 *
 * ```js
 * const [isOpen,setOpen] = useToggleBoolean()
 * //isOpen ==  false
 * setOpen()
 * //isOpen ==  true
 *
 * ```
 */
const useToggleBoolean = () => {
  const [toggleState, setToggle] = React.useReducer((state) => !state, false);
  return {
    toggleState,
    setToggle,
  };
};

export default useToggleBoolean;
