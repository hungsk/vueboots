<template>
 <h1 class="display-1 text-bold"> Bootstrap </h1>
 <h1 class="text-gray-soft text-regular"> Bootstrap page </h1>
 <table class="table table-striped">
     <thead>
         <tr>
             <th scope="col">元件</th>
             <th scope="col">範例</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <th scope="row">Collapse</th>
             <td>
                 <p>
                     <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                         Link with href
                     </a>
                     <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                         Button with data-bs-target
                     </button>
                 </p>
                 <div class="collapse" id="collapseExample">
                     <div class="card card-body">
                         Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                     </div>
                 </div>
             </td>
         </tr>
         <tr>
             <th scope="row">Select</th>
             <td>
                 <select v-model="myoption" class="form-select" aria-label="Default select example">
                     <option selected>Open this select menu</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                 </select>
                 <p><strong> 你選了: </strong> {{ myoption }} </p>
             </td>
         </tr>
         <tr>
             <th scope="row">Popovers</th>
             <td>
                 <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
                     Popover on top
                 </button>
                 <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
                     Popover on right
                 </button>
                 <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
                     Popover on bottom
                 </button>
                 <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
                     Popover on left
                 </button>
             </td>
         </tr>
         <tr>
             <th scope="row">Tooltips</th>
             <td>
                 <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                     Tooltip on top
                 </button>
                 <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
                     Tooltip on right
                 </button>
                 <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
                     Tooltip on bottom
                 </button>
                 <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
                     Tooltip on left
                 </button>
             </td>
         </tr>
         <tr>
             <th scope="row">Modal</th>
             <td>
                 <!-- Button trigger modal -->
                 <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     Launch demo modal
                 </button>

                 <!-- Modal -->
                 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div class="modal-dialog">
                         <div class="modal-content">
                             <div class="modal-header">
                                 <h5 class="modal-title" id="exampleModalLabel">{{ dlgTitle }}</h5>
                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                             </div>
                             <div class="modal-body">
                                 {{ dlgBody }}
                             </div>
                             <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                 <button type="button" class="btn btn-primary">Save changes</button>
                             </div>
                         </div>
                     </div>
                 </div>
             </td>
         </tr>
         <tr>
             <th scope="row">input type="date"</th>
             <td>
                 <label for="start">Start date:</label>
                 <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31">
             </td>
         </tr>
     </tbody>
 </table>
</template>

<script>
 import {
     Popover,
     Tooltip
 } from "bootstrap/dist/js/bootstrap.esm.min.js";

 export default {
     name: "Bootstrap",
     components: {},
     mounted() {
         //Popover
         var popoverTriggerList = [].slice.call(
             document.querySelectorAll('[data-bs-toggle="popover"]')
         );
         popoverTriggerList.map(function (popoverTriggerEl) {
             return new Popover(popoverTriggerEl);
         });

         //Tooltip
         var tooltipTriggerList = [].slice.call(
             document.querySelectorAll('[data-bs-toggle="tooltip"]')
         );
         tooltipTriggerList.map(function (tooltipTriggerEl) {
             return new Tooltip(tooltipTriggerEl);
         });
     },
     data() {
         return {
             myoption: "",
             dlgTitle: "My Title",
             dlgBody: "My Body",
         };
     },
     methods: {
         selectOption(e) {
             var val = e.target.value;
             var txt = e.target.options[e.target.options.selectedIndex].text;
             console.log("v: ", val);
             console.log("txt: ", txt);
         },
     },
 };
</script>

<style> 
</style>
