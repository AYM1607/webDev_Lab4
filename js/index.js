function buildShoppingItem(text) {
  const item = $(`
        <div class="shoppingItem">
            <p>${text}</p>
            <button class="checkButton">
                check
            </button>
            <button class="deleteButton">
                delete
            </burron>
        </div>
    `);
  $(item)
    .find(".checkButton")
    .on("click", event => {
      event.preventDefault();
      $(item)
        .find("p")
        .toggleClass("lineThrough");
    });
  $(item)
    .find(".deleteButton")
    .on("click", event => {
      event.preventDefault();
      $(item).remove();
    });
  return item;
}

function watchForm() {
  $("#shoppingForm").on("submit", event => {
    event.preventDefault();
    const input = $("#itemInput");

    // Get the text for the new shopping item.
    const itemName = $(input).val();

    // Validate that the user wrote something.
    if (itemName === "") {
      alert("Please provide a valid item");
      return;
    }

    // Clear the text on the input if it was valid.
    $(input).val("");

    // Build the element that will be inserted in the list.
    const newItem = buildShoppingItem(itemName);
    $("#shoppingList").append(newItem);
  });
}

function init() {
  watchForm();
}

init();
