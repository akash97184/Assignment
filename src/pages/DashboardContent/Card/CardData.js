import React from 'react';
import * as AiIcons from 'react-icons/ai'; 
import * as Hi2Icons from 'react-icons/hi2'; 
import {CiWallet} from 'react-icons/ci';
import { LuStore } from 'react-icons/lu';
import { RiFileListLine } from 'react-icons/ri';

export const CardData = [
    {
        title: 'Earning',
        icon1: <span style={{ backgroundColor:"rgb(146, 255, 146)", display: "flex", justifyContent:"center", alignItems:"center", width:"100%", height: "100%", borderRadius:"50%"}}><AiIcons.AiOutlineDollarCircle style={{ color: "green", objectFit:"fill" }}/></span>,
        price: `$198`,
        icon2: <Hi2Icons.HiArrowLongUp style={{ color: "rgb(0.00,0.80,0.53)" }}/>,
        rate: <span style={{ color: "green" }}>37.8%</span>,
        text: "this month",
    },
    {
        title: 'Orders',
        icon1: <span style={{ backgroundColor:"rgb(229, 168, 251)", display: "flex", justifyContent:"center", alignItems:"center", width:"100%", height: "100%", borderRadius:"50%"}}> <RiFileListLine  style={{ color: "rgb(126, 17, 165)" }}/></span>,
        price: `$198`,
        icon2: <Hi2Icons.HiArrowLongDown />,
        rate: '2%',
        text: "this month",
    },
    {
        title: 'Balance',
        icon1: <span style={{ backgroundColor:"#CCE6FF", display: "flex", justifyContent:"center", alignItems:"center", width:"100%", height: "100%", borderRadius:"50%"}} > <CiWallet style={{ color: "rgb(61, 122, 243)" }}/></span>,
        price: `$198`,
        icon2: <Hi2Icons.HiArrowLongDown />,
        rate: '2%',
        text: "this month",
    },
    {
        title: 'Total Sales',
        icon1: <span style={{ backgroundColor:"#FFCCFF", display: "flex", justifyContent:"center", alignItems:"center", width:"100%", height: "100%", borderRadius:"50%"}}><LuStore style={{ color: "#E600E6" }}/></span>,
        price: `$89k`,
        icon2: <Hi2Icons.HiArrowLongUp style={{ color: "rgb(0.00,0.80,0.53)" }} />,
        rate: <span style={{ color: "green" }}>11%</span>,
        text: "this month",
    },
]