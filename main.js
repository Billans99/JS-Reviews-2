 const reviews = [
    {
        id: 1,
        name: "Anya Forger",
        job: "Psychologist",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "Youtube premium has been a life saver for me. I listen to podcasts often in the background while simultaneously using other apps and my productivity has skyrocketed.", 
    },
    {
        id: 2,
        name: "Johnathon Joestar",
        job: "Boxer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x51.jpg",
        text: "Lite n' Easy is so convenient and has freed up so much time from prepping and cooking meals that I have taken up Brazilian jiu-jitsu as a hobby. I couldn't recommend their food delivery service enough.",
    },
    {
        id: 3,
        name: "Satoru Gojo",
        job: "Martial Arts instructor",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x51.jpg",
        text: "This service has been incredible! I have used GPT-10 for work and for personal reasons, and it is well worth the money. I highly recommend it!",  
    }, 
    {
        id: 4,
        name: "Faye Valentine",
        job: "Debt collector",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x51.jpg",
        text: "This automated service saves me so much time and effort, I am able to spend more time working on other duties required by my occupation.", 
    }
 ];

 // select items
 const img = document.getElementById('person-img');
 const author = document.getElementById('author');
 const job = document.getElementById('job');
 const info = document.getElementById('info');

 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');
 const randomBtn = document.querySelector('.random-btn');

 // set starting item
 let currentItem = 0;

 // load intitial item
 window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);
 });

// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    // textContent adds text
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}



// Showing previous person unless already at the first reviewer
 prevBtn.addEventListener('click', () => {
    if (currentItem >= 1) {
        currentItem --;
        showPerson(currentItem);
    } else {
        currentItem = 0;
    }
    
 });

 // Showing last person unless already at the last reviewer
 nextBtn.addEventListener('click', () => {
    if (currentItem <= 2) {
        currentItem ++;
        showPerson(currentItem);
    }
 });

 // show random reviewer
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});

