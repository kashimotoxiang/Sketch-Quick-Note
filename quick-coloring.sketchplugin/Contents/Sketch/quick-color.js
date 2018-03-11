var ColoringRed = function(context) {
  fillColorFormColors(context, [208, 2, 27]);
};
var ColoringBlue = function(context) {
  fillColorFormColors(context, [74, 144, 226]);
};

var ColoringGreen = function(context) {
  fillColorFormColors(context, [245, 166, 35]);
};

var ColoringYellow = function(context) {
  fillColorFormColors(context, [126, 211, 33]);
};

function fillColorFormColors(context, colorRGB) {
  var selectedLayers = context.selection;
  var selectedCount = selectedLayers.count();

  if (selectedCount == 0) {
    doc.showMessage("Please select one Shape or Text layer.");
    return false;
  }

  for (var i = 0; i < selectedCount; i++) {
    var layer = selectedLayers[i];
    color = MSColor.colorWithRed_green_blue_alpha(
      colorRGB[0] / 255,
      colorRGB[1] / 255,
      colorRGB[2] / 255,
      1.0
    );
    if (layer.class() == "MSShapeGroup") {
      var fills = layer.style().enabledFills();
      if (fills.count() > 0 && fills.lastObject().fillType() == 0) {
        fills.lastObject().setColor(color);
      } else {
        var fill = layer.style().addStylePartOfType(0);
        fill.setFillType(0);
        fills.lastObject().setColor(color);
      }
    }
    if (layer.class() == "MSTextLayer") {
      layer.setTextColor(color);
    }
  }
}
