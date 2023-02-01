import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Introduction',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    active:'intro'
  },  {
    title: 'One tap Check-Out',
    path: '/Inline',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
    active:'one'
  },
  {
    title: 'Creating user account',
    path: '/Account',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    active:'acc'
  },
  {
    title: 'API features',
    path: '/Products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
    active:'products'
  },
  {
    title: 'User auth',
    path: '/Auth',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
    active:'auth'
  },
  {
    title: 'User account details',
    path: '/Detail',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
    active:'detail'
  },
  {
    title: 'Deposit',
    path: '/Deposit',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
    active:'deposit'
  }
];
