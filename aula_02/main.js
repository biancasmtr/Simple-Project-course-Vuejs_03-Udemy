
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
		fruta: '',
		clicou: false
	},
	methods: {
		addFruta: function() {
			var name = this.fruits.length + 1;
			this.fruits.push({ name: fruta.value });
		},
	},
	computed: {
	    isValid: function () {
	        return this.fruta == '';
	    },

	    preenchido: function() {
	    	if (fruta == '') {

	    	}
	    }
    }
}); 