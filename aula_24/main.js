Vue.component('modal', {
	template: 

			  '<div class="modal is-active">'+
			    '<div class="modal-background"></div>'+
			    '<div class="modal-card">'+
			      '<header class="modal-card-head">'+
			        '<p class="modal-card-title">'+
			        '<slot name="header"></slot>'+
			        '</p>'+
			        '<button class="delete" aria-label="close" @click="$emit(\'meuclickfechar\')"></button>'+
			      '</header>'+
			      '<section class="modal-card-body">'+
			        '<slot></slot>'+
			      '</section>'+
			      '<footer class="modal-card-foot" >'+
			        '<slot name="footer" ></slot>'+
			      '</footer>'+
			    '</div>'+
			  '</div>'
});

var app = new Vue ({
	el:'#app',
	data: {
		showModal: false,
	}
});

