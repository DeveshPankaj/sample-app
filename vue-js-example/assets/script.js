var app = new Vue({
  el: '#app',
  data: {
  	users: [
  		{name: "Android JS", selected: false},
  		{name: "Vue", selected: true},
  		{name: "React", selected: false},
  		{name: "Angular", selected: false},
  		{name: "Phonon", selected: false}
  	]
  },
  methods: {
  	toggle(el){
      el.selected ^= true;
  	}
  }
})