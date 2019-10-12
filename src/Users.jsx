import React, {Component} from 'react'
import UserCard from './UserCard'
import axios from 'axios'


class Users extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            users:[]
        }
    }
    //             CON FETCH
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
    //     .then( answer => answer.json())
    //     .then( answer2 => {
    //         this.setState({
    //             users: answer2
    //         })
    //     })
    // }

    //          CON AXIOS
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(answer => {
            this.setState({
                users: answerdata
            })
        })
    }

    render() {
        const { users } = this.state
        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                    {
                        users.length === 0
                        ? <h1 className="t3">Cargando...</h1>
                            :users.map(u => (
                            <UserCard
                            key={u.id}
                            name={u.name}
                            username={u.username}
                            email={u.email}
                            />
                    ))}
                </div>
            </div>
        )
    }
}

export default Users