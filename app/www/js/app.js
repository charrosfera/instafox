
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Zepto provides nice js and DOM methods (very similar to jQuery,
    // and a lot smaller):
    // http://zeptojs.com/
    // var $ = require('zepto');

    // Need to verify receipts? This library is included by default.
    // https://github.com/mozilla/receiptverifier
    // require('receiptverifier');

    // Want to install the app locally? This library hooks up the
    // installation button. See <button class="install-btn"> in
    // index.html
    //require('./install-button');


    // Write your app here.

    (function(){

      console.log('iniciando...');

      var btn = document.getElementById('btn-select-photo');
      console.log(btn);
      btn.addEventListener('click', function() {

        console.log('Click');

        var activity = new MozActivity({
          name: 'pick',
          data: {
            type: 'image/jpeg',
            width: window.innerWidth,
            height: window.innerHeight
          }
        });

        console.log( activity );

        activity.onsuccess = function success() {            

            var img = document.getElementById('show-picture');
            img.src = URL.createObjectURL(this.result.blob);

            // Revoke ObjectURL
            URL.revokeObjectURL(imgURL);

          };    
        });


    })();

    
  });