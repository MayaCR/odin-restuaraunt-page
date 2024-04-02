function createAbout() {
	const content = document.getElementById('content')
	const pageHeader = document.createElement('h1')

	content.textContent = ''

	pageHeader.textContent = 'About'
	return content.appendChild(pageHeader)
}

export default createAbout
