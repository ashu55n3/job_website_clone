import React from "react";
import EmptyList from "../../components/EmptyList";
import imgUrl from "../../lib/imgUrl";

function NotFound() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-grow-1"
    >
      <EmptyList
        icon={imgUrl["emptyList"]}
        description="Page not found!"
      ></EmptyList>
    </div>
  );
}

export default NotFound;
