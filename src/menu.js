{
	/* <div>Phone: 1(744)483-3283</div>
			<h1>Menu</h1>
			<div>
				<ul>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
				</ul>
				<ul>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
				</ul>
</div> */
}

function createMenu() {
	const content = document.getElementById('content')
	const pageHeader = document.createElement('h1')

	content.textContent = ''

	pageHeader.textContent = 'Menu'
	return content.appendChild(pageHeader)
}

export default createMenu
