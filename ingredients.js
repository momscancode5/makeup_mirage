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

      $(".message").append(
        `
        <div id="accordion_first">
          <div class="message-header">
            <p>
              <a
                href="#collapsible-message-accordion-2"
                data-action="collapse"
                class="ingredient-name"
              >${ingredient}</a>
            </p>
          </div>
        </div>

        <div class="message-body-content">
          <div class="table-container">
            <table class="table is-fullwidth is-hoverable">
              <tbody class="table-body">
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
              </tbody>
            </table>
          </div>
        </div>
      </div>`
      );
    });
  });
