function createContact() {
	const content = document.getElementById('content')
	const pageHeader = document.createElement('h1')

	content.textContent = ''

	pageHeader.textContent = 'Contact'
	return content.appendChild(pageHeader)
}

export default createContact
