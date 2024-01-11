import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [operation, setOperation] = useState("0");

  const handleClick = (label) => {
    try {
      if (label === "AC") {
        setOperation("0");
      }
      if (label === "+/-") {
        setOperation((prev) => {
          if (prev === "0") {
            return label;
          }
          return prev.toString().charAt(0) === "-" ? prev.slice(1) : "-" + prev;
        });
      }
      if (label === "%") {
        setOperation((prev) => {
          if (prev === "0") {
            return label;
          }
          return parseFloat(prev) / 100;
        });
      }
      if (label === "=") {
        setOperation((prev) => {
          if (prev === "0") {
            return label;
          }
          for (let i = 0; i < prev.length; i++) {
            if (prev.charAt(i) === "x") {
              prev = prev.replace("x", "*");
            }
            if (prev.charAt(i) === "÷") {
              prev = prev.replace("÷", "/");
            }
          }
          return eval(prev);
        });
      }
      if (label !== "AC" && label !== "+/-" && label !== "%" && label !== "=") {
        setOperation((prev) => {
          typeof label === "number" && label.toString();
          if (prev === "0") {
            return label;
          }
          return prev.toString() + label.toString();
        });
      }
    } catch (err) {
      setOperation("Error");
    }
  };

  return (
    <AppContext.Provider value={{ handleClick, operation }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
