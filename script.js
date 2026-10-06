fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Could not load starred repositories (${response.status})`);
    }
    return response.json();
  })
  .then((events) => {
    const list = document.querySelector("#starred");
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
  })
  .catch((error) => {
    const list = document.querySelector("#starred");
    const item = document.createElement("li");
    item.textContent = "Starred repositories could not be loaded.";
    list.appendChild(item);
    console.error(error);
  });