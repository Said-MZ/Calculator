import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [clear, setClear] = useState("AC");
  const [operation, setOperation] = useState("0");
  const handleClick = (label) => {
    try {
      if (
        /[+x=÷-]/.test(operation.toString().charAt(operation.length - 1)) &&
        /[+x÷-]/.test(label.toString())
      ) {
        setOperation(operation.slice(0, -1) + label.toString());
        return;
      }

      if (operation !== "0") setClear("C");

      if (label === clear) {
        setOperation("0");
        setClear("AC");
        return;
      }

      if (operation.length > 24) {
        throw new Error("Limit exceeded");
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
          const result = eval(prev);
          if (isNaN(result)) {
            throw new Error("Invalid operation");
          }
          return result.toString().includes(".")
            ? result.toFixed(3)
            : result.toString();
        });
      }

      if (
        label !== clear &&
        label !== "+/-" &&
        label !== "%" &&
        label !== "="
      ) {
        setOperation((prev) => {
          typeof label === "number" && label.toString();
          if (prev === "0") {
            return label;
          }
          return prev.toString() + label.toString();
        });
      }
    } catch (err) {
      setOperation("Error: " + err.message);
    }
  };

  return (
    <AppContext.Provider value={{ handleClick, operation, clear }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
