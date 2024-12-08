import React, { useEffect, useState } from 'react';
import ManageUser from '../../../views/ManageUser/ManageUser';
// fix part
import { fetchUsersData } from '../../../api/apiUser'; 

const UserManagePage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 


const UserManagePage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const userData = await fetchUsersData(); 
                setUsers(userData);
            } catch (err) {
                console.error('Error fetching user data:', err);
                setError('Please try again later!');
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Đang tải dữ liệu người dùng...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    }, []);

    return <ManageUser data={users} />;
};

export default UserManagePage;
