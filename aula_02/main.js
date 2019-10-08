Vue.component('',{
	template: ''
});

var app = new Vue({
	el: '#app',
	data: {
		fruits: [
		{name: 'apple'},
		{name: 'banana'},
		{name: 'orange'},
		{name: 'manga'},
		{name: 'pineapple'},
		],
		fruta: ''
	},
	methods: {
		addFruta: function() {
			var name = this.fruits.length + 1;
			this.fruits.push({ fruit: name.value});
		},
	},
	computed: {
	    isValid: function () {
	        return this.fruits == '';
	    }
	}
}); 