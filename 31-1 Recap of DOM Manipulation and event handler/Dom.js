

document.getElementById("apply-bg").addEventListener("click", function () {
  const friends = document.getElementsByClassName("friend");

  for (const friend of friends) {
    friend.style.backgroundColor = "steelblue";
  }
});

document.getElementById("center-3rd").addEventListener("click", function () {
  const friends = document.getElementsByClassName("friend");

  for (const friend of friends) {
    friend.style.textAlign = "center";
  }
});

let friendCount = 6;

document.getElementById("friend-add").addEventListener("click", function () {
  const friendContainer = document.getElementById("friends-container");
  
  const friend = document.createElement("div");

  friend.classList.add("friend");

  friend.innerHTML = `
  
  <h3 class="friend-name">friend-${friendCount}</h3>
  <p>Earum, ad dolores. Odio, blanditiis.</p>
  
  
  `;

  friendCount++;
  
  friendContainer.appendChild(friend);
});


