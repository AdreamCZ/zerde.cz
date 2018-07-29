window.onload = function(){                 
  Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
  Galleria.run('.galleria');
  var fs = require('fs');
  var files = fs.readdirSync('/obrazky/');
  alert(fs);

}

