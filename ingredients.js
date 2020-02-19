import "./firebase.js";

// var ingredientsDataRef = firebase.database().ref("ingredients");
// ingredientsDataRef.once("value").then(function(snapshot) {
//   console.log(snapshot.toJSON());
//   snapshot.forEach(function(childSnapshot) {
//     var key = childSnapshot.key;
//     var childData = childSnapshot.val();
//     console.log(childData);
//     // var name_val = childSnapshot.val().Name;
//     // var id_val = childSnapshot.val().AssignedID;
//     // $("#name").append(name_val);
//     // $("#id").append(id_val);
//   });
// });

// firebase
//   .firestore()
//   .collection("ingredients")
//   .onSnapshot(querySnapshot => {
//     querySnapshot.forEach(docSnapshot => {
//       const ingredient = docSnapshot.data().ingredient_name;
//       const aka = docSnapshot.data().also_known_as;
//       const purpose = docSnapshot.data().purpose;
//       const facts = docSnapshot.data().scientific_facts;

//       $("#accordion_first").append(
//         `
//         <div class="message-header">
//           <p>
//             <a
//               href="#collapsible-message-accordion-2"
//               data-action="collapse"
//               class="ingredient-name"
//             >${ingredient}</a>
//           </p>
//         </div>`
//       );
//     });
//   });

firebase
  .firestore()
  .collection("ingredients")
  .onSnapshot(querySnapshot => {
    querySnapshot.forEach(docSnapshot => {
      const ingredient = docSnapshot.data().ingredient_name;
      const aka = docSnapshot.data().also_known_as;
      const purpose = docSnapshot.data().purpose;
      const facts = docSnapshot.data().scientific_facts;
      const id = ingredient.toLowerCase().replace(/[^a-z]/g, "-");

      $("#accordion_first").append(
        `<article class="message">
          <div class="message-header">
            <p><a href="#collapsible-message-accordion-${id}" data-action="collapse">${ingredient}</a></p>
          </div>
          <div id="collapsible-message-accordion-${id}" class="message-body is-collapsible" data-parent="accordion_first">
            <div class="message-body-content">
              <div class="table-container">
                <table class="table is-fullwidth is-hoverable">
                  <tr>
                    <th>AKA</th>
                    <td>${aka}</td>
                  </tr>
                  <tr>
                    <th>Purpose</th>
                    <td>${purpose}</td>
                  </tr>
                  <tr>
                    <th>The&nbsp;Science</th>
                    <td>${facts}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </article>`
      );
    });
  });

firebase
  .firestore()
  .collection("harmful_ingredients")
  .onSnapshot(querySnapshot => {
    querySnapshot.forEach(docSnapshot => {
      const name = docSnapshot.data().name;
      const aka = docSnapshot.data().also_known_as;
      const purpose = docSnapshot.data().purpose;
      const facts = docSnapshot.data().scientific_facts;
      const id = name.toLowerCase().replace(/[^a-z]/g, "-");
      console.log(name, id);

      $("#accordion_second").append(
        `<article class="message">
          <div class="message-header">
            <p><a href="#collapsible-message-accordion-${id}" data-action="collapse">${name}</a></p>
          </div>
          <div id="collapsible-message-accordion-${id}" class="message-body is-collapsible" data-parent="accordion_second">
            <div class="message-body-content">
              <div class="table-container">
                <table class="table is-fullwidth is-hoverable">
                  <tr>
                    <th>AKA</th>
                    <td>${aka}</td>
                  </tr>
                  <tr>
                    <th>Purpose</th>
                    <td>${purpose}</td>
                  </tr>
                  <tr>
                    <th>The&nbsp;Science</th>
                    <td>${facts}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          
        </article>`
      );
    });
  });
