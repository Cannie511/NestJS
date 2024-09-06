/* eslint-disable prettier/prettier */
import { Layout } from 'antd';
import React from 'react';

const AdminFooter = () => {
    const { Footer } = Layout;
    return (
        <Footer style={{ textAlign: 'center' }}>
            Freet ©{new Date().getFullYear()} Powered by Cannie
        </Footer>
    );
};

export default AdminFooter;
