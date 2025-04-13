import { useState } from "react";
import Input from "./Input";
export default function UserInput({ onChangeInput, enteredValues }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label="INITIAL INVESTMENT"
          id="initial"
          type="number"
          onSelect={onChangeInput}
          identifier="initialInvestment"
          value={enteredValues.initialInvestment}
        />
        <Input
          label="ANNUAL INVESTMENT"
          id="annual"
          type="number"
          onSelect={onChangeInput}
          identifier="annualInvestment"
          value={enteredValues.annualInvestment}
        />
        <Input
          label="EXPECTED RETURN"
          id="expected"
          type="number"
          onSelect={onChangeInput}
          identifier="expectedReturn"
          value={enteredValues.expectedReturn}
        />
        <Input
          label="DURATION"
          id="duration"
          type="number"
          onSelect={onChangeInput}
          identifier="duration"
          value={enteredValues.duration}
        />
      </div>
    </div>
  );
}
