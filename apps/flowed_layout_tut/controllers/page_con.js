// ==========================================================================
// Project:   FlowedLayoutTut
// File:      controllers/page_con.js
// Copyright: @2013 ktornwall
// ==========================================================================
/*globals FlowedLayoutTut SC */

FlowedLayoutTut.selectedPageController = SC.ObjectController.create({
	contentBinding: SC.Binding.oneWay('FlowedLayoutTut.tutorialController.selectedObject')
});
