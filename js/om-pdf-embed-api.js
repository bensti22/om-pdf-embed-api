(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.apikey = {
    attach: function (context, settings) {

      var apikey = drupalSettings.apikey;
      //console.log(apikey);

    }
  };



  $(".file--application-pdf a").click(function(e) {
     e.preventDefault();
     var href = $(this).attr('href');
     previewFile(href, apikey);
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
 function previewFile(href, apikey)
 {
      /* Initialize the AdobeDC View object */
      var adobeDCView = new AdobeDC.View({
          /* Pass your registered client id */
          clientId: 'xxx',
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
             fileName: "Bodea Brochure.pdf"
          }
      }, viewerConfig);
 };




})(jQuery, Drupal, drupalSettings);
