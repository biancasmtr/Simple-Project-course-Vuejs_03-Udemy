Vue.component('progresso', {
  data() {
    return {
    dynamicValue: 0};
      
  },
    methods: {
      plus () {
        if (this.dynamicValue === 100) return
        this.dynamicValue += 10
      },
   
      minus () {
        if (this.dynamicValue === 0) return
        this.dynamicValue -= 10
      }
    }
});

new Vue({
  el: '#app'
});
