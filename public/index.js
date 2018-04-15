/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "To-Do List:",
      tasks: [
        {
          id: 1,
          text: "Mow the lawn",
          completed: false

        },
        {
          id: 2,
          text: "Buy food",
          completed: false
        }
      ],
      newTask: {id: "", text: "", completed: "" }
    };
  },
  created: function() {},
  methods: {

    toggleCompleted: function(theTask) {
      theTask.completed = !theTask.completed;
    },
    
    addTask: function() {
      if (this.newTask.text !== "") {
        console.log('about to add a task');
        this.tasks.push(this.newTask);
        this.newTask = {id: "", text: "", completed: "" };
      }
    },
    
  },

  
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});

