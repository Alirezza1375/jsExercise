const comapnies = [
  {id: 1, name: 'Amir', groups: "Vendor, Manufacturer"},
  {id: 2, name: 'Goodi', groups: "Vendor"},
  {id: 3, name: 'Tilda', groups: "Manufacturer, Prospect"},
  {id: 4, name: 'Jolene', groups: "Manufacturer"},
];


const groups = [
  {id: 1, name: 'Vendor'},
  {id: 2, name: 'Manufacturer'},
  {id: 3, name: 'Prospect'},
];


const changes = {
  ids: [1, 2, 3, 4],
  values: [3, 1],
};

const result = [
  {id: 1, values: [3]},
  {id: 2, values: [3]},
  {id: 3, values: [1]},
  {id: 4, values: [1, 3]}
]
