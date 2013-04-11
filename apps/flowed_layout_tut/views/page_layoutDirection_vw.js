// ==========================================================================
// Project:   FlowedLayoutTut
// File:      views/page_layoutDirection_vw.js
// Copyright: @2013 ktornwall
// ==========================================================================
/*globals FlowedLayoutTut SC */
sc_require('views/sampleBox_vw');

FlowedLayoutTut.PageLayoutDirection = SC.View.extend(SC.FlowedLayout, FlowedLayoutTut.PageMixin, {
  classNames: 'page-layout-direction'.w(),
  childViews: 'introduction controlsLayout sampleFlowedExample sampleCodeView'.w(),

  layoutDirection: SC.LAYOUT_VERTICAL,
  canWrap: NO,

  defaultFlowSpacing: { bottom: 15 },

  introduction: FlowedLayoutTut.LabelView.extend({
    escapeHTML: NO,
    fillWidth: YES,
    value: 'The layout direction parameter can be used to change which direction the flowed '
      + 'layout places its views. You can lay them out horizontally or vertically. Use the '
      + 'controls below to test how Flowed Layout behaves with different settings. The '
      + 'numbers indicate the order of each 50px by 50px block in the child views array. '
      + 'You can change the width and height from 1px to 200px each and see what the layout '
      + 'does in each scenario. The code example at the bottom shows what the parameters for '
      + 'the view look like.'
  }),

  controlsLayout: SC.View.extend(SC.FlowedLayout, {
    childViews: 'layoutWidthLabel layoutWidthField layoutHeightLabel layoutHeightField layoutDirectionRadioButtons'.w(),

    fillWidth: YES,
    flowSpacing: 0,
    defaultFlowSpacing: { bottom: 15 },

    layoutWidthLabel: SC.LabelView.extend({
      flowSpacing: { top: 3, bottom: 15 },
      layout: { height: 22, width: 100 },
      startsNewRow: YES,
      value: 'Layout Width'
    }),

    layoutWidthField: SC.TextFieldView.extend({
      layout: { height: 22 },
      isSpacer: YES,
      maxSpacerLength: 200,
      valueBinding: 'FlowedLayoutTut.pageLayoutDirectionController.layoutWidth'
    }),

    layoutHeightLabel: SC.LabelView.extend({
      flowSpacing: { top: 3, bottom: 15 },
      layout: { height: 22, width: 100 },
      startsNewRow: YES,
      value: 'Layout Height'
    }),

    layoutHeightField: SC.TextFieldView.extend({
      layout: { height: 22 },
      isSpacer: YES,
      maxSpacerLength: 200,
      valueBinding: 'FlowedLayoutTut.pageLayoutDirectionController.layoutHeight'
    }),

    layoutDirectionRadioButtons: SC.RadioView.extend({
      layout: { height: 20 },
      isSpacer: YES,
      startsNewRow: YES,
      layoutDirection: SC.LAYOUT_HORIZONTAL,
      itemTitleKey: 'title',
      itemValueKey: 'value',

      items: [
        {
          title: 'Horizontal Layout',
          value: SC.LAYOUT_HORIZONTAL
        },
        {
          title: 'Vertical Layout',
          value: SC.LAYOUT_VERTICAL
        }
      ],

      valueBinding: 'FlowedLayoutTut.pageLayoutDirectionController.layoutDirection'
    })
  }),

  /**
   * Here's a gotcha that I ran into while writing this tutorial. I wanted to be able to set
   * a width and a height on my flowed layout view, but to get everything to display properly,
   * I needed to have the fillWidth property set to YES for all of my flowed views to take up
   * their full width on the screen.
   * 
   * To get around this issue, I'm using a wrapper view that can fill width, and then position
   * my example view inside of it and I can use whatever layout I want.
   */
  sampleFlowedExample: SC.View.extend({
    layout: { height: 202 },
    fillWidth: YES,	
    childViews: 'example'.w(),

    example: FlowedLayoutTut.FlowExampleView.extend({
      layout: { height: 100, width: 100 },
      layoutDirectionBinding: SC.Binding.oneWay('FlowedLayoutTut.pageLayoutDirectionController.layoutDirection'),

      layoutHeightBinding: SC.Binding.oneWay('FlowedLayoutTut.pageLayoutDirectionController.layoutHeight'),
      layoutWidthBinding: SC.Binding.oneWay('FlowedLayoutTut.pageLayoutDirectionController.layoutWidth'),

      _layoutWidthDidChange: function() {
        var width = this.get('layoutWidth');
        if(FlowedLayoutTut.isNumber(width) && width > 0) {
          this.adjust('width', width);
        }
      }.observes('layoutWidth'),

      _layoutHeightDidChange: function() {
        var height = this.get('layoutHeight');
        if(FlowedLayoutTut.isNumber(height) && height > 0) {
          this.adjust('height', height);
        }
      }.observes('layoutHeight'),

      childViews: 'redBox blueBox greenBox yellowBox'.w(),

      redBox: FlowedLayoutTut.RedSampleBox.extend({
        label: '1'
      }),
      blueBox: FlowedLayoutTut.BlueSampleBox.extend({
        label: '2'
      }),
      greenBox: FlowedLayoutTut.GreenSampleBox.extend({
        label: '3'
      }),
      yellowBox: FlowedLayoutTut.YellowSampleBox.extend({
        label: '4'
      })
    })
  }),

  sampleCodeView: FlowedLayoutTut.CodeSnippetView.extend({
    fillWidth: YES,

    layoutDirectionBinding: SC.Binding.oneWay('FlowedLayoutTut.pageLayoutDirectionController.layoutDirection'),

    layoutHeightBinding: SC.Binding.oneWay('FlowedLayoutTut.pageLayoutDirectionController.layoutHeight'),
    layoutWidthBinding: SC.Binding.oneWay('FlowedLayoutTut.pageLayoutDirectionController.layoutWidth'),

    value: function() {
      var layoutDirection = this.get('layoutDirection'),
      layoutHeight = this.get('layoutHeight'),
      layoutWidth = this.get('layoutWidth'),
      val = '';

      val += 'view: SC.View.extend(SC.FlowedLayout, {<br />';
      val += '    layout: { height: ' + layoutHeight + ', width: ' + layoutWidth + ' },<br />';
      val += '    childViews: \'box1 box2 box3 box4\'.w(),<br /><br />';

      val += '    layoutDirection: ';
      if(layoutDirection === SC.LAYOUT_HORIZONTAL) {
        val += 'SC.LAYOUT_HORIZONTAL';
      } else {
        val += 'SC.LAYOUT_VERTICAL';
      }
      val += '<br />';
      val += '})';

      return val;

    }.property('layoutDirection', 'layoutHeight', 'layoutWidth').cacheable()
  })
});
