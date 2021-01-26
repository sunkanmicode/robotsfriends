const robots = [
    {
        "id": 1,
        "name": "Davies Lewies",
        "email":"lewies@gmail.com"
    },
    {
        "id": 2,
        "name": "Biden Greet",
        "email":"biden@gmail.com"
    },
    {
        "id": 3,
        "name": "Trump Donald",
        "email":"trump@gmail.com"
    },
    {
        "id": 4,
        "name": "Pelosi Mrs",
        "email":"pelosi@gmail.com"
    },
    {
        "id": 5,
        "name": "David Mark",
        "email":"david@gmail.com"
    },
    {
        "id": 6,
        "name": "Seun Awoo",
        "email":"seun@gmail.com"
    },
    {
        "id": 7,
        "name": "Bankole Danjuma",
        "email":"danjuma@gmail.com"
    },
    {
        "id": 8,
        "name": "Obasanjo great",
        "email":"sanjo@gmail.com"
    },
    {
        "id": 9,
        "name": "Osinbajo VP",
        "email":"vp@gmail.com"
    },
    {
        "id": 10,
        "name": "Garuba Seni",
        "email":"spokeman@gmail.com"
    },
    {
        "id": 11,
        "name": "Adebayo Femi",
        "email":"spokeman2@gmail.com"
    },
    {
        "id": 13,
        "name": "Lie Mohammod",
        "email":"lies@gmail.com"
    },
]

const robotsDisplay = document.querySelector('.robots-container');
const search = document.querySelector('.searchbar')

window.addEventListener('DOMContentLoaded', ()=>{
    displayRobotsFriends()
});

search.addEventListener('keyup', (e)=>{
    const showSearch = e.target.value.toLowerCase()
    const filterRobots = robots.filter((robot)=>{
        return (
            robot.name.toLowerCase().includes(showSearch)
         );
    })
    displayRobotsFriends(filterRobots)
})

const displayRobotsFriends = (robots)=>{
    const displayRobots = robots.map((robot, index)=>{
        return ` <div class="robots">
            <img src="https://robohash.org/${robot.id}" alt="img">
            <h4>${robot.name}</h4>
            <p>${robot.email}</p>
            </div>`
    })
    showRobots = displayRobots.join('');
    robotsDisplay.innerHTML = showRobots
}
