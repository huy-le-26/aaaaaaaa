// import { getValue, validateRequired } from "./index.js";
// import { DataStorage } from "./firebase.js";

// const storage = new DataStorage();

// storage.getConversations(onConversationsData);

// function onConversationsData(data) {
//   const conversations = document.querySelector("#conversations");

//   const keys = Object.keys(data);

//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     const container = document.createElement("div");
//     conversations.appendChild(container);
//     const header = document.createElement("div");
//     container.appendChild(header);
//     header.innerHTML = data[key].members.join(" | ");
//   }
// }

// function createConversation(members) {
//   storage.setConversation(members);
// }

// const conversationsForm = document.querySelector("#conversations-form");

// if (conversationsForm) {
//   conversationsForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let valid = false;

//     const member1 = getValue("#member1");

//     valid = validateRequired("member1", member1);

//     const member2 = getValue("#member2");

//     valid = validateRequired("member2", member2);

//     if (valid) {
//       createConversation([member1, member2]);
//     }
//   });
// }
