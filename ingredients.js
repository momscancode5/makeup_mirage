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

firebase
  .firestore()
  .collection("ingredients")
  .onSnapshot(querySnapshot => {
    querySnapshot.forEach(docSnapshot => {
      const ingredient_name = docSnapshot.data().ingredient_name;
      const aka = docSnapshot.data().also_known_as;
      const purpose = docSnapshot.data().purpose;
      const facts = docSnapshot.data().scientific_facts;

      $(".table-body").append(
        `<tr>
        <td>${ingredient_name}</td>
        <td>${aka}</td>
        <td>${purpose}</td>
        <td>${facts}</td>
      </tr>`
      );
    });
  });
