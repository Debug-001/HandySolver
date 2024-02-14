// import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const App = () => {

  // const [isChecked, setIsChecked] = useState(false);
  // const [inputValue, setInputValue] = useState("");

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };

  // const handleInputChange = (event:any) => {
  //   setInputValue(event.target.value);
  // };

  return (
    <main className="container-fluid pt-5 pb-5 mt-5">
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            New Job <FaPlus className="pb-1" />
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable" style={{ marginLeft: "12rem" }}>
              <div className="modal-content">
                <div className="modal-header justify-content-end gap-3">
                  <button className="btn btn-info text-light ">Duplicate
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >Delete</button>
                </div>
                <div className="modal-body">
                  <div className="head-row d-flex gap-4">
                    <input type="checkbox" name="" id="" />
                    <input className="p-2 w-50" type="text" name="" placeholder="Job Post Title" id=""/>
                  </div>
                  <div className="second-row d-flex flex gap-4 mt-5">
                    <input type="checkbox" name="" id=""/>
                    <h4>Introduction</h4>
                  </div>
                  <input className="p-2 w-100 mt-2" style={{ marginLeft: "2.4rem", height: "15vh" }} type="text" name="" placeholder="Ideal Candidate is someone...." id=""/>

                  <div className="second-row d-flex flex gap-4 mt-5 pt-3">
                    <input type="checkbox" name="" id=""/>
                    <h4>Roles and Responsibilities</h4>
                  </div>
                  <input className="p-2 w-100 mt-2" style={{ marginLeft: "2.4rem", height: "15vh" }} type="text" name="" placeholder="Ideal Candidate is someone...." id=""/>
                  <div className="exp-col d-flex gap-4 mt-5">
                  <input type="checkbox" name="" id="" />
                  <h4>Experience</h4>
                  <input className="mx-5" type="range" name="" id="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <p></p>
        </div>
      </div>
    </main>
  );
};

export default App;
