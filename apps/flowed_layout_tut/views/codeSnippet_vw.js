// ==========================================================================
// Project:   FlowedLayoutTut
// File:      views/codeSnippet_vw.js
// Copyright: @2013 ktornwall
// ==========================================================================
/*globals FlowedLayoutTut SC */
FlowedLayoutTut.CodeSnippetView = SC.View.extend({
	classNames: 'code-snippet-view'.w(),
	childViews: 'codeText'.w(),
	
	value: '',
	textHeight: 0,
	
	didAppendToDocument: function() {
		this.notifyPropertyChange('calculatedHeight');
	},
	
	calculatedHeight: function() {
		var textHeight = this.get('textHeight');
		return textHeight;
	}.property('textHeight').cacheable(),
	
	codeText: SC.LabelView.extend({
		useStaticLayout: YES,
		escapeHTML: NO,
		
		classNames: 'code-text'.w(),
		valueBinding: '.parentView.value',
		
		textHeight: function() {
			return this.getPath('frame.height');
		}.property('frame').cacheable(),
		textHeightBinding: '.parentView.textHeight'
	})
});

FlowedLayoutTut.LabelView = SC.View.extend({
	childViews: 'labelView'.w(),
	
	value: '',
	textHeight: 0,
	
	didAppendToDocument: function() {
		this.notifyPropertyChange('calculatedHeight');
	},
	
	calculatedHeight: function() {
		var textHeight = this.get('textHeight');
		return textHeight;
	}.property('textHeight').cacheable(),
	
	labelView: SC.LabelView.extend({
		useStaticLayout: YES,
		escapeHTML: NO,
		
		classNames: 'label-view'.w(),
		valueBinding: '.parentView.value',
		
		textHeight: function() {
			return this.getPath('frame.height');
		}.property('frame').cacheable(),
		textHeightBinding: '.parentView.textHeight'
	})
});
