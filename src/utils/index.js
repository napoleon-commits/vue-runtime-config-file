export default (jsonObject, recognizedBranches) => {
  const returnObject = jsonObject;
  for (let i = 0; i < returnObject.groups.length; i += 1) {
    if (returnObject.groups[i].fields) {
      for (let j = 0; j < returnObject.groups[i].fields.length; j += 1) {
        if (returnObject.groups[i].fields[j].model === 'ServiceBranch') {
          returnObject.groups[i].fields[j].values = recognizedBranches;
        }
      }
    }
  }
  return returnObject;
};
