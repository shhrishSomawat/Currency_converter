import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState(0);

  const exchangeRates = {
    USD: { INR: 82.97, EUR: 0.93, GBP:0.79 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095 },
    EUR: { USD: 1.08, INR: 89.46, GBP: 0.85 },
    GBP: { USD: 1.26, INR: 104.79, EUR: 1.17 },
  };
  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
  };
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };
  const handleConversion = () => {
    console.log("From Currency:", fromCurrency);
    console.log("To Currency:", toCurrency);

    if (fromCurrency === toCurrency) {
      setResult(amount.toFixed(2));
    } else {
      const rate = exchangeRates[fromCurrency][toCurrency];
      const convertedResult = amount * rate;
      setResult(convertedResult.toFixed(4));
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container flex justify-center items-center h-screen">
          <div className="card bg-gray-150 h-[600px] w-[450px] shadow-2xl rounded-lg">
            <div className="heading">
              <h1 className="text-2xl font-bold">Currency Converter</h1>
            </div>
            <div className="amountInput flex flex-col mt-8">
              <label className="text-1xl font-semibold" htmlFor="amount">
                Enter Amount Here
              </label>
              <input
                onChange={handleAmountChange}
                value={amount}
                type="number"
                id="amount"
                className="bg-blue-300 p-2 shadow-xl rounded-md"
              />
            </div>
            <div className="fromSection flex flex-col mt-8">
              <select
                onChange={handleFromCurrencyChange}
                value={fromCurrency}
                name=""
                id=""
                className="p-3 outline-none border bg-black text-white font-bold rounded-sm"
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div className="toSection flex flex-col mt-8">
              <select
                onChange={handleToCurrencyChange}
                value={toCurrency}
                name=""
                id=""
                className="p-3 outline-none border bg-black text-white font-bold rounded-sm"
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div className="evaluate mt-8">
              <button
                onClick={handleConversion}
                className="bg-black text-white font-bold p-3 w-[140px] rounded-md hover:shadow-2xl hover:scale-110"
              >
                Check
              </button>
            </div>
            <div className="output flex flex-col mt-8">
              <label htmlFor="result" className="text-2xl font-semibold">
                Result
              </label>
              <input
                readOnly
                value={result}
                type=""
                id="result"
                className="bg-blue-300 p-2 shadow-xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
