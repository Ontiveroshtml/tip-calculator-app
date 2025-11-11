import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [people, setPeople] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [selectCustom, setSelectCustom] = useState(false);

  const totalTip = amount * percentage - amount;
  const tipAmount = people > 0 ? totalTip / people : 0;
  const totalPerPerson = people > 0 ? amount / people + tipAmount : 0;

  const handleBill = (e) => {
    const bill = parseFloat(e.target.value) || 0;
    setAmount(bill >= 0 ? bill : 0);
  };

  const handlePeople = (e) => {
    const number = parseInt(e.target.value) || 0;
    setPeople(number >= 0 ? number : 0);
  };

  const selectPercentage = (e) => {
    const percentageSelected = e.target.value;

    setPercentage(percentageSelected);
  };

  const handleSelectCustom = () => {
    setSelectCustom(!selectCustom);
  };

  const customPercentage = (e) => {
    const custom = e.target.value;

    setPercentage(custom);
  };

  return (
    <main className="bg-Grey-200 min-h-screen">
      <div className="flex flex-col justify-center text-center mx-auto max-w-xl text-3xl text-Grey-500 p-2 mb-20 ">
        <p>SPLI</p>
        <p>TTER</p>
      </div>

      <div className="md:flex justify-around bg-white md:max-w-4xl max-w-sm mx-auto p-6 rounded-2xl gap-4 ">
        <div className="flex flex-col md:w-xl rounded-2xl p-6 text-Grey-500 gap-4">
          <h2>Bill</h2>
          <input
            onChange={handleBill}
            className="bg-Grey-200 p-2 rounded-md sm:max-w-sm "
            type="number"
          />

          <h2>Select Tip %</h2>
          <div className="grid grid-cols-3 text-Grey-50 gap-2 sm:max-w-sm">
            <button
              type="submit"
              value={1.05}
              onClick={selectPercentage}
              className="bg-Green-900 rounded-sm p-2  hover:bg-Green-400 cursor-pointer "
            >
              5%
            </button>

            <button
              type="submit"
              value={1.1}
              onClick={selectPercentage}
              className="bg-Green-900 rounded-sm p-2  hover:bg-Green-400 cursor-pointer"
            >
              10%
            </button>

            <button
              type="submit"
              value={1.15}
              onClick={selectPercentage}
              className="bg-Green-900 rounded-sm p-2  hover:bg-Green-400 cursor-pointer"
            >
              15%
            </button>

            <button
              type="submit"
              value={1.25}
              onClick={selectPercentage}
              className="bg-Green-900 rounded-sm p-2  hover:bg-Green-400 cursor-pointer"
            >
              25%
            </button>

            <button
              type="submit"
              value={1.5}
              onClick={selectPercentage}
              className="bg-Green-900 rounded-sm p-2  hover:bg-Green-400 cursor-pointer"
            >
              50%
            </button>

            {selectCustom ? (
              <>
                <input
                  onChange={customPercentage}
                  className="bg-Grey-200 p-2 rounded-md sm:max-w-sm text-Green-900 "
                  type="number"
                />

                <label>
                  <button
                    onClick={() => selectCustom(false)}
                    className="bg-red-500"
                  >
                    X
                  </button>
                </label>
              </>
            ) : (
              <>
                <button
                  onClick={handleSelectCustom}
                  className="bg-Green-900 rounded-sm p-2 hover:bg-Green-400 cursor-pointer"
                >
                  Custom
                </button>
              </>
            )}
          </div>

          <h2>Number of People</h2>
          <input
            onChange={handlePeople}
            className="bg-Grey-200 p-2 rounded-md sm:max-w-sm"
            type="number"
          />
        </div>

        <div className="flex flex-col w-xl bg-Green-900 text-Grey-50 rounded-2xl p-10 gap-8 max-w-xs">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h2>Tip Amount</h2>
              <span className="text-Grey-400">/ person</span>
            </div>
            <span className="text-4xl text-Green-400">
              ${tipAmount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center flex-1">
            <div className="flex flex-col">
              <h2>Total</h2>
              <span className="text-Grey-400">/ person</span>
            </div>
            <span className="text-4xl text-Green-400 ">
              ${totalPerPerson.toFixed(2)}
            </span>
          </div>

          <button className="bg-Grey-500 p-2 rounded-md hover:bg-Green-400 cursor-pointer">
            RESET
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
