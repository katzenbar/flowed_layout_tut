// ==========================================================================
// Project:   FlowedLayoutTut
// File:      views/page_starting_vw.js
// Copyright: @2013 ktornwall
// ==========================================================================
/*globals FlowedLayoutTut SC */

FlowedLayoutTut.PageStarting = SC.View.extend(SC.FlowedLayout, FlowedLayoutTut.PageMixin, {
	classNames: 'page-starting'.w(),
	childViews: 'introduction codeView commonPitfalls'.w(),
	
	layoutDirection: SC.LAYOUT_VERTICAL,
	canWrap: NO,
	
	defaultFlowSpacing: { bottom: 15 },
	
	introduction: FlowedLayoutTut.LabelView.extend({
		fillWidth: YES,
		value: 'To start out with flowed layout, you need to mix it into your current view. It '
			+ 'take in the child views and lay them out according to the parameters that you '
			+ 'provide. You\'ll probably be using an SC.View to mix flowed layout into, since with '
			+ 'other views they will already be styled, or have specific child views already set. '
			+ 'All examples in this tutorial will be using SC.View. An example of using the mixin '
			+ 'with SC.View is given below, with a few of the common properties used by flowed '
			+ 'layout.'
	}),
	
	codeView: FlowedLayoutTut.CodeSnippetView.extend({
		fillWidth: YES,
		value: 'view: SC.View.extend(SC.FlowedLayout, {<br />'
			+  '    align: SC.ALIGN_RIGHT,<br />'
			+  '    autoResize: YES,<br />'
			+  '    defaultFlowSpacing: { top: 5, left: 0, right: 0, bottom: 5 },<br />'
			+  '    flowPadding: { left: 5, right: 5 }<br />'
			+  '})'
	}),
	
	commonPitfalls: FlowedLayoutTut.LabelView.extend({
		fillWidth: YES,
		value: 'One of the most important things to keep in mind is that <b>YOU MUST SPECIFY THE '
		+ 'SIZE OF YOUR VIEW IN SOME WAY</b>, flowed layout is not responsible for determining '
		+ 'how large your view is. You can use a calculatedWidth or calculatedHeight parameter, '
		+ 'the layout, or frame of the view to tell flowed layout the size of each child. '
		+ 'If you fail to do so, the view will take up one screen length (for vertical layouts) '
		+ 'or the entire width of the screen (for horizontal layouts) for seemingly no reason. '
		+ '<br /><br />'
		+ 'Another thing to keep in mind is that besides height and width, <b>FLOWED LAYOUT WILL '
		+ 'IGNORE ALL OTHER LAYOUT PROPERTIES ON YOUR CHILD VIEW</b>. Instead, you will want to use'
		+ ' flowSpacing on your child view to position it within the flow. It takes left, right, '
		+ 'top, and bottom parameters to position your view, much like layout would in one of '
		+ 'your absolutely positioned views.'
	})
});
