// ==========================================================================
// Project:   FlowedLayoutTut
// File:      views/tutorial_vw.js
// Copyright: @2013 ktornwall
// ==========================================================================
/*globals FlowedLayoutTut SC */

FlowedLayoutTut.TutorialView = SC.View.extend({
    childViews: 'title tutorialContentView controlButtons'.w(),
    classNames: 'tutorial-view'.w(),
    
	  title: SC.LabelView.extend({
		  layout: { top: 20, left: 20, right: 20, height: 50 },
		  classNames: 'title-label'.w(),
		  valueBinding: SC.Binding.oneWay('FlowedLayoutTut.selectedPageController.pageTitle')
	  }),
    
    tutorialContentView: SC.View.extend({
  	  layout: { top: 70, right: 20, bottom: 70, left: 20 },
  	  childViews: 'sectionListView contentView'.w(),
  	  classNames: 'tutorial-content'.w(),
  	  
      sectionListView: SC.ScrollView.extend({
		  layout: { top: 0, left: 0, bottom: 0, width: 250 },
  		  classNames: 'page-list-scroll-view'.w(),
		  
		  contentView: SC.ListView.extend({
	  		  classNames: 'page-list-view'.w(),
			  contentBinding: SC.Binding.oneWay('FlowedLayoutTut.tutorialController.arrangedObjects'),
			  selectionBinding: 'FlowedLayoutTut.tutorialController.selection',
			  
			  exampleView: SC.ListItemView.extend({
				  contentValueKey: 'pageTitle',
				  icon: function() {
					  var isProp = this.getPath('content.isPropertyPage');
					  if(isProp) {
						  return 'property-icon';
					  }
					  return null;
				  }.property().cacheable()
			  })
		  })
      }),
  	  
  	  contentView: SC.ScrollView.extend({
  		layout: { left: 270, top: 0, bottom: 0 },
  		isSpacer: YES,
  		
		  contentView: SC.ContainerView.extend({
			  calculatedHeightBinding: SC.Binding.oneWay('FlowedLayoutTut.selectedPageController.contentHeight'),
			  _calculatedHeightDidChange: function() {
				  var calculatedHeight = this.get('calculatedHeight');
				  this.adjust('height', calculatedHeight);
			  }.observes('calculatedHeight'),
	  		  nowShowingBinding: SC.Binding.oneWay('FlowedLayoutTut.selectedPageController.pageView')
	  	  })
  	  }),
    }),
    
	  controlButtons: SC.View.extend(SC.FlowedLayout, {
  		  layout: { right: 20, bottom: 20, height: 24 },
  		  defaultFlowSpacing: { left: 10 },
  		  childViews: 'previousButton nextButton'.w(),
  		  
  	  	  layoutDirection: SC.LAYOUT_HORIZONTAL,
  	  	  align: SC.ALIGN_RIGHT,
  	  	  canWrap: NO,
  		  
  		  previousButton: SC.ButtonView.extend(SC.AutoResize, {
  			  themeName: 'capsule',
  			  title: '< Previous',
  			  isEnabledBinding: SC.Binding.oneWay('FlowedLayoutTut.tutorialController.canGoToPreviousPage'),
  			  action: 'goToPreviousPage',
  			  target: FlowedLayoutTut.tutorialController
  		  }),
  		  
  		  nextButton: SC.ButtonView.extend(SC.AutoResize, {
  			  themeName: 'capsule',
  			  title: 'Next >',
  			  isEnabledBinding: SC.Binding.oneWay('FlowedLayoutTut.tutorialController.canGoToNextPage'),
  			  action: 'goToNextPage',
  			  target: FlowedLayoutTut.tutorialController
  		  })
  	  })
  });