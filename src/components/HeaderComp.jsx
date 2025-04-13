import investmentCalculator from "../assets/investment-calculator-logo.png";

export default function HeaderComp() {
  return (
    <header id="header">
      <img src={investmentCalculator} alt="Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
