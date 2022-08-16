import { TbUsers } from 'react-icons/tb';

export const cardData= [
    {
        percentage: 50,
        title: 'Total students',
        number: 450,
        color: 'cyan',
        icon: <TbUsers className='icon' />

    },
     {
        percentage: 40,
        title: 'New Students',
        number: 158,
        color: 'orange',
        icon: <TbUsers className='icon' />

    },
     {
        percentage: 20,
        title: 'Total Course',
        number: 158,
        color: 'primary',
        icon: <TbUsers className='icon' />

    },
     {
        percentage: 60,
        title: 'New Students',
        number: 158,
        color: 'red',
        icon: <TbUsers className='icon' />

    }
]

export const table = {
    headerItems: [
        'Name', 
        'Department', 
        'Email',
        'Class Name',
        'Subject',
        'Action'
    ],
    content: [
        {
            name: 'John Doe',
            department: 'Science',
            email: 'example@email.com',
            className: 'Class A',
            subject: 'CSE',
            action: 'View'
        },
         {
            name: 'Melody Leonard',
            department: 'Engineering',
            email: 'example@email.com',
            className: 'Class C',
            subject: 'CSE',
            action: 'View'
        },
         {
            name: 'John Doe',
            department: 'Maths',
            email: 'example@email.com',
            className: 'Class A',
            subject: 'CSE',
            action: 'View'
        },
         {
            name: 'Kate Johnson',
            department: 'English',
            email: 'kate@email.com',
            className: 'Class A',
            subject: 'English',
            action: 'View'
        },
         {
            name: 'John Doe',
            department: 'Computer Science',
            email: 'example@email.com',
            className: 'Class B',
            subject: 'CSE',
            action: 'View'
        },
         {
            name: 'John Doe',
            department: 'Computer Science',
            email: 'example@email.com',
            className: 'Class C',
            subject: 'Science',
            action: 'View'
        },

    ]
}