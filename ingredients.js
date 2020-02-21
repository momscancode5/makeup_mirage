import "./firebase.js";
import "./js/bulma-collapsible.min.js";   // for bulma accordion,

firebase
  .firestore()
  .collection("ingredients").get()
  .then(querySnapshot => {
    let counter = 1;
    querySnapshot.forEach(docSnapshot => {
      const ingredient = docSnapshot.data().ingredient_name;
      const aka = docSnapshot.data().also_known_as;
      const purpose = docSnapshot.data().purpose;
      const facts = docSnapshot.data().scientific_facts;
      const id = ingredient.toLowerCase().replace(/[^a-z]/g, "-");
      const source = docSnapshot.data().source;
      // Set first accordion item to be open by default
      let openByDefault = '';
      if (counter === 1) {
        openByDefault = ' is-active';
      }
      counter++;

      $("#accordion-common-ingredients").append(
        `<article class="message is-primary">
        <div class="message-header">
          <p><a href="#${id}" data-action="collapse">${ingredient}</a></p>
        </div>
        <div id="${id}" class="message-body is-collapsible${openByDefault}" data-parent="accordion-common-ingredients">
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
                <tr>
                  <th>Source</th>
                  <td><a href="${source}" target="_blank">${source}</a></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </article>`
      );
    });
  })
  .then(function() {
    bulmaCollapsible.attach();  // AFTER data loads, manipulate DOM for accordion
  });

firebase
  .firestore()
  .collection("harmful_ingredients").get()
  .then(querySnapshot => {
    let counter = 1;
    querySnapshot.forEach(docSnapshot => {
      const name = docSnapshot.data().name;
      const aka = docSnapshot.data().also_known_as;
      const purpose = docSnapshot.data().purpose;
      const facts = docSnapshot.data().scientific_facts;
      const source = docSnapshot.data().source;
      const id = name.toLowerCase().replace(/[^a-z]/g, "-");
      let openByDefault = '';
      if (counter === 1) {
        openByDefault = ' is-active';
      }
      counter++;
      // console.log(name, id);

      $("#accordion-harmful-ingredients").append(
        `<article class="message is-danger">
        <div class="message-header">
          <p><a href="#${id}" data-action="collapse">${name}</a></p>
        </div>
        <div id="${id}" class="message-body is-collapsible${openByDefault}" data-parent="accordion-harmful-ingredients">
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
                  <th>Health&nbsp;Concerns</th>
                  <td>${facts}</td>
                </tr>
                <tr>
                  <th>Source</th>
                  <td><a href="${source}" target="_blank">${source}</a></td>
                </tr>
              </table>
            </div>
          </div>
        </div>

      </article>`
      );
    });
  })
  .then(function() {
    bulmaCollapsible.attach();  // AFTER data loads, manipulate DOM for accordion
  });
