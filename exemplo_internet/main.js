Vue.component('',{
	template: ''
});

new Vue({
	el: '#app',
	data: () => ({
		log: []
	}),
	methods: {
		submit($event) {
			this.log.push(`Try ${this.log.length}`)
			$event.preventDefault()
		}
	}
})