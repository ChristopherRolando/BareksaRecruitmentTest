import React from 'react';
import axios from 'axios';
import Calendar from './Calendar'
import './Order.css'

class Order extends React.Component {
    state = {
        users : []
    } 
    componentDidMount() {
        axios.get(`https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard`)
          .then(res => {
            const users = res.data.data.orders;
            this.setState({ users });
          console.log(users)

          })
    }
    render(){
        const { users } = this.state
        return (
            <div className="row">
                <div>
                    <Calendar />
                </div>
                <div>
                    <h2>Orders</h2>
                    <table className="ui single line table data">
                        <thead>
                            <tr>
                                <th>Order Number</th>
                                <th>Status</th>
                                <th>Operator</th>
                                <th>Location</th>
                                <th>Start Date</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map(user =>
                                <tr>
                                    <td className="column">#{user.conversion_revenue}</td>
                                    <td className="column">{user.status}</td>
                                    <td className="column">{user.full_name}</td>
                                    <td className="column">{user.location}</td>
                                    <td className="column">{user.start_date}</td>
                                    <td className="column">{user.due_date}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Order;