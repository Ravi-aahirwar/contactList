// contact list data
let contactItem = [
  { name: "ravi", mobNumber: 7428388947, location: "Delhi" },
  { name: "ronit", mobNumber: 987652111, location: "delhi" },
  { name: "shubham", mobNumber: 742835511, location: "goa" },
  { name: "ankit", mobNumber: 10250029, location: "punjab" },
  { name: "sunny", mobNumber: 9818388947, location: "surat" },
  { name: "kartik", mobNumber: 9555182002, location: "haryana" },
  { name: "karan", mobNumber: 9551888947, location: "delhi" },
  { name: "prakash", mobNumber: 9716459770, location: "gurgaon" },
  { name: "deepanshu", mobNumber: 7987618947, location: "delhi" },
  { name: "shriti", mobNumber: 7428388947, location: "U.P" },
];
let Input = document.querySelector("#handleInput");
let Btn = document.querySelector("#handleBtn");
let ullist = document.getElementById("ulList");
// -search button-
Btn.addEventListener("click", function () {
  if (Input.value === "") {
    alert("wrong input");
  } else {
    let inputData = Input.value.toLowerCase();
    let filterArraydata = contactItem.filter((contact) =>
      contact.name.toLowerCase().includes(inputData)
    );
    let creatLi = document.createElement("li");
    ullist.appendChild(creatLi);
    creatLi.innerHTML = `${filterArraydata[0].name} ${filterArraydata[0].location} ${filterArraydata[0].mobNumber}`;
  }
  document.querySelector("#handleInput").value = "";
});
// view saved contacts
let savContact = document.getElementById("viewResult");
for (let i = 0; i <= contactItem.length - 1; i++) {
  let viewLi = document.createElement("li");
  savContact.appendChild(viewLi);
  viewLi.innerHTML = `${contactItem[i].name} ${contactItem[i].location} ${contactItem[i].mobNumber}`;
}
// add data into contactItem
let savedul = document.getElementById("viewResult");
let addName = document.getElementById("input1");
let addLocation = document.getElementById("input2");
let addMObNumber = document.getElementById("input3");
function storeData() {
  if (
    addName.value === "" ||
    addLocation.value === "" ||
    addMObNumber.value === ""
  ) {
    alert("enter contact details");
  } else {
    let dataObject = {
      name: addName.value,
      location: addLocation.value,
      mobNumber: addMObNumber.value,
    };
    alert("added succesfully :)");
    contactItem.push(dataObject);
    let creatSavedLi = document.createElement("li");
    savedul.appendChild(creatSavedLi);
    creatSavedLi.innerHTML = `${dataObject.name} ${dataObject.location} ${dataObject.mobNumber} `;
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    // console.log(dataObject)
    console.log(contactItem);
  }
}
let block = document.getElementById("blockDispaly");
block.addEventListener("click", () => {
  if (savedul.style.display == "block") {
    savedul.style.display = "none";
  } else {
    savedul.style.display = "block";
  }
});
