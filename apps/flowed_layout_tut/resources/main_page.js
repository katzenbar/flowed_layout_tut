// ==========================================================================
// Project:   FlowedLayoutTut
// File:      resources/main_page.js
// Copyright: @2013 ktornwall
// ==========================================================================
/*globals FlowedLayoutTut SC */

FlowedLayoutTut.mainPage = SC.Page.design({
  mainPane: SC.MainPane.extend({
    childViews: 'tutorialTitleView tutorialView'.w(),
    classNames: 'main-page'.w(),
    
    tutorialTitleView: SC.LabelView.extend({
    	layout: { top: 0, left: 50, right: 50, height: 100 },
    	classNames: 'main-title-label'.w(),
    	value: 'Flowed Layout Tutorial'
    }),
    
    tutorialView: FlowedLayoutTut.TutorialView.extend({
    	layout: { top: 100, bottom: 50, left: 50, right: 50 }
    })
  })
});
