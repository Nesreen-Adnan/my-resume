let i = 0,
delay = .3,
SectionsInfo = [
{id: i++, active: true, href:"#", title: "home", delay: `${delay*i}s`},
{id: i++, href:"#about", title:"about me", delay: `${delay*i}s`},
{id: i++, href:"#info", title:"personal", delay: `${delay*i}s`},
{id: i++, href:"#edu", title: "education", delay: `${delay*i}s`},
{id: i++, href:"#portfolio", title:"portfolio", delay: `${delay*i}s`},
{id: i++, href:"#links", title:"links", delay: `${delay*i}s`},
];

export default SectionsInfo;