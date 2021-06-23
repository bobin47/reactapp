import React from "react";

function Shoes(props) {
  //const { id, name, alias, price, image, description } = props;
  const { shoesList } = props;
  console.log(shoesList);
  const renderList = () => {
    return shoesList.map((shoes) => {
      return (
        <div key={shoes.id}>
          <div className="col-2">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={shoes.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{shoes.name}</h5>
                <div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Launch demo modal
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Modal title
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            Giá {shoes.description}
                          </div>
                          <div className="modal-footer">
                            <button
                              data-dismiss="modal"
                              type="button"
                              className="btn btn-primary"
                            >
                              Mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="">
      <div className="row">{renderList()}</div>
    </div>
  );
}

export default Shoes;
