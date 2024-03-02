// JSON Employee
const employee = [
    {
        id: '1',
        img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Riska Amanda',
        role: 'Business Analyst',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
        id: '2',
        name: 'Sam Rusk',
        img: "https://images.pexels.com/photos/19186832/pexels-photo-19186832/free-photo-of-pria-lampu-malam-wajah.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        role: 'Senior System Analyst',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laudantium',
    },
    {
        id: '3',
        img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Higa Juan',
        role: 'Fullstack Developer',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. illo veniam',
    },
    {
        id: '4',
        img: "https://images.pexels.com/photos/15932096/pexels-photo-15932096/free-photo-of-kota-pria-jaket-wajah.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Muhammad Ali',
        role: 'Senior Software Manager',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. delectus amet iste accusantium distinctio enim a natus minus velit.',
    },
];

// Declaration Employee Profil
const imgPerson = document.getElementById("imgPerson");
const namePerson = document.getElementById("namePerson");
const rolePerson = document.getElementById("rolePerson");
const commentPerson = document.getElementById("commentPerson");

// Declaration All Buttons
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const randomBtn = document.getElementById("randomPerson");

// Set First Current Item
let currentItem = 0;

// Load Testimonial
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem)
});

// Show Person Based On Item
function showPerson(person) {
    const item = employee[person];
    imgPerson.src = item.img;
    namePerson.textContent = item.name;
    rolePerson.textContent = item.role;
    commentPerson.textContent = item.comment;
}

// Next Button
nextBtn.addEventListener('click', function () {
    currentItem++
    if (currentItem > employee.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem);
});

// Previous Button
prevBtn.addEventListener('click', function () {
    currentItem--
    if (currentItem < 0) {
        currentItem = employee.length - 1
    }
    showPerson(currentItem);
});

// Random Button
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * employee.length);
    console.log(currentItem);
    showPerson(currentItem);
})