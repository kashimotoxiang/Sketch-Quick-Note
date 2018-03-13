var Thicker = function(context) {
  ThicknessAdjust(context, +2);
};
var Slimmer = function(context) {
  ThicknessAdjust(context, -2);
};

function ThicknessAdjust(context, Thickness) {
  var selectedLayers = context.selection;
  var selectedCount = selectedLayers.count();

  if (selectedCount == 0) {
    doc.showMessage("Please select one Shape or Text layer.");
    return false;
  }

  for (var i = 0; i < selectedCount; i++) {
    var layer = selectedLayers[i];

    if (layer.class() == "MSShapeGroup") {
      _thickness =
        layer
          .style()
          .borders()
          .firstObject()
          .thickness() + Thickness;

      layer
        .style()
        .borders()
        .firstObject().thickness = _thickness;
    }
    if (layer.class() == "MSTextLayer") {
      _fontsize = layer.fontSize() + Thickness;
      layer.setFontSize(_fontsize);
    }
  }
}
