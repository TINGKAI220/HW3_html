//question1

// Given array
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

//Implement the table

let studentTable = document.getElementById("studentTable");
let studentInfo = document.createElement("div");
let tableRow = document.createElement("tr");

tableInfo.tableHeader.forEach((ele) => {
  let tableTitle = document.createElement("th");
  tableTitle.textContent = ele;
  tableRow.appendChild(tableTitle);
});
studentInfo.appendChild(tableRow);

tableInfo.tableContent.forEach((ele) => {
  let tableDataRow = document.createElement("tr");
  Object.values(ele).forEach((n) => {
    let tableData = document.createElement("td");
    tableData.textContent = n;
    tableDataRow.appendChild(tableData);
  });
  studentInfo.appendChild(tableDataRow);
});
studentTable.append(studentInfo);

// document.body.insertBefore(
//   studentInfo,
//   document.querySelector(".title").nextSibling
// );

//question2
//Oderlist
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let orderList = document.getElementById("orderList");

list.forEach((ele) => {
  let li = document.createElement("li");

  li.textContent = ele;
  orderList.append(li);
});

//Unorderlist
let unorderList = document.getElementById("unorderList");

list.forEach((ele) => {
  let li = document.createElement("li");

  li.textContent = ele;

  unorderList.appendChild(li);
});

//question3
//List

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let select = document.getElementById("select");

dropDownList.forEach((ele) => {
  let option = document.createElement("option");
  option.value = ele.value;
  option.text = ele.content;
  select.appendChild(option);
});
