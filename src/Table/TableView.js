import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import PopUp from "../PopUp/PopUp";
import Button from "react-bootstrap/Button";

function TableView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const respond = await axios(
        "https://mocki.io/v1/90bf9a0f-885a-42dd-8e25-452ff261a4dc"
      );
      setData(respond.data);
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const removeItem = data.filter((data) => data !== id);
    console.log(id);
    setData(removeItem);
  };

  const handleUpdate = (id) => {
    alert("Values being updated placeholder");
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>orderNo</th>
          <th>date</th>
          <th>customer</th>
          <th>trackingNo</th>
          <th>status</th>
          <th>consignee</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data) => (
          <tr key={data.orderNo}>
            <td>{data.orderNo}</td>
            <td>{data.date}</td>
            <td>{data.customer}</td>
            <td>{data.status}</td>
            <td>{data.consignee}</td>
            <td>{data.orderNo}</td>

            <th>
              <PopUp data={data} onUpdate={handleUpdate} key={data.orderNo} />
            </th>
            <th>
              <Button
                onClick={() => {
                  handleDelete(data);
                }}
              >
                Delete
              </Button>
            </th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableView;
