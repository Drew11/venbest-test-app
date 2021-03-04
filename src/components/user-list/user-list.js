import React, {useState, useEffect} from 'react';
import './user-list.css';
import axios from 'axios';

const UserList = (props) => {

    const {filter} = props;
    const [users, setUsers] = useState(null);

    useEffect(()=>{
        async function fetch () {
            const promise= await axios.get(`https://venbest-test.herokuapp.com/`);
            setUsers(promise.data);
            console.log(promise.data);
        }
        fetch();
    }, []);


    const getFilteredUsers = ()=>{

        let filteredUsers = users.filter(user=>{
            if( user.name.toLocaleLowerCase().includes(filter.name.toLocaleLowerCase())
                &&
                user.lastname.toLocaleLowerCase().includes(filter.lastname.toLocaleLowerCase())
                &&
                filter.sex[user.sex]
            ) {
                    return user
            }
        });

        if(filter.age){
            filteredUsers = filteredUsers.filter(user=>user.age === filter.age)
        }
        return filteredUsers;
    };


    const userList = users?
        getFilteredUsers().map((user, idx)=>
            <li key={idx}>
                <span>
                   {user.name}
                </span>
                <span>
                    {user.lastname}
                </span>
                <span>
                    {user.sex}
                </span>
                <span>
                    {user.age}
                </span>
            </li>
        )
        :
        <h2>loading...</h2>;

    return (
        <ul className="user-list">
            {userList}
        </ul>
    );
};

export default UserList;
