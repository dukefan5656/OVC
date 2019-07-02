import React from "react";
import "react-table/react-table.css";
import ReactTable from "react-table";

export default class Table extends React.Component {
  render() {
    const columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: e => <a href={e.value}> {e.value} </a>
      },
      {
        Header: "City",
        accessor: "address.city"
      },
      {
        Header: "Company",
        accessor: "company.name"
      }
    ];
    return (
      <ReactTable columns={columns} data={this.props.users} pageSize={10} />

      //included example of the table being created without react-table

      // <table className = "users-table">
      //   <thead>
      //     <tr>
      //       <th>Name</th>
      //       <th>Email</th>
      //       <th>City</th>
      //       <th>Company</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {this.props.users.map(user => {
      //       return (
      //         <tr key={user.id}>
      //           <td>{user.name}</td>
      //           <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
      //           <td>{user.address.city}</td>
      //           <td>{user.company.name}</td>
      //         </tr>
      //       );
      //     })}
      //   </tbody>
      // </table>
    );
  }
}
