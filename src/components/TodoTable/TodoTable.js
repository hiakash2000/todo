import React, { Component, Fragment } from "react";
import Axios from "axios";
import { getAllTodos } from "../../constants/api";

class TodoTable extends Component {
  state = {
    data: []
  };

  componentWillReceiveProps = props => {
    console.log(parseInt(props.searchBy));
    this.setState(
      {
        // data: this.state.data.filter(curr => curr.id == this.props.searchBy)
        data: this.state.data.filter(curr => curr.id == props.searchBy)
      },
      console.log(this.state.data)
    );
  };

  getData = () => {
    Axios.get(getAllTodos).then(res => {
      this.setState({ data: res.data });
    });
  };

  componentDidMount = () => {
    this.getData();
  };
  render() {
    let renderData = this.state.data
      ? this.state.data.map((curr, index) => {
          return (
            <tr key={curr.id}>
              <td>{curr.id}</td>
              <td>{curr.title}</td>
            </tr>
          );
        })
      : null;
    return (
      <Fragment>
        <table>
          <tbody>{renderData}</tbody>
        </table>
      </Fragment>
    );
  }
}

export default TodoTable;
