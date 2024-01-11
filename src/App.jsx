import CalculationForm from "./CalculationForm";
import Result from "./Result";

function App() {
  return (
    <main className="w-screen h-screen overflow-hidden text-white bg-black flex flex-col align-center justify-end sm:justify-center pt-10">
      <Result />
      <CalculationForm />
    </main>
  );
}

export default App;
