// ==========================================================================
// Project:   FlowedLayoutTut
// File:      views/flowProperty_vw.js
// Copyright: @2013 ktornwall
// ==========================================================================
/*globals FlowedLayoutTut SC */

FlowedLayoutTut.FlowedLayoutPropertyView = SC.View.extend({
	classNames: 'flowed-layout-property-view'.w(),
	childViews: 'topLine description'.w(),
	
	propertyName: '',
	descriptionText: '',
	pageIndex: FlowedLayoutTut.TutorialSectionsEnum.introduction,
	
	descriptionCalculatedHeight: 16,
	calculatedHeight: function() {
		return this.get('descriptionCalculatedHeight') + 30;
	}.property('descriptionCalculatedHeight').cacheable(),
	
	topLine: SC.View.extend(SC.FlowedLayout, {
		layout: { height: 24 },
		childViews: 'propertyName goToPage'.w(),
		propertyName: SC.LabelView.extend(SC.AutoResize, {
			classNames: 'property-name'.w(),
			valueBinding: SC.Binding.oneWay('.parentView.parentView.propertyName')
		}),
		
		goToPage: SC.ButtonView.extend(SC.AutoResize, {
			themeName: 'capsule',
			 title: 'Go to page >',
			 pageIndexBinding: SC.Binding.oneWay('.parentView.parentView.pageIndex'),
			 action: function() {
				 FlowedLayoutTut.tutorialController.goToPage(this.get('pageIndex'));
			 }
		})
	}),
	
	description: FlowedLayoutTut.LabelView.extend({
		layout: { top: 30 },
		classNames: 'property-description'.w(),
		calculatedHeightBinding: '.parentView.descriptionCalculatedHeight',
		valueBinding: SC.Binding.oneWay('.parentView.descriptionText')
	})
});