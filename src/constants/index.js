// class project {
//     constructor(){
//         this.title = 'string';
//         this.techStack = ['string'];
//         this.shortDescription = 'string';
//         this.description = {introduction:'string', role:'string'};
//         this.codeDisclaimer = boolean;
//         this.linkCode = [{type: 'string', link: 'string'}];
//         this.linkWeb = 'string';
//         this.thumbnail = 'string';
//         this.interfaces = [{description: 'string', link: 'string'}];
//     }
// }

export let projects = [
    {},
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
        thumbnail: '/images/2023-bnec-recruitment/2023-bnec-recruitment-thumb.png',
        interfaces: [
            {
                description: 'Landing Page', 
                link: '/images/2023-bnec-recruitment/2023-bnec-recruitment-1.jpeg'
            },
            {
                description: 'TOEFL Registration Form', 
                link: '/images/2023-bnec-recruitment/2023-bnec-recruitment-2.jpeg'
            },
            {
                description: 'User Dashboard', 
                link: '/images/2023-bnec-recruitment/2023-bnec-recruitment-3.jpeg'
            },
            {
                description: 'Admin Dashboard', 
                link: '/images/2023-bnec-recruitment/2023-bnec-recruitment-4.jpeg'
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
        thumbnail: '/images/2023-seo/2023-seo-thumb.png',
        interfaces: [
            {
                description: 'Landing Page', 
                link: '/images/2023-seo/2023-seo-1.jpeg'
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
        thumbnail: '/images/piscis-aquarium/piscis-aquarium-thumb.png',
        interfaces: [
            {
                description: 'Landing Page', 
                link: '/images/piscis-aquarium/piscis-aquarium-1.jpeg'
            }, 
            {
                description: 'Encylopedia Page',
                link: '/images/piscis-aquarium/piscis-aquarium-2.jpeg'
            },
            {
                description: 'About Us Page',
                link: '/images/piscis-aquarium/piscis-aquarium-3.jpeg'
            },
            {
                description: 'Contact Us Page',
                link: '/images/piscis-aquarium/piscis-aquarium-4.jpeg'
            }
        ]
    }
]