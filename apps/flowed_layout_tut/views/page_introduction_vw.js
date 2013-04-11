// ==========================================================================
// Project:   FlowedLayoutTut
// File:      views/page_introduction_vw.js
// Copyright: @2013 ktornwall
// ==========================================================================
/*globals FlowedLayoutTut SC */

FlowedLayoutTut.PageIntroduction = FlowedLayoutTut.LabelView.extend(FlowedLayoutTut.PageMixin, {
	value: '<br />SC.FlowedLayout is a useful mixin provided by SproutCore that allows you to '
		+ 'dynamically layout your child views. Normally, SproutCore views are absolutely '
		+ 'positioned, which can cause trouble when views may dynamically change sizes.<br />'
		+ '<br />This tutorial will take you through the various properties used by flowed '
		+ 'layout, and provide tips on how to use flowed layout to cause fewer headaches with '
		+ 'this tricky mixin.<br /><br />To navigate through this tutorial, use the previous '
		+ 'and next buttons at the bottom of the screen, or use the list on the left to go '
		+ 'between sections. Some pages feature interactive controls that you can use to '
		+ 'change parameters of the flowed layout example. Try them out to see how they change '
		+ 'how the view works.'
});

FlowedLayoutTut.ToBeImplemented = FlowedLayoutTut.LabelView.extend(FlowedLayoutTut.PageMixin, {	
	value: '// TODO! This page still under construction'
});

