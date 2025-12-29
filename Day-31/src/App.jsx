import { useReducer } from "react";
import { formReducer, initialState } from "./reducer/formReducer";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, isSubmitted } = state;

  if (isSubmitted) {
    return (
      <div>
        <h2>Form Submitted Successfully ✅</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3>Step {step} of 3</h3>

      {step === 1 && <StepOne state={state} dispatch={dispatch} />}
      {step === 2 && <StepTwo state={state} dispatch={dispatch} />}
      {step === 3 && <StepThree state={state} dispatch={dispatch} />}
    </div>
  );
}

export default App;
