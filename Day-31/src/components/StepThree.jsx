function StepThree({ state, dispatch }) {
  const { name, email, username } = state.values;

  return (
    <>
      <h4>Review Details</h4>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Username: {username}</p>

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Back
      </button>

      <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
        Submit
      </button>
    </>
  );
}

export default StepThree;
