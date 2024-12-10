import React, { useEffect, useState } from 'react';
import ManageUser from '../../../views/ManageUser/ManageUser';
import axios from 'axios';

const UserManagePage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://ea65-14-191-102-163.ngrok-free.app/api/user/', {
                    headers: { 'ngrok-skip-browser-warning': '69420' },
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleAddUser = async (newUser) => {
        try {
            const response = await axios.post('https://ea65-14-191-102-163.ngrok-free.app/api/user/', newUser, {
                headers: { 'ngrok-skip-browser-warning': '69420' },
            });
            setUsers([...users, response.data]);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleEditUser = async (updatedUser) => {
        try {
            const response = await axios.put(`https://ea65-14-191-102-163.ngrok-free.app/api/user/${updatedUser.username}`, updatedUser, {
                headers: { 'ngrok-skip-browser-warning': '69420' },
            });
            setUsers(users.map((user) =>
                user.username === updatedUser.username ? response.data : user
            ));
        } catch (error) {
            console.error('Error editing user:', error);
        }
    };

    const handleDeleteUser = async (username) => {
        try {
            await axios.delete(`https://ea65-14-191-102-163.ngrok-free.app/api/user/delete/${username}`, {
                headers: { 'ngrok-skip-browser-warning': '69420' },
            });
            setUsers(users.filter((user) => user.username !== username));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <ManageUser
            data={users}
            onAdd={handleAddUser}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
        />
    );
};

export default UserManagePage;
