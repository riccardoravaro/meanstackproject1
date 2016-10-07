export class MainController {
  constructor ($http) {
    'ngInject';
     this.$http = $http;
     this.getMessages();

  }

  postMessage() {
    console.log('post');
    this.$http.post('http://localhost:5000/api/message', {msg:this.message});
  }

  getMessages() {
    var vm = this;
    this.$http.get('http://localhost:5000/api/message').then(function(result){
      console.log(result);
      vm.messages = result.data;
    });
  }



}
