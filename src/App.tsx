const App = () => {
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <div className="sidebar p-3 mt-5 bg-light">
            <div className="d-flex align-items-start">
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="btn btn-primary"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  New Job ➕
                </button>
                <button
                  className="btn btn-primary mt-3"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Job Post #1
                </button>
              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                  tabIndex={0}
                >
                  <form>
                    <div className="top-row d-flex">
                      <div className="left-section flex-start">
                        <input type="checkbox" name="" id="" className="mx-4" />
                        <input type="text" name="" id="" placeholder="Job Post Title" className="py-2 px-3" />
                      </div>
                      <div className="right-section d-flex flex-row mx-5 px-5">
                        <h1 className="h3">Active?</h1>
                        <input type="checkbox"/>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                  tabIndex={0}
                >
                  Job Post
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="main-section">
            <h1>hiii</h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App