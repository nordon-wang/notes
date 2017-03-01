const Child = {
	template: '#childarea'
};

new Vue({
	el: '#app',
	components: {
		appChild: Child
	}
});