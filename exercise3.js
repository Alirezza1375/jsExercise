const companies = [
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

/*const result = [
  {id: 1, values: [3]},
  {id: 2, values: [3]},
  {id: 3, values: [1]},
  {id: 4, values: [1, 3]}
] */ 



const companyGroupIdsByNames = companyGroups => {
  return companyGroups.split(", ").map(companyGroup => {
    return groups.find(group => group.name === companyGroup).id;
  })
  
}



const result = changes.ids.map(id => {
  const company = companies.find(comp => comp.id === id); 
  const companyGroupIds = companyGroupIdsByNames(company.groups) // [1,2] 
  const newChanges = changes.values.filter(value => {
    return !companyGroupIds.includes(value) 
  })


  return {
    id,
    values: newChanges
  }
  
})

console.log(result);