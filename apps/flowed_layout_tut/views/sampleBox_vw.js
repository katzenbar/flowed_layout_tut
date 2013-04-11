// ==========================================================================
// Project:   FlowedLayoutTut
// File:      views/sampleBox_vw.js
// Copyright: @2013 ktornwall
// ==========================================================================
/*globals FlowedLayoutTut SC */

FlowedLayoutTut.SampleBox = SC.View.extend({
	layout: { height: 50, width: 50 },
	classNames: 'sample-box-view'.w(),
	childViews: 'labelView'.w(),
	
	label: '',
	
	labelView: SC.LabelView.extend(SC.AutoResize, {
		layout: { centerX: 0, centerY: 0, height: 16 },
		valueBinding: SC.Binding.oneWay('.parentView.label')
	})
});

FlowedLayoutTut.RedSampleBox = FlowedLayoutTut.SampleBox.extend({
	classNames: 'red'.w()
});

FlowedLayoutTut.BlueSampleBox = FlowedLayoutTut.SampleBox.extend({
	classNames: 'blue'.w()
});

FlowedLayoutTut.GreenSampleBox = FlowedLayoutTut.SampleBox.extend({
	classNames: 'green'.w()
});

FlowedLayoutTut.YellowSampleBox = FlowedLayoutTut.SampleBox.extend({
	classNames: 'yellow'.w()
});
