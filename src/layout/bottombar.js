import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const Bottombar = () => (
    <Footer style={{ textAlign: 'center' }}>
        <p>Copyright (c) 2022 All Rights Reserved,<b>ICAR-Indian Institute of Cashew Research</b>,</p>
        Funded by: RKVY-RAFTAAR, Govt. of Karnataka
    </Footer>
);

export default Bottombar;