// interface project {
//     title: string,
//     techStack: string[],
//     shortDescription: string,
//     description: {
//         introduction: string, 
//         role: string
//     },
//     codeDisclaimer: boolean,
//     linkCode: [
//         {
//             type: string, 
//             link: string
//         }
//     ] | null,
//     linkWeb: string | null,
//     thumbnail: string,
//     interfaces:{
//         description: string, 
//         link: string
//     }[] | null;
// };

export let projects = [
    {},
    {
        title: 'Zeal',
        techStack: ['React.js', 'Next.js', 'NextAuth', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'MUI'],
        shortDescription: `Online learning platform with integrated features to streamline student's learning process.`,
        description: {
            introduction: `A project made for my thesis. For this project, we made an online learning platform that has all of the features that student's need when they are studying. Therefore they can use this application as one stop solution without having the need to switch between multiple applications. Some of those features are <b>courses</b>, <b>notes</b>, <b>forum</b>, <b>schedule</b>, and <b>contact</b> (student can chat and call with each outher).`,
            role: 'It was developed by a team of 3 person. We did the research, requirements gathering, system design, code development, testing, and evaluation of the application. During development, I was mainly in charge of the contact feature as well as helping other member to fix bugs.'
        },
        codeDisclaimer: false,
        linkCode: [
            {
                type: 'Code',
                link: 'https://github.com/guidowilliam11/e-learning'
            }

        ],
        linkWeb: null,
        thumbnail: '/images/zeal/zeal-dashboard.webp',
        interfaces: [
            {
                description: 'Dashboard Page', 
                link: '/images/zeal/zeal-dashboard.webp'
            },
            {
                description: 'Courses Page', 
                link: '/images/zeal/zeal-courses.webp'
            },
            {
                description: 'Sessions in Courses', 
                link: '/images/zeal/zeal-courses-sessions.webp'
            },
            {
                description: 'Notes Page', 
                link: '/images/zeal/zeal-notes.webp'
            },
            {
                description: 'Editor for Note', 
                link: '/images/zeal/zeal-notes-editor.webp'
            },
            {
                description: 'Forum Page', 
                link: '/images/zeal/zeal-forum.webp'
            },
            {
                description: 'Forum Post', 
                link: '/images/zeal/zeal-forum-post.webp'
            },
            {
                description: 'Schedule Page', 
                link: '/images/zeal/zeal-schedule.webp'
            },
            {
                description: 'Contact Page', 
                link: '/images/zeal/zeal-contact.webp'
            },
            {
                description: 'Call Pop Up', 
                link: '/images/zeal/zeal-contact-call.webp'
            },
        ]
    },
    {
        title: '2023 BNEC Recruitment',
        techStack: ['VueJS', 'Tailwind CSS', 'Laravel', 'MySQL'],
        shortDescription: 'Web Application to accomodate various registration processes for BNEC Entities.',
        description: {
            introduction: 'As the Assistant Manager of BNEC\'s 30th IT Division, my main task was to develop the Recruitment Website using a service oriented architechture with APIs. We used VueJS, Laravel, Tailwind CSS, MySQL. This website has features to accommodate registration processes for both registrants and admins. For registrants there are features like TOEFL registration forms, payment forms, and so on. For admins, there are features for managing registrant details, member payments, environments, and so on.',
            role: 'My role was to lead the development team from Kemanggisan Region, plan the code implementation, and implement the code on both VueJS & Laravel. I was in charge of making all of the admin features, authentication, and implementing the code for UI designs.'
        },
        codeDisclaimer: true,
        linkCode: null,
        linkWeb: 'https://recruitment.mybnec.org',
        thumbnail: '/images/2023-bnec-recruitment/2023-bnec-recruitment-thumb.webp',
        interfaces: [
            {
                description: 'Landing Page', 
                link: '/images/2023-bnec-recruitment/2023-bnec-recruitment-1.webp'
            },
            {
                description: 'TOEFL Registration Form', 
                link: '/images/2023-bnec-recruitment/2023-bnec-recruitment-2.webp'
            },
            {
                description: 'User Dashboard', 
                link: '/images/2023-bnec-recruitment/2023-bnec-recruitment-3.webp'
            },
            {
                description: 'Admin Dashboard', 
                link: '/images/2023-bnec-recruitment/2023-bnec-recruitment-4.webp'
            }
        ]
    },
    {
        title: '2023 School English Olympics',
        techStack: ['Bootstrap', 'Laravel', 'MySQL'],
        shortDescription: 'Web Application to accomodate registration process for the 2023 School English Olympics.',
        description: {
            introduction: 'The 2023 School English Olympics is website to accomodate the registration processes for an english competition held by BNEC Bekasi. It mainly serves as an information center for the registrants. It also have several admin features to manage the FAQs and sponsors on the landing page.',
            role: 'I was in charge of implementing the sponsors feature and helping some code implementations for the UI.'
        },
        codeDisclaimer: true,
        linkCode: null,
        linkWeb: 'https://seo.mybnec.org',
        thumbnail: '/images/2023-seo/2023-seo-thumb.webp',
        interfaces: [
            {
                description: 'Landing Page', 
                link: '/images/2023-seo/2023-seo-1.webp'
            }, 
        ]
    },
    {
        title: 'Indonesian Youth Olympics',
        techStack: ['Bootstrap', 'Laravel', 'MySQL'],
        shortDescription: 'Web Application that acts as a competition portal where you can find and register for competitions.',
        description: {
            introduction: 'This web application was made as the final project of Software Engineering Course. The Indonesian Olympics is website that acts a portal for competitions. You can find various competitions here and register for the competition. It also have admin features to manage the Competitions, Payments, and Participants.',
            role: 'I was in charge of designing the Use Case Diagram, Entity Relation Ship Diagram, and implementing the codes for those designs.'
        },
        codeDisclaimer: false,
        linkCode: [
            {
                type: 'Code',
                link: 'https://github.com/lahkokaku/rm22_app'
            }
        ],
        linkWeb: null,
        thumbnail: '/images/iyo/iyo-thumb.webp',
        interfaces: [
            {
                description: 'Landing Page', 
                link: '/images/iyo/iyo-1.webp'
            }, 
            {
                description: 'Competitions List Page', 
                link: '/images/iyo/iyo-2.webp'
            }, 
            {
                description: 'Competitions Registration Form Page', 
                link: '/images/iyo/iyo-3.webp'
            }, 
            {
                description: 'Admin Dashboard', 
                link: '/images/iyo/iyo-4.webp'
            }, 
        ]
    },
    {
        title: 'Piscis Aquarium',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        shortDescription: 'A simple encylopedia website about marine animals.',
        description: {
            introduction: 'This was a project made for the final assignment of the Human & Computer Interaction Laboratory Class. It was made using pure HTML, CSS, and JavaScript',
            role: 'I was in charge making the whole thing as it was an individual project.',
        },
        codeDisclaimer: false,
        linkCode: [
            {
                type: 'Code',
                link: 'https://github.com/lahkokaku/piscis-aquarium'
            }
        ],
        linkWeb: null,
        thumbnail: '/images/piscis-aquarium/piscis-aquarium-thumb.webp',
        interfaces: [
            {
                description: 'Landing Page', 
                link: '/images/piscis-aquarium/piscis-aquarium-1.webp'
            }, 
            {
                description: 'Encylopedia Page',
                link: '/images/piscis-aquarium/piscis-aquarium-2.webp'
            },
            {
                description: 'About Us Page',
                link: '/images/piscis-aquarium/piscis-aquarium-3.webp'
            },
            {
                description: 'Contact Us Page',
                link: '/images/piscis-aquarium/piscis-aquarium-4.webp'
            }
        ]
    }
]