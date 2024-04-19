import React from "react";
import { Outlet } from "react-router-dom";

function MovieDetailsModal() {
  return (
    <>
      <input type="checkbox" id="movieDetails_modal" className="modal-toggle" />
      <div id="movieDetails_modal" className="modal" role="dialog">
        <div className="bg-white absolute rounded-lg">
          <div className="">
            <Outlet />
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="movieDetails_modal">Close</label>
      </div>
    </>
  );
}

export default MovieDetailsModal;