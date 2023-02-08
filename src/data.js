simulation['Company Account'] = {
    'companyAccount': 9000000
};

//Scrub additionalCosts
simulation['Additional Costs'] = {
    'Costs': {
        'na': 0
    }
}

simulation['Pricing'] = {
    'new': {
        "web": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "database": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "server": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "app": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        }

    },
    'modification': {
        "web": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "database": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "server": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "app": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        }
    },
    'integration': {
        "web": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "database": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "server": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "app": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "software": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        }
    },
    'webDev': {
        'small': 1500,
        'medium': 1750,
        'large': 2000,
        'enterprise': 2500
    }
}

//this could be something that is input if the simulation is running a prexisting project for example
// simulation['Tech Stacks'] ={
// }
simulation['Project Team'] = {

    'Development Team': {
        "Phil Elverum": {
            'age': 30,
            'role': 'Senior Developer',
            'experience': 6,
            'tenure': 2,
            'salary': 62000,
            'front-end': {

            },
            'back-end': {

            }
        },
        "Mimi Parker": {
            'age': 37,
            'role': 'Lead Developer',
            'experience': 14,
            'tenure': 7,
            'salary': 60000
        },
        "Stuart Staples": {
            'age': 23,
            'role': 'Junior Developer',
            'experience': 1,
            'tenure': 1,
            'salary': 28000
        },
        "Jackson Frank": {
            'age': 29,
            'role': 'Junior Developer',
            'experience': 3,
            'tenure': 1,
            'salary': 31000
        },
        "Warren Ellis": {
            'age': 26,
            'role': 'Junior Developer',
            'experience': 3,
            'tenure': 2,
            'salary': 29000
        },
        "Krustin Hayter": {
            'age': 27,
            'role': 'Junior Developer',
            'experience': 4,
            'tenure': 4,
            'salary': 33000
        }
    },
    'Design': {
        "Chrustia Cabral": {
            'age': 33,
            'role': 'Design',
            'experience': 10,
            'tenure': 3,
            'salary': 37000
        }
    },
    'Testing': {
        "Mark Eitzel": {
            'age': 31,
            'role': 'Testing',
            'experience': 6,
            'tenure': 4,
            'salary': 30000
        },
        "Stephen Merritt": {
            'age': 26,
            'role': 'Testing',
            'experience': 3,
            'tenure': 3,
            'salary': 26000
        }
    },
    'Project Managers': {
        "Brian Chippendale": {
            'age': 45,
            'role': 'Project Manager',
            'experience': 23,
            'tenure': 15,
            'salary': 54000
        }
    }
};

// Real life example. It terms of whether own comp[any actually takes over the costs for server maintence I'm not 100% sure. Keep simple anyway for now. Just to show how different types of projects may look
simulation['Projects'] = {
    'Proposed MindMe': {
        name: 'Mind Me Stripe Integration',
        company: 'Mind Me ie',
        industry: 'Healthcare',
        type: 'integration',
        size: 'medium',
        techstack: {
            web: 'PHP',
            database: 'Maria SQL',
            server: 'linux'
        },
        hosting: 'aws',
        integration: {
            software: 'Stripe',
            app: 'Web'
        }
    }
}

simulation['Ad Hoc Costs'] = {
    'Office Rental': 3000,
    'Building Insurance': 350,
    'Employee Insurance': 400,
    'Pension Scheme': 1400,
    'Software Licenses': 6000,
    'Hardware': 8000,
    'Premises Upkeep': 500,
    'Electricity': 600,
    'Heating': 400,
    //Might be one off instead
    'Socil Fund': 750,
    //Might be one off instead
    'Training': 1500,
    'Employee Expenses': 800
}

simulation['Projects']['Proposed Project'] = {
    'company': 'Company Name',
    'companyIdustry': 'Finance',
    'title': 'Proposed Project',
    'type': 'web development',
    'size': 'large',
    'techstack': {
        'web': 'default',
        'app': 'default',
        'database': 'default',
        'server': 'default'
    },
    'hosting': 'default',
    'webDev': {
        'web': 'enterprise'
    },
    //months
    'proposedTimeline': 14,

}
// Real life example. It terms of whether own comp[any actually takes over the costs for server maintence I'm not 100% sure. Keep simple anyway for now. Just to show how different types of projects may look
/*
small intergration
*/
simulation['Projects']['Proposed Project'] = {
    name: 'Mind Me Stripe Integration',
    company: 'Mind Me ie',
    industry: 'Healthcare',
    type: 'integration',
    size: 'medium',
    techstack: {
        web: 'PHP',
        database: 'Maria SQL',
        server: 'linux'
    },
    hosting: 'aws',
    integration: {
        software: 'small',
        app: 'small'
    }
}

/*
medium intergration
*/
simulation['Projects']['Proposed Project'] = {

    name: 'Mind Me Stripe Integration',
    company: 'Mind Me ie',
    industry: 'Healthcare',
    type: 'integration',
    size: 'medium',
    techstack: {
        web: 'PHP',
        database: 'Maria SQL',
        server: 'linux'
    },
    hosting: 'aws',
    integration: {
        software: 'medium',
        app: 'medium'
    }
}


/*
large intergration
*/
simulation['Projects']['Proposed Project'] = {
    name: 'Mind Me Stripe Integration',
    company: 'Mind Me ie',
    industry: 'Healthcare',
    type: 'integration',
    size: 'medium',
    techstack: {
        web: 'PHP',
        database: 'Maria SQL',
        server: 'linux'
    },
    hosting: 'aws',
    integration: {
        software: 'large',
        app: 'large'
    }
}


/*
integration intergration
*/
simulation['Projects']['Proposed Project'] = {

    name: 'Mind Me Stripe Integration',
    company: 'Mind Me ie',
    industry: 'Healthcare',
    type: 'integration',
    size: 'medium',
    techstack: {
        web: 'PHP',
        database: 'Maria SQL',
        server: 'linux'
    },
    hosting: 'aws',
    integration: {
        software: 'enterprise',
        app: 'enterprise'
    }
}


/*
small modification
*/
simulation['Projects']['Proposed Project'] = {

    name: 'Sommerviles web and app',
    company: 'Somervilles',
    industry: 'Retail',
    type: 'modification',
    size: 'medium',
    techstack: {
        web: 'PHP',
        app: 'Swift',
        database: 'Maria SQL',
        server: 'linux'
    },
    hosting: 'aws',
    modification: {
        web: 'small',
        app: 'small',
        database: 'small',
        server: 'small'
    }
}

/*
medium modification
*/
simulation['Projects']['Proposed Project'] = {

    name: 'Sommerviles web and app',
    company: 'Somervilles',
    industry: 'Retail',
    type: 'modification',
    size: 'medium',
    techstack: {
        web: 'PHP',
        app: 'Swift',
        database: 'Maria SQL',
        server: 'linux'
    },
    hosting: 'aws',
    modification: {
        web: 'medium',
        app: 'medium',
        database: 'medium',
        server: 'medium'
    }
}

/*
large modification
*/
simulation['Projects']['Proposed Project'] = {

    name: 'Sommerviles web and app',
    company: 'Somervilles',
    industry: 'Retail',
    type: 'modification',
    size: 'medium',
    techstack: {
        web: 'PHP',
        app: 'Swift',
        database: 'Maria SQL',
        server: 'linux'
    },
    hosting: 'aws',
    modification: {
        web: 'large',
        app: 'large',
        database: 'large',
        server: 'large'
    }
}

/*
enterprise modification
*/
simulation['Projects']['Proposed Project'] = {

    name: 'Sommerviles web and app',
    company: 'Somervilles',
    industry: 'Retail',
    type: 'modification',
    size: 'medium',
    techstack: {
        web: 'PHP',
        app: 'Swift',
        database: 'Maria SQL',
        server: 'linux'
    },
    hosting: 'aws',
    modification: {
        web: 'enterprise',
        app: 'enterprise',
        database: 'enterprise',
        server: 'enterprise'
    }
}


/*
small new
*/
simulation['Projects']['Proposed Project'] = {
    name: 'Wilsons Auctioning System',
    company: 'Wilsons Auctions',
    industry: 'Retail',
    type: 'new',
    size: 'enterprise',
    techstack: {
        web: 'default',
        app: 'default',
        database: 'default',
        server: 'default'
    },
    hosting: 'default',
    new: {
        web: 'small',
        app: 'small',
        database: 'small',
        server: 'small'
    }
}

/*
medium new
*/
simulation['Projects']['Proposed Project'] = {
    name: 'Wilsons Auctioning System',
    company: 'Wilsons Auctions',
    industry: 'Retail',
    type: 'new',
    size: 'enterprise',
    techstack: {
        web: 'default',
        app: 'default',
        database: 'default',
        server: 'default'
    },
    hosting: 'default',
    new: {
        web: 'medium',
        app: 'medium',
        database: 'medium',
        server: 'medium'
    }
}

/*
large new
*/
simulation['Projects']['Proposed Project'] = {
    name: 'Wilsons Auctioning System',
    company: 'Wilsons Auctions',
    industry: 'Retail',
    type: 'new',
    size: 'enterprise',
    techstack: {
        web: 'default',
        app: 'default',
        database: 'default',
        server: 'default'
    },
    hosting: 'default',
    new: {
        web: 'large',
        app: 'large',
        database: 'large',
        server: 'large'
    }
}

/*
enterprise new
*/
simulation['Projects']['Proposed Project'] = {
    name: 'Wilsons Auctioning System',
    company: 'Wilsons Auctions',
    industry: 'Retail',
    type: 'new',
    size: 'enterprise',
    techstack: {
        web: 'default',
        app: 'default',
        database: 'default',
        server: 'default'
    },
    hosting: 'default',
    new: {
        web: 'enterprise',
        app: 'enterprise',
        database: 'enterprise',
        server: 'enterprise'
    }
}

/*
small web
*/
simulation['Projects']['Proposed Project'] = {
    component: 'Proposed Project',
    company: 'Company Name',
    companyIdustry: 'Finance',
    title: 'Proposed Project',
    type: 'web development',
    size: 'large',
    techstack: {
        web: 'default',
        app: 'default',
        database: 'default',
        server: 'default'
    },
    hosting: 'default',
    webDev: {
        web: 'small'
    }
}

/*
medium web
*/
simulation['Projects']['Proposed Project'] = {
    component: 'Proposed Project',
    company: 'Company Name',
    companyIdustry: 'Finance',
    title: 'Proposed Project',
    type: 'web development',
    size: 'large',
    techstack: {
        web: 'default',
        app: 'default',
        database: 'default',
        server: 'default'
    },
    hosting: 'default',
    webDev: {
        web: 'medium'
    }
}

/*
large web
*/
simulation['Projects']['Proposed Project'] = {
    component: 'Proposed Project',
    company: 'Company Name',
    companyIdustry: 'Finance',
    title: 'Proposed Project',
    type: 'web development',
    size: 'large',
    techstack: {
        web: 'default',
        app: 'default',
        database: 'default',
        server: 'default'
    },
    hosting: 'default',
    webDev: {
        web: 'large'
    }
}

/*
enterprise web
*/
simulation['Projects']['Proposed Project'] = {
    component: 'Proposed Project',
    company: 'Company Name',
    companyIdustry: 'Finance',
    title: 'Proposed Project',
    type: 'web development',
    size: 'large',
    techstack: {
        web: 'default',
        app: 'default',
        database: 'default',
        server: 'default'
    },
    hosting: 'default',
    webDev: {
        web: 'enterprise'
    }
}