module.exports ={
  activate: function () {
    atom.commands.add('atom-workspace',{
      'ascii-art:convert': this.convert
    });
  },

  convert: function(){
    var editor = atom.workspace.getActivePaneItem();
    editor.insertText('Hello,Smalevbr0!');
  }
};
