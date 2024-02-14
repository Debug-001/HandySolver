import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const App = () => {
  const initialFields = [
    { id: 1, type: "text", isChecked: false, inputValue: "", placeholder: "Enter Job Post Title" },
    { id: 2, type: "text", isChecked: false, inputValue: "", heading: "Introduction", placeholder: "The Ideal Candidate is someone...." },
    { id: 3, type: "text", isChecked: false, inputValue: "", heading: "Roles and Responsibilites", placeholder: "Your Job role will include...." },
    { id: 4, type: "range", isChecked: false, inputValue: "", heading: "Experience (years)" },
    { id: 5, type: "text", isChecked: false, inputValue: "", placeholder: "Enter your Qualifications" },
    { id: 6, type: "text", isChecked: false, inputValue: "", placeholder: "Please enter expected Salary Range" },
    { id: 7, type: "text", isChecked: false, inputValue: "", heading: "Previous Company Details", placeholder: "Enter your previous/current company details" },
    { id: 8, type: "text", isChecked: false, inputValue: "", placeholder: "Select Preffered Job Location" },
    { id: 9, type: "dropdown", isChecked: false, name: "Select Job Type", selectedValue: null, options: ["Full Time", "Part Time", "Contract"] },
    { id: 10, type: "dropdown", isChecked: false, name: "Labels", selectedValue: null, options: ["Hybrid", "Remote", "5 Day/week"] },
  ];

  const [fields, setFields] = useState(initialFields);

  const handleCheckboxChange = (fieldId: any) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === fieldId ? { ...field, isChecked: !field.isChecked } : field
      )
    );
  };

  const handleOnDelete = () =>{
   setFields(initialFields)
  }

  const handleDropdownChange = (fieldId: any, selectedValue: any) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === fieldId ? { ...field, selectedValue, inputValue: selectedValue } : field
      )
    );
  };

  const handleInputChange = (fieldId: any, event: any) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === fieldId ? { ...field, inputValue: event.target.value } : field
      )
    );
  };

  return (
    <main className="container-fluid pt-5 pb-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
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
                    <button className="btn btn-info text-light ">Duplicate</button>
                    <button
                      type="button"
                      onClick={handleOnDelete}
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="modal-body">
                    {fields.map((field) => (
                      <div key={field.id} className="row mb-3">
                        <div className="col-1">
                          <input
                            type="checkbox"
                            style={{ marginTop: "2rem" }}
                            checked={field.isChecked}
                            onChange={() => handleCheckboxChange(field.id)}
                          />
                        </div>
                        <div className="col-11">
                          {field.type === "text" && (
                            <div className="pt-4">
                              {field.heading && <h4>{field.heading}</h4>}
                              <input
                                className={`form-control p-4 ${field.type}`}
                                type={field.type}
                                placeholder={field.placeholder}
                                value={field.isChecked ? field.inputValue : ""}
                                onChange={(event) => handleInputChange(field.id, event)}
                              />
                            </div>
                          )}
                          {field.type === "range" && (
                            <div className="d-flex gap-5 mt-4">
                              {field.heading && <h4>{field.heading}</h4>}
                              <input
                                className={` ${field.type}`}
                                type={field.type}
                                name=""
                                id=""
                                value={field.isChecked ? field.inputValue : ""}
                                onChange={(event) => handleInputChange(field.id, event)}
                              />
                            </div>
                          )}
                          {field.type === "date" && (
                            <>
                              {field.heading && <h4>{field.heading}</h4>}
                              <input
                                className={`form-control ${field.type}`}
                                type={field.type}
                                name=""
                                id=""
                                value={field.isChecked ? field.inputValue : ""}
                                onChange={(event) => handleInputChange(field.id, event)}
                              />
                            </>
                          )}
                          {field.type === "dropdown" && (
                            <div className="mt-4 d-flex">
                              {field.heading && <h4>{field.heading}</h4>}
                              <div className="dropdown">
                                <button
                                  className="btn btn-secondary dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  {field.selectedValue || field.name}
                                </button>
                                <ul className="dropdown-menu">
                                  {field.options.map((option) => (
                                    <li key={option}>
                                      <button
                                        className="dropdown-item"
                                        onClick={() => handleDropdownChange(field.id, option)}
                                      >
                                        {option}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col bg-light border border-3 rounded-3 p-4">
            <h1 className="text-center h2 fw-bolder pb-5 pt-2 text-danger ">
              <u>
                Job Recruitment Form
              </u>
            </h1>
            {fields.map((field) => (
              <form >
                <div key={field.id} className="mx-5 pt-2">
                  {field.isChecked && field.inputValue && (
                    <div className="h4">
                      {field.heading && <h4 className="h2 pt-3 text-primary fw-bold "><u>{field.heading}</u></h4>}
                      <p>{field.inputValue}</p>
                    </div>
                  )}
                </div>
              </form>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
