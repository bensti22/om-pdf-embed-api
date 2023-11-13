(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.apikey = {
    attach: function (context, settings) {

      var apikey = drupalSettings.apikey;
      console.log(apikey);

    }
  };

  function getFilenameFromUrl(url) {
    const pathname = new URL(url).pathname;
    const index = pathname.lastIndexOf('/');
    return pathname.substring(index + 1) // if index === -1 then index+1 will be 0
  }

  // Je vais faire fonctionner ceci seulement dans les fichiers joint en pied de page. Dans le contenu, les liens absolute avec ancien domaine ne fonctionne pas.


 $("a[href$='.pdf']:not(.no-om-pdf-embed-api a[href$='.pdf']").click(function(e) {



     //console.log(apikey);

     var href = $(this).attr('href');

     //console.log(href);
     //console.log(href.startsWith('/')|| href.startsWith('http://example.com')|| href.startsWith('https://example.com'));

      //Si l'url commence avec chemin relatif (/) ou par le domaine du site, on active adobe embed
      if(href.startsWith('/')|| href.startsWith('https://example.com')|| href.startsWith('https://example.com')){
         e.preventDefault();
         //console.log(nom);
         var nom = href.split(/[\\\/]/).pop();
         previewFile(href, 'NuméroClienID', nom);
      }





 });



 /*
 Copyright 2020 Adobe
 All Rights Reserved.
 NOTICE: Adobe permits you to use, modify, and distribute this file in
 accordance with the terms of the Adobe license agreement accompanying
 it. If you have received this file from a source other than Adobe,
 then your use, modification, or distribution of it requires the prior
 written permission of Adobe.
 */

 /* Pass the embed mode option here */
 const viewerConfig = {
      embedMode: "LIGHT_BOX"
 };

 /* Wait for Adobe Document Services PDF Embed API to be ready and enable the View PDF button */


 /*document.addEventListener("adobe_dc_view_sdk.ready", function () {
      document.getElementById("view-pdf-btn").disabled = false;
 });*/

 /* Function to render the file using PDF Embed API. */
 function previewFile(href, apikey, nom)
 {
      /* Initialize the AdobeDC View object */
      var adobeDCView = new AdobeDC.View({
          /* Pass your registered client id */
          clientId: 'NuméroClienID',
          locale: "fr-FR",
          measurementId: "XXX"
      });




      /* Invoke the file preview API on Adobe DC View object */
      adobeDCView.previewFile({
          /* Pass information on how to access the file */
          content: {
             /* Location of file where it is hosted */
             location: {
                  url: href,
                  /*
                  If the file URL requires some additional headers, then it can be passed as follows:-
                  header: [
                     {
                        key: "<HEADER_KEY>",
                        value: "<HEADER_VALUE>",
                     }
                  ]
                  */
             },
          },
          /* Pass meta data of file */
          metaData: {
             /* file name */
             fileName: nom
          }
      }, viewerConfig);
 };




})(jQuery, Drupal, drupalSettings);
