import React, { useEffect, useState } from 'react';
import ManageUser from '../../../views/ManageUser/ManageUser';
import axios from 'axios';

const UserManagePage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://f1d0-14-191-102-163.ngrok-free.app/api/user/', {
                    method: 'GET',
                    headers: new Headers({
                        'ngrok-skip-browser-warning': '69420',
                    }),
                });
                const data = await response.json();
                setUsers(data);
            } catch (e) {
                console.error('Error fetching users:', e);
            }
        };

        fetchUsers();
    }, []);

    const handleAddUser = async (newUser) => {
        try {
            const response = await axios.post('https://a156-14-191-102-163.ngrok-free.app/api/user/', newUser, {
                headers: { 'ngrok-skip-browser-warning': '69420' },
            });
            setUsers([...users, response.data]);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleEditUser = async (updatedUser) => {
        try {
            const response = await fetch(`https://a156-14-191-102-163.ngrok-free.app/api/user/${updatedUser.id}`, {
                method: 'PUT',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': '69420',
                }),
                body: JSON.stringify(updatedUser),
            });
            const data = await response.json();
            setUsers(users.map((user) => (user.id === updatedUser.id ? data : user)));
        } catch (error) {
            console.error('Error editing user:', error);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            // Call the API to delete the user using fetch
            await fetch(`https://a156-14-191-102-163.ngrok-free.app/api/user/${userId}`, {
                method: 'DELETE',
                headers: new Headers({
                    'ngrok-skip-browser-warning': '69420',
                }),
            });
            setUsers(users.filter((user) => user.id !== userId));
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
