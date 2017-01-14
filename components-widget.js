ko.componts.register('iframe-widget', function(){	
	viewModel: function(params){
		this.url = params.url;
	},
	template: 
		'<iframe data-bind="attr:{src: url}"></iframe>'
});