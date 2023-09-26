
import { useEffect, useState } from "react";
import Axios from "axios";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const App = () => {
  const [users,setUsers] =useState([]);
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
setUsers(res.data)
    })
  })
  return (
    <Container style={{textAlign:  "center",
    fontSize: 18
    }}>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>S.NO</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
       {users.map((user) => {
    return<tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.username}</td>
    <td>{user.email}</td>
  </tr>
       })}
      </tbody>
    </Table>
    </Container>
  )
}
export default App