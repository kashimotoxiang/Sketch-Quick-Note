var ColoringRed = function(context) {
  fillColorFormColors(context, [208, 2, 27]);
};
var ColoringBlue = function(context) {
  fillColorFormColors(context, [74, 144, 226]);
};
var ColoringGreen = function(context) {
  fillColorFormColors(context, [245, 166, 35]);
};
var ColoringLightBlue = function(context) {
  fillColorFormColors(context, [80, 227, 194]);
};
var ColoringYellow = function(context) {
  fillColorFormColors(context, [126, 211, 33]);
};
var ColoringMagenta = function(context) {
  fillColorFormColors(context, [189, 16, 224]);
};
var ColoringBrown = function(context) {
  fillColorFormColors(context, [139, 87, 42]);
};
var ColoringDarkGreen = function(context) {
  fillColorFormColors(context, [65, 117, 5]);
};
var ColoringViolet = function(context) {
  fillColorFormColors(context, [144, 19, 254]);
};
var ColoringBlack = function(context) {
  fillColorFormColors(context, [0, 0, 0]);
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
      layer
        .style()
        .borders()
        .firstObject().color = color;
    }
    if (layer.class() == "MSTextLayer") {
      layer.setTextColor(color);
    }
  }
}
