
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
    //require('zepto');
    var Caman = require('caman');


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
          var imageURL = URL.createObjectURL(this.result.blob);                    
          img.src = imageURL;          


          /*var oCanvas = document.getElementById("show-picture"), 
              oCtx = oCanvas.getContext("2d");          

          var oImage = new Image();
          oImage.src = imageURL;
          oImage.onload = function () {
            oCanvas.width = this.width;
            oCanvas.height = this.height;
            oCtx.clearRect(0, 0, this.width, this.height);
            oCtx.drawImage(this, 0, 0);        
          };      */

          // Revoke ObjectURL
          URL.revokeObjectURL(imageURL);

        };    
      });

      var btneffect1 = document.getElementById('btn-effect1');
      btneffect1.addEventListener('click', function(){

        console.log('aplicando filtro...');

        var img = document.getElementById('show-picture');

        Caman(img, function () {
          this.brightness(35).render();
        });


      });

      var btneffect1 = document.getElementById('btn-effect1');
      btneffect1.addEventListener('click', function(){

        console.log('aplicando filtro...');

        var img = document.getElementById('show-picture');

        Caman(img, function () {
          this.brightness(35).render();                  
        });


      });

      var btneffect2 = document.getElementById('btn-effect2');
      btneffect2.addEventListener('click', function(){

        console.log('aplicando filtro...');

        var img = document.getElementById('show-picture');

        Caman(img, function () {          
          this.gamma(1.8).render();
        });


      });

      var btneffect3 = document.getElementById('btn-effect3');
      btneffect3.addEventListener('click', function(){

        console.log('aplicando filtro...');

        var img = document.getElementById('show-picture');

        Caman(img, function () {          
          this.curves("rgb", [0, 0], [200, 0], [155, 255], [255, 255]).render();          
        });

      });




    })();

    
  });