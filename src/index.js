import createMenu from './menu'
import createAbout from './about'
import createContact from './contact'

const menuButton = document.getElementById('menu')
const aboutButton = document.getElementById('about')
const contactButton = document.getElementById('contact')

menuButton.addEventListener('click', () => {
	createMenu()
})

aboutButton.addEventListener('click', () => {
	createAbout()
})

contactButton.addEventListener('click', () => {
	createContact()
})

// loads web app with menu(home) from start
createMenu()
