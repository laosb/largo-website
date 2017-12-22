import 'waypoints/lib/noframework.waypoints'

const Waypoint = window.Waypoint

const pages = document.getElementsByClassName('page-item')
const body = document.body

const waypoints = []

let lastPageItem = document.getElementById('page-active')

for (let i = 0; i < pages.length; i++) {
  waypoints.push(new Waypoint({
    element: pages[i],
    handler () {
      if (this.element.className.match('page-item-dark')) {
        body.className = 'in-dark'
      } else {
        body.className = 'in-light'
      }
      lastPageItem.id = ''
      this.element.id = 'page-active'
      lastPageItem = this.element
    },
    offset: '0%'
  }))
}
