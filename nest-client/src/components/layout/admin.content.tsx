'use client';
import { Layout } from 'antd';
/* eslint-disable prettier/prettier */

import React, { ReactNode } from 'react'

const AdminContent = ({ children }: { children: ReactNode }) => {
    const { Content } = Layout;
  return (
    <Content style={{ margin: '24px 16px 0' }}>
        <div
            style={{
            padding: 24,
            minHeight: 360,
            background: '#ccc',
            borderRadius: '#ccc',
            }}
        >
            {children}
        </div>
    </Content>
  )
}

export default AdminContent