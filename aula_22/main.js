	Vue.component('message', {
    props: ['title', 'body'],

    data() {
      return {
        visible: true
      };
    },

		template:		'<article class="message" v-show="visible">'+
  '<div class="message-header">'+
    '<p>{{title}}</p>'+
    '<button class="delete" aria-label="delete" @click="hideMessage"></button>'+
  '</div>'+
  '<div class="message-body">'+
   '{{body}}'+
  '</div>'+
'</article>',

    methods: {
      hideMessage() {
        this.visible = false;
      }
    } 
	})

	var app = new Vue ({
		el:'#app',
	})