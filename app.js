const inputFields = document.getElementById("needs-validation");

let validation = Array.prototype.filter.call(inputFields, function(inputField) {
  inputField.addEventListener("input", function(e) {
    if (inputField.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    inputField.classList.add("invalid");
  });

  // inputField.addEventListener("submit", function (e) {
  //   if (inputField.checkValidity() === false) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //   }
  //   inputField.classList.add("invalid");
  // });
});

// console.log("inputFields", typeof inputFields === typeof [])
// console.log("filtered form", typeof validation === typeof [])


// let submitFormHandler = (e) => {
//   console.log(e.target.value);
// };

// inputFields.addEventListener("input", submitFormHandler);


// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();