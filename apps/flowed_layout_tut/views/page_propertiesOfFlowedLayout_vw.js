// ==========================================================================
// Project:   FlowedLayoutTut
// File:      views/page_propertiesOfFlowedLayout_vw.js
// Copyright: @2013 ktornwall
// ==========================================================================
/*globals FlowedLayoutTut SC */

FlowedLayoutTut.PagePropertiesOfFlowedLayout = SC.View.extend(SC.FlowedLayout, FlowedLayoutTut.PageMixin, {
	childViews: 'introduction propertyAlign propertyLayoutDirection propertyCanWrap propertyFlowPadding propertyDefaultFlowSpacing propertyAutoResize'.w(),
	
	layoutDirection: SC.LAYOUT_VERTICAL,
	canWrap: NO,
	
	defaultFlowSpacing: { bottom: 15 },
	
	introduction: FlowedLayoutTut.LabelView.extend({
		fillWidth: YES,
		value: 'Flowed layout takes in several parameters that you can define on your view to '
			+ 'customize how your data is displayed. It is often important to have a good '
			+ 'understanding of how all of the available properties work to help you solve your '
			+ 'layout issues quickly and effectively. Each of the following properties should be '
			+ 'defined on the view you have mixed in SC.FlowedLayout into if you want to use them. '
			+ '<br/><br />If you would like more information on a specific property, go to the '
			+ 'example page to see a small demo and a more in depth discussion of how each property'
			+ ' works.'
	}),
	
	propertyAlign: FlowedLayoutTut.FlowedLayoutPropertyView.extend({
		fillWidth: YES,
		propertyName: 'align',
		pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertyAlign,
		descriptionText: 'Align sets the alignment of the views within each row or column. There '
			+ 'are five possible values you can set align to: <ul><li>SC.ALIGN_LEFT (default)</li>'
			+ '<li>SC.ALIGN_CENTER</li><li>SC.ALIGN_RIGHT</li><li>SC.ALIGN_JUSTIFY</li><li>'
			+ 'SC.ALIGN_BOTTOM</li>'
	}),
	
	propertyLayoutDirection: FlowedLayoutTut.FlowedLayoutPropertyView.extend({
		fillWidth: YES,
		propertyName: 'layoutDirection',
		pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertyLayoutDirection,
		descriptionText: 'The layout direction sets which way flowed layout will place your views: '
			+ 'horizontally or vertically.'
	}),
	
	propertyCanWrap: FlowedLayoutTut.FlowedLayoutPropertyView.extend({
		fillWidth: YES,
		propertyName: 'canWrap',
		pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertyCanWrap,
		descriptionText: 'Controls if the flowed layout should move child views to the next row '
			+ 'or column if there is not enough room in the current one. By default, this is set '
			+ 'to true.'
	}),
	
	propertyFlowPadding: FlowedLayoutTut.FlowedLayoutPropertyView.extend({
		fillWidth: YES,
		propertyName: 'flowPadding',
		pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertyFlowPadding,
		descriptionText: 'Sets the padding around the inner edges of the view that you mix flowed '
			+ 'layout into. This is useful for situations where you may not have control of the '
			+ 'spacing around your view. The most common occurance of this is when using a flowed '
			+ 'layout inside of a SC.ScrollView'
	}),
	
	propertyDefaultFlowSpacing: FlowedLayoutTut.FlowedLayoutPropertyView.extend({
		fillWidth: YES,
		propertyName: 'defaultFlowSpacing',
		pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertyDefaultFlowSpacing,
		descriptionText: 'An object that describes how much space to put between each view by '
			+ 'default. This is somewhat analogous to the top, bottom, left, and right properties '
			+ 'layout object on each child view.'
	}),
	
	propertyAutoResize: FlowedLayoutTut.FlowedLayoutPropertyView.extend({
		fillWidth: YES,
		propertyName: 'autoResize',
		pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertyAutoResize,
		descriptionText: 'This flag is to tell the flowed layout if it should automatically '
			+ 'resize its outer frame to adjust for child views resizing. This is set to true by '
			+ 'default. Flowed layout also provides a way to control this for width and height '
			+ 'independently if needed.'
	})
});
