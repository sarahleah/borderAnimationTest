let marker = document.querySelector('.marker')
let navItems = document.querySelectorAll('li')

let homeItem = document.querySelector('li')

marker.style.left = homeItem.offsetLeft + "px"
marker.style.width = homeItem.offsetWidth + "px"

function indicator(event) {
	marker.style.left = event.srcElement.offsetLeft + "px"
	marker.style.width = event.srcElement.offsetWidth + "px"
}

navItems.forEach(item => {
	item.addEventListener('mouseenter', (e)=> {
		indicator(e)
	})
})