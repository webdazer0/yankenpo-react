import React from "react";

function Button({ ...props }) {
  return (
    <div className="button" {...props}>
      Rules
    </div>
  );
}

export default Button;
