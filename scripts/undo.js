$(function() {
  var stack = new Undo.Stack(),
    EditCommand = Undo.Command.extend({
      constructor: function(textarea, oldValue, newValue) {
        this.textarea = textarea;
        this.oldValue = oldValue;
        this.newValue = newValue;
      },
      execute: function() {
      },
      undo: function() {
        this.textarea.html(this.oldValue);
      },

      redo: function() {
        this.textarea.html(this.newValue);
      }
    });
  stack.changed = function() {
    stackUI();
  };

  var undo = $(".undo"),
    redo = $(".redo"),
    dirty = $(".dirty");
  function stackUI() {
    undo.attr("disabled", !stack.canUndo());
    redo.attr("disabled", !stack.canRedo());
    dirty.toggle(stack.dirty());
  }
  stackUI();

  $(document.body).delegate(".undo,.redo, .save", "click", function() {
    var what = $(this).attr("class");
    stack[what]();
    return false;
  });

  var text = $("#page-builder"),
    startValue = text.html(),
    timer;
  $(".component-menu").bind("click", function() {
    // a way too simple algorithm in place of single-character undo
    clearTimeout(timer);
    timer = setTimeout(function() {
      var newValue = text.html();
      // ignore meta key presses
      if (newValue != startValue) {
        // this could try and make a diff instead of storing snapshots
        stack.execute(new EditCommand(text, startValue, newValue));
        startValue = newValue;
      }
    }, 250);
  });
  $("#page-builder").bind("keyup", function() {
    // a way too simple algorithm in place of single-character undo
    clearTimeout(timer);
    timer = setTimeout(function() {
      var newValue = text.html();
      // ignore meta key presses
      if (newValue != startValue) {
        // this could try and make a diff instead of storing snapshots
        stack.execute(new EditCommand(text, startValue, newValue));
        startValue = newValue;
      }
    }, 250);
  });
  $("#page-builder").bind("click", function() {
    // a way too simple algorithm in place of single-character undo
    clearTimeout(timer);
    timer = setTimeout(function() {
      var newValue = text.html();
      // ignore meta key presses
      if (newValue != startValue) {
        // this could try and make a diff instead of storing snapshots
        stack.execute(new EditCommand(text, startValue, newValue));
        startValue = newValue;
      }
    }, 250);
  });

  $(document).keydown(function(event) {
    if (!event.metaKey || event.keyCode != 90) {
      return;
    }
    event.preventDefault();
    if (event.shiftKey) {
      stack.canRedo() && stack.redo()
    } else {
      stack.canUndo() && stack.undo();
    }
  });
});
(function() {

// based on Backbone.js' inherits
var ctor = function(){};
var inherits = function(parent, protoProps) {
  var child;

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  ctor.prototype = parent.prototype;
  child.prototype = new ctor();

  if (protoProps) extend(child.prototype, protoProps);

  child.prototype.constructor = child;
  child.__super__ = parent.prototype;
  return child;
};

function extend(target, ref) {
  var name, value;
  for ( name in ref ) {
    value = ref[name];
    if (value !== undefined) {
      target[ name ] = value;
    }
  }
  return target;
};

var Undo = {
  version: '0.1.15'
};

Undo.Stack = function() {
  this.commands = [];
  this.stackPosition = -1;
  this.savePosition = -1;
};

extend(Undo.Stack.prototype, {
  execute: function(command) {
    this._clearRedo();
    command.execute();
    this.commands.push(command);
    this.stackPosition++;
    this.changed();
  },
  undo: function() {
    this.commands[this.stackPosition].undo();
    this.stackPosition--;
    this.changed();
  },
  canUndo: function() {
    return this.stackPosition >= 0;
  },
  redo: function() {
    this.stackPosition++;
    this.commands[this.stackPosition].redo();
    this.changed();
  },
  canRedo: function() {
    return this.stackPosition < this.commands.length - 1;
  },
  save: function() {
    this.savePosition = this.stackPosition;
    this.changed();
  },
  dirty: function() {
    return this.stackPosition != this.savePosition;
  },
  _clearRedo: function() {
    // TODO there's probably a more efficient way for this
    this.commands = this.commands.slice(0, this.stackPosition + 1);
  },
  changed: function() {
    // do nothing, override
  }
});

Undo.Command = function(name) {
  this.name = name;
}

var up = new Error("override me!");

extend(Undo.Command.prototype, {
  execute: function() {
    throw up;
  },
  undo: function() {
    throw up;
  },
  redo: function() {
    this.execute();
  }
});

Undo.Command.extend = function(protoProps) {
  var child = inherits(this, protoProps);
  child.extend = Undo.Command.extend;
  return child;
};

// AMD support
if (typeof define === "function" && define.amd) {
  // Define as an anonymous module
  define(Undo);
} else if(typeof module != "undefined" && module.exports){
  module.exports = Undo
}else {
  this.Undo = Undo;
}
}).call(this);
