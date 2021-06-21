import React, { Component } from "react";

export default class Header extends Component {
  state = {
    islogin: false,
    arrSanPham: [
      { maSP: 1, tenSP: "Iphone 11 pro", gia: 100 },
      { maSP: 1, tenSP: "Iphone 11 pro", gia: 100 },
      { maSP: 1, tenSP: "Iphone 11 pro", gia: 100 },
    ],
  };
  check = () => {
    this.setState({
      islogin: true,
    });
  };

  renderProducer = {
    name: "chuong",
  };

  showName = () => {
    console.log("chuong");
  };
  name = "chuong";

  renderTable = () => {
    return this.state.arrSanPham.map((sp, index) => {
      return (
        <tr>
          <th scope="row">{sp.maSP}</th>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>{sp.gia}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>this is header</h1>
        <div className="container">My name is {this.renderProducer.name}</div>
        <button onClick={this.showName} className="btn btn-dark">
          Show Name
        </button>
        <div>
          {this.state.islogin ? (
            <b>hello {this.name}</b>
          ) : (
            <button onClick={this.check} className="btn btn-primary">
              login
            </button>
          )}
        </div>

        <h3>this is my table</h3>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Ma san Pham</th>
                <th scope="col">Ten san Pham</th>
                <th scope="col">Gia san Pham</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
