import React from "react";

const JobForm = ({
  fields,
  onCheckboxChange,
  onInputChange,
  onDropdownChange,
  onDuplicate,
  onDelete,
}) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-scrollable"
        style={{ marginLeft: "12rem" }}
      >
        <div className="modal-content">
          <div className="modal-header justify-content-end gap-3">
            <button className="btn btn-info text-light" onClick={onDuplicate}>
              Duplicate
            </button>
            <button className="btn btn-danger" onClick={onDelete}>
              Delete
            </button>
          </div>
          <div className="modal-body">
            {fields.map((field) => (
              <div key={field.id} className="row mb-3">
                <div className="col-1">
                  <input
                    type="checkbox"
                    checked={field.isChecked}
                    onChange={() => onCheckboxChange(field.id)}
                  />
                </div>
                <div className="col-11">
                  {field.type === "text" && (
                    <>
                      {field.heading && <h4>{field.heading}</h4>}
                      <input
                        className={`form-control ${field.type}`}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={field.isChecked ? field.inputValue : ""}
                        onChange={(event) => onInputChange(field.id, event)}
                      />
                    </>
                  )}
                  {field.type === "range" && (
                    <>
                      {field.heading && <h4>{field.heading}</h4>}
                      <input
                        className={`mx-5 ${field.type}`}
                        type={field.type}
                        name=""
                        id=""
                        value={field.isChecked ? field.inputValue : ""}
                        onChange={(event) => onInputChange(field.id, event)}
                      />
                    </>
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
                        onChange={(event) => onInputChange(field.id, event)}
                      />
                    </>
                  )}
                  {field.type === "dropdown" && (
                    <>
                      {field.heading && <h4>{field.heading}</h4>}
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {field.selectedValue || "Dropdown button"}
                        </button>
                        <ul className="dropdown-menu">
                          {field.options.map((option, index) => (
                            <li key={index}>
                              <a
                                className="dropdown-item"
                                href="#"
                                onClick={() =>
                                  onDropdownChange(field.id, option)
                                }
                              >
                                {option}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
