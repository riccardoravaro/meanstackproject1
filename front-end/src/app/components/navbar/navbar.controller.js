export class NavbarController {
	  constructor($auth) {
		'ngInject';
		this.$auth = $auth;
		//console.log($auth.isAuthenticated);
		//console.log('isauthenticated');
		this.isAuthenticated =  $auth.isAuthenticated;
	}

	 logout(){
		this.$auth.logout();
	}
}
