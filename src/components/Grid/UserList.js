import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserList = () => {
    const state = useSelector(state => state.user);
    return <Table bordered striped>
        <tr>
            <th>
                First Name
            </th>
            <th>
                Last Name
            </th>
            <th>
                Email Address
            </th>
        </tr>
        {state.map((user)=>{
            return <tr key={user.email}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
            </tr>
        })}
    </Table>
}
export default UserList;