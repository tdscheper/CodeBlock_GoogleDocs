function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Code Block').addItem(
    'Activate',
    'code_block'
  ).addToUi();
}

function code_block() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var childIdx = body.getChildIndex(doc.getCursor().getElement());

  var tableStyle = {};
  tableStyle[DocumentApp.Attribute.BORDER_COLOR] = '#FFFFFF'; // white

  var cellStyle = {};
  cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#EFEFEF'; // light gray
  cellStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = '#000000'; // black text

  var paraStyle = {}
  paraStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Courier New';
  paraStyle[DocumentApp.Attribute.LINE_SPACING] = 1;

  var table = body.insertTable(childIdx);
  table.setAttributes(tableStyle);
  var tableCell = table.appendTableRow().appendTableCell();
  tableCell.setAttributes(cellStyle);
  var paraInCell = tableCell.getChild(0).asParagraph();
  paraInCell.setAttributes(paraStyle);
}
