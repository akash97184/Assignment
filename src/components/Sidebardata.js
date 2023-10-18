import React from 'react';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as Io5Icons from "react-icons/io5"
import * as RiIcons from "react-icons/ri"
import * as TbIcons from "react-icons/tb"


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Product 1',
                path: '/products/product1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Product 2',
                path: '/products/product2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Customers',
        path: '/customers',
        icon: <RiIcons.RiContactsBook2Fill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Customer 1',
                path: '/customers/customer1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Customer 2',
                path: '/customers/customer2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Income',
        path: '/incomes',
        icon: <Io5Icons.IoWalletOutline />,
    },
    {
        title: 'Promote',
        path: '/promotes',
        icon: <TbIcons.TbDiscount2 />,
    },
    {
        title: 'Help',
        path: '/help',
        icon: <Io5Icons.IoHelpCircleOutline />,
    },

]