let theadElement = document.getElementById('thead');
let tbodyElement = document.getElementById('tbody');


let usersArray = [
    [1, 'Star Wars', 'Bernard'],
    [2, 'Terminator 2', 'Alice'],
    [3, 'Robocop', 'Spike'],
    [4, 'The Matrix', 'Neo'],
    [5, 'Inception', 'Cobb'],
    [6, 'The Dark Knight', 'Bruce'],
    [7, 'Interstellar', 'Cooper'],
    [8, 'Avatar', 'Jake'],
    [9, 'The Godfather', 'Vito'],
    [10, 'Pulp Fiction', 'Jules'],
    [11, 'Fight Club', 'Tyler'],
    [12, 'Forrest Gump', 'Forrest'],
    [13, 'Gladiator', 'Maximus'],
    [14, 'The Lord of the Rings', 'Frodo'],
    [15, 'Jurassic Park', 'Alan']
];

theadElement.insertAdjacentHTML("beforeend", '<td>Number</td> <td>Title</td> <td>Director</td>')


usersArray.forEach(function(user){

    tbodyElement.insertAdjacentHTML('beforeend', '<td>'+user[0]+'</td> <td>'+user[1]+'</td> <td>'+user[2]+'</td>')

})

