// ==========================================================================
// Project:   FlowedLayoutTut
// File:      controllers/tutorial_con.js
// Copyright: @2013 ktornwall
// ==========================================================================
/*globals FlowedLayoutTut SC */

FlowedLayoutTut.tutorialController = SC.ArrayController.create({
	allowsMultipleSelection: NO,
	allowsEmptySelection: NO,
	
	orderBy: 'pageIndex ASC',
	content: FlowedLayoutTut.TutorialSections,
	
	init: function() {
		sc_super();
		SC.routes.add(':id', this, this.route);
	},
	
	route: function(params) {
		var id = params ? params.id : 0,
			objectToSelect;

		if(FlowedLayoutTut.isNumber(id)) {
			objectToSelect = this.objectAt(id);
		} else {
			objectToSelect = this.findProperty('route', id);
		}
		
		if(objectToSelect) {
			this.selectObject(objectToSelect);
		} else {
			this.selectObject(this.firstSelectableObject());
		}
	},
	
	selectedObject: function() {
		return this.get('selection').firstObject();
	}.property('selection').cacheable(),
	
	currentIndex: function() {
		return this.getPath('selectedObject.pageIndex');
	}.property('selectedObject').cacheable(),
		
	_selectedObjectDidChange: function() {
		var selection = this.get('selectedObject');
		SC.routes.set('informLocation', SC.get(selection, 'route'));
	}.observes('selectedObject'),
	
	canGoToPreviousPage: function() {
		return this.get('currentIndex') > 0;
	}.property('currentIndex', 'content').cacheable(),
	
	canGoToNextPage: function() {
		return this.get('currentIndex') < this.get('length') - 1;
	}.property('currentIndex', 'content').cacheable(),
	
	goToPage: function(index) {
		var viewToSelect = this.findProperty('pageIndex', index);
		if(viewToSelect) {
			this.selectObject(viewToSelect);
		}
	},
	
	goToPreviousPage: function() {
		var currentIndex = this.get('currentIndex');
		this.goToPage(currentIndex - 1);
	},
	
	goToNextPage: function() {
		var currentIndex = this.get('currentIndex');
		this.goToPage(currentIndex + 1);
	}
});
