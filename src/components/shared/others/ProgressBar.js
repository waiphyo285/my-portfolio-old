import React from "react";

function ProgressBarComponent({ scrollVal }) {
  const MaxHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const ScrollPercent = (scrollVal / MaxHeight) * 100;

  return (
    <div className="progress" style={{ height: "3px" }}>
      <div
        role="progressbar"
        className="progress-bar bg-danger"
        style={{ width: `${ScrollPercent}%` }}
        aria-valuenow={{ ScrollPercent }}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}

export default ProgressBarComponent;
