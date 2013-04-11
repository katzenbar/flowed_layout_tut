// ==========================================================================
// Project:   FlowedLayoutTut
// File:      const-data/tutorialConstants.js
// Copyright: @2013 ktornwall
// ==========================================================================
/*globals FlowedLayoutTut */

FlowedLayoutTut.TutorialSectionsEnum = {
	introduction: 0,
	startingWithFlowedLayout: 1,
	
	propertiesOfFlowedLayout: 2,
	propertyAlign: 3,
	propertyLayoutDirection: 4,
	propertyCanWrap: 5,
	propertyFlowPadding: 6,
	propertyDefaultFlowSpacing: 7,
	propertyAutoResize: 8,
	propertyShouldResizeWidth: 8,
	propertyShouldResizeHeight: 8,
	
	childViewProperties: 9,
	childPropertyFillWidth: 10,
	childPropertyFillHeight: 10,
	childPropertyFlowSpacing: 11,
	childPropertyIsSpacer: 12,
	childPropertyMaxSpacerLength: 12,
	childPropertyStartsNewRow: 13,
	
	commonIssues: 14
};

FlowedLayoutTut.TutorialSections = [
  {
	  pageTitle: 'Introduction',
	  route: 'introduction',
	  pageView: 'FlowedLayoutTut.PageIntroduction',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.introduction
  },
  {
	  pageTitle: 'Starting with Flowed Layout',
	  route: 'starting-with-flowed-layout',
	  pageView: 'FlowedLayoutTut.PageStarting',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.startingWithFlowedLayout
  },
  {
	  pageTitle: 'Layout Direction',
	  route: 'property-layout-direction',
	  pageView: 'FlowedLayoutTut.PageLayoutDirection',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertyLayoutDirection,
	  isPropertyPage: YES
  },
  {
	  pageTitle: 'Properties of Flowed Layout',
	  route: 'flowed-layout-properties',
	  pageView: 'FlowedLayoutTut.PagePropertiesOfFlowedLayout',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertiesOfFlowedLayout
  },
  {
	  pageTitle: 'Align',
	  route: 'property-align',
	  pageView: 'FlowedLayoutTut.ToBeImplemented',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertyAlign,
	  isPropertyPage: YES
  },
  {
	  pageTitle: 'Can Wrap',
	  route: 'property-can-wrap',
	  pageView: 'FlowedLayoutTut.ToBeImplemented',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertyCanWrap,
	  isPropertyPage: YES
  },
  {
	  pageTitle: 'Flow Padding',
	  route: 'property-flow-padding',
	  pageView: 'FlowedLayoutTut.ToBeImplemented',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertyFlowPadding,
	  isPropertyPage: YES
  },
  {
	  pageTitle: 'Default Flow Spacing',
	  route: 'property-default-flow-spacing',
	  pageView: 'FlowedLayoutTut.ToBeImplemented',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertyDefaultFlowSpacing,
	  isPropertyPage: YES
  },
  {
	  pageTitle: 'Auto Resize',
	  route: 'property-auto-resize',
	  pageView: 'FlowedLayoutTut.ToBeImplemented',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.propertyAutoResize,
	  isPropertyPage: YES
  },
  {
	  pageTitle: 'Child View Properties',
	  route: 'child-view-properties',
	  pageView: 'FlowedLayoutTut.ToBeImplemented',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.childViewProperties
  },
  {
	  pageTitle: 'Fill Width and Fill Height',
	  route: 'property-fill-dimension',
	  pageView: 'FlowedLayoutTut.ToBeImplemented',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.childPropertyFillWidth,
	  isPropertyPage: YES
  },
  {
	  pageTitle: 'Flow Spacing',
	  route: 'property-flow-spacing',
	  pageView: 'FlowedLayoutTut.ToBeImplemented',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.childPropertyFlowSpacing,
	  isPropertyPage: YES
  },
  {
	  pageTitle: 'Is Spacer',
	  route: 'is-spacer',
	  pageView: 'FlowedLayoutTut.ToBeImplemented',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.childPropertyIsSpacer,
	  isPropertyPage: YES
  },
  {
	  pageTitle: 'Starts New Row',
	  route: 'starts-new-row',
	  pageView: 'FlowedLayoutTut.ToBeImplemented',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.childPropertyStartsNewRow,
	  isPropertyPage: YES
  },
  {
	  pageTitle: 'Common Problems',
	  route: 'common-problems',
	  pageView: 'FlowedLayoutTut.ToBeImplemented',
	  pageIndex: FlowedLayoutTut.TutorialSectionsEnum.commonIssues
  }
];
