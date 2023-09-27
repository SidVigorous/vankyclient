import React from "react";

function Protected(props) {
  const { Component } = props;
  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
