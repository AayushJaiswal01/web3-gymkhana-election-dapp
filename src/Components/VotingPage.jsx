import React from "react";

const Connected = (props) => {
  return (
    <div className="connected-container">
      <table id="myTable" className="candidates-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Candidate name</th>
            <th>Candidate votes</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.index}</td>
              <td>{candidate.name}</td>
              <td>{candidate.voteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="connected-header">Metamask Connected</h1>
      <p className="connected-account">Metamask Account: {props.account}</p>
      <p className="connected-account">Remaining Time: {props.remainingTime}</p>
      {props.showButton ? (
        <p className="connected-account">You have already voted</p>
      ) : (
        <div>
          <p>Enter the index number</p>
          <input
            type="number"
            placeholder="First Preference"
            value={props.number}
            onChange={props.handleNumberChange}
          ></input>
          <input
            type="number"
            placeholder="Second Preference"
            value={props.number1}
            onChange={props.handleNumberChange1}
          ></input>
          <input
            type="number"
            placeholder="Third Preference"
            value={props.number2}
            onChange={props.handleNumberChange2}
          ></input>

          <br />
          <button className="login-button" onClick={props.voteFunction}>
            Vote
          </button>
        </div>
      )}
    </div>
  );
};

export default Connected;
