const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <>
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input
          id="number-input"
          type="number"
          width="200"
          onChange={onChange}
          disabled={!isValid}
        />
      </label>
      <input
        type="submit"
        width="200"
        value="Submit"
        id="submit-input"
        disabled={!isValid || !isDeposit && Number(document.getElementById("number-input").value) > Number(document.getElementById("total").textContent.split(" ")[2])}
      />
    </>
  );
};

const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(true);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    setDeposit(Number(event.target.value));
    if (event.target.value <= 0) {
      console.log("Invalid transaction: amount <= 0");
      setValidTransaction(false);
    } else if (atmMode === "Cash Back" && event.target.value > totalState) {
      console.log("Invalid transaction: cash back amount > totalState");
      setValidTransaction(false);
    } else {
      console.log("Valid transaction");
      setValidTransaction(true);
    }
  };

  const handleModeSelect = (event) => {
    setAtmMode(event.target.value);
    if (event.target.value === "Deposit") {
      setIsDeposit(true);
    } else if (event.target.value === "Cash Back") {
      setIsDeposit(false);
    } else {
      setIsDeposit(true);
    }
    setValidTransaction(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isDeposit || (!isDeposit && deposit <= totalState)) {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
    } else {
      alert("Cannot withdraw more than the Account Balance.");
    }
    setValidTransaction(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <label>Select an action below to continue</label>
      <select
        onChange={(e) => handleModeSelect(e)}
        name="mode"
        id="mode-select"
      >
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">
          Deposit
        </option>
        <option id="cashback-selection" value="Cash Back">
          Cash Back
        </option>
      </select>
      {atmMode && (
        <ATMDeposit
          onChange={handleChange}
          isDeposit={isDeposit}
          isValid={validTransaction}
        ></ATMDeposit>
      )}
    </form>
  );
};

ReactDOM.render(<Account />, document.getElementById("root"));
