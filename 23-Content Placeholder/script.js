const header = document.getElementById('header')
const title = document.getElementById('title')
const excert = document.getElementById('excert')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getDate, 2500)

function getDate() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    alt="">`
    title.innerHTML = `Lorem ipsum dolor sit amet.`
    excert.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, impedit!`
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
    name.innerHTML = `John Doe`
    date.innerHTML = `Oct 08, 2023`

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}

