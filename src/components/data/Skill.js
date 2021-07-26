export const SkillData = [
    {
        type:'FrontEnd',
        list:[
            {
                name:'HTML5', 
                icon:<img src={require('../../assests/html.png').default} />
            },{
                name:'CSS3',
                icon:<img src={require('../../assests/css.png').default} />
            },{
                name:'ReactJS',
                icon:<img src={require('../../assests/react.png').default} />
            },{
                name:'MaterialUi',
                icon:<img src={require('../../assests/ui.png').default} />
            }
        ]
    },
    {
        type:'BackEnd',
        list:[
            {
                name:'NodeJS',
                icon: <i class="devicon-nodejs-plain-wordmark colored"></i>
            },
            {
                name:'ExpressJS',
                icon:<i class="devicon-express-original"></i>
            },
            {
                name:'MongoDB',
                icon:<i class="devicon-mongodb-plain-wordmark colored"></i>
            },
            {
                name:'MySQL',
                icon:<i class="devicon-mysql-plain-wordmark colored"></i>
            }
        ]
    },
    {
        type:'Programming',
        list:[
            {
                name:"C",
                icon:<img className="skill-image" src={require('../../assests/c.png').default} />
            },
            {
                name:"C++",
                icon:<img className="skill-image" src={require('../../assests/c++.png').default} />
            },
            {
                name:"Python",
                icon:<img className="skill-image" src={require('../../assests/python.png').default} />,
            },
            {
                name:"Javascript",
                icon:<img className="skill-image" src={require('../../assests/javascript.png').default} />
            }
        ]
    }
]