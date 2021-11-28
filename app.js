"use strict"
// Most Wanted Project User Stories Algorithms
// #1: As a user, I want to be able to search for someone based on a single criterion
// Algorithm for Search by single criteria:
// -prompt user for a single criteria, i.e Name
// -criteria must be an element from the database
// -return all elements associated with that single criteria
// -Use debugging tool to find error in code for "undefined" in prompt box
// -Prompt the user for which criteria they would like to search for (i.e. eye color)
// -Prompt the user for the criteria calue they would like to search for (i.e. "blue")
// -Use their input to filter the data the data set for only objects that match their criteria
// -Return the  objects that match to the caller of the function!

//#2: As a user, I want to be able to search for someone based on multiple traits (up to a
// maximum of five criteria at once).
// Algorithm for multiple criteria search
// -prompt user to select (from a list?) up to 5 criteria
// -return all Names associated with all input criteria utilizing .filter?

//#3: As a user, after locating a person, I want to see only that person’s descendants (display the  names of the descendants).
// Algorithm for seeing only that person's descendants
// -Utilizing debugging tool to search for possible solution entry of "descendants" into prompt box 

//#4: As a user, after locating a person, I want to see only that person's immediate family members, displaying the names
//  of the family members and their relation to the found person.
// Algorithm for seeing  only that person's immediate family members
//  -Utilizing debugging tool to search for possible solution entry of "family" into prompt box

//Menu functions.
//Used for the overall flow of the application.
/////////////////////////////////////////////////////////////////
//#region

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      searchByName(people);
      break;
    case 'no':
      searchByTrait(people);
    break;
      default:
        alert('nope')
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  // mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){
//   /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = promptFor("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", autoValid);

  switch(displayOption){
    case "info":
    displayPerson(person);
    break;
    case "family":
    displayFamily(person)

    
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}
function displayFamily(person) {
  let spouse = data.filter(function(potentialMatch){
    return potentialMatch.id === person.currentSpouse
  })
  let parentOne = person.parents[0] ? person.parents[0] : null; 
  let parentTwo = person.parents[1] ? person.parents[1] : null; 
  let currentSpouse = spouse.length > 0 ? spouse[0] : "";

  parentOne = parentOne ? data.find((potentialMatch) => potentialMatch.id === parentOne) : ""; 
  parentTwo = parentTwo ? data.find((potentialMatch) => potentialMatch.id === parentTwo) : "";
  console.log(currentSpouse, parentOne, parentTwo) 
  alert (`Current Spouse: ${currentSpouse.firstName} ${currentSpouse.lastName}
  Parent: ${parentOne.firstName} ${parentOne.lastName}
  Parent: ${parentTwo.firstName} ${parentTwo.lastName}`)
}

//#endregion

//Filter functions.
//Ideally you will have a function for each trait.
/////////////////////////////////////////////////////////////////
//#region 

//nearly finished function used to search through an array of people to find matching first and last name and return a SINGLE person object.
function searchByName(people){
  let firstName = prompt("What is the person's first name?").toLowerCase();
  let lastName = prompt("What is the person's last name?").toLowerCase();
  console.log(firstName, lastName)
  let foundPerson = people.filter(function(potentialMatch){
    return potentialMatch.firstName.toLowerCase() === firstName && potentialMatch.lastName.toLowerCase() === lastName
      })

  // TODO: find the person single person object using the name they entered.
  console.log(foundPerson)
  mainMenu(foundPerson[0], data);
}

//unfinished function to search through an array of people to find matching eye colors. Use searchByName as reference.
function searchByGender(people){
let gender = promptFor("Enter Male or Female", autoValid);
let result = people.filter(function(potentialMatch){
  if(potentialMatch.gender === gender){
    return true;
  }
  else{

    return false;
  }
})
   return result;
}

function searchByDob(people){
  let dob = promptFor("Enter date of birth, m/d/year", autoValid);
  let result = people.filter(function(potentialMatch){
    if(potentialMatch.dob === dob){
      return true;
    }
    else{
  
      return false;
    }
  })
     return result;
  }
  
function searchByEyeColor(people){
  let eyeColor = promptFor("What is the person's eye color?", autoValid);
  let result = people.filter(function(potentialMatch){
    if(potentialMatch.eyeColor === eyeColor){
      return true;
    }
    else{

      return false;
    }
  })

  return result;
}
function searchByWeight(people){
  let weight = promptFor("What is the person's weight?", autoValid);
  let result = people.filter(function(potentialMatch){
    if(potentialMatch.weight == weight){
      return true;
    }
    else{

      return false;
    }
  })

  return result;
}

function searchByHeight(people){
  let height = promptFor("What is the person's height?", autoValid);
  let result = people.filter(function(potentialMatch){
    if(potentialMatch.height == height){
      return true;
    }
    else{

      return false;
    }
  })

  return result;
}


function searchByOccupation(people){
  let occupation = promptFor("Enter the occupation to filter by: ", autoValid);
  let result = people.filter(function(potentialMatch){
    if(potentialMatch.occupation === occupation){
      return true;
    }
    else{

      return false;
    }
  })

  return result;
}
// //TODO: add other trait filter functions here.
function searchByTrait(people) {
let trait = prompt('Would you like to search by gender, dob, eye color, weight, height or occupation?').toLowerCase();
let result;
switch(trait){
  case "gender":
    result = searchByGender(people);
    displayPeople(result);
    break
  case "dob":
    result = searchByDob(people);
    displayPeople(result);
    break
  case "eye color":
    result = searchByEyeColor(people);
    displayPeople(result);
    break
  case "weight":
    result = searchByWeight(people);
    displayPeople(result);
    break
  case "height":
    result = searchByHeight(people);
    displayPeople(result);
    break
  case "occupation":
    result = searchByOccupation(people);
    displayPeople(result);
    break

  default: 
    alert("Not a valid trait to search by, please try again.")
    searchByTrait(people)  
}
}



//#endregion

//Display functions.
//Functions for user interface.
/////////////////////////////////////////////////////////////////
//#region 

// alerts a list of people
function displayPeople(people){
  if (people.length === 0) {
    alert ("Person not found, Please Try Again.")
      return
  }
  if (people.length > 1) {
    alert(people.map(function(person){
      return person.firstName + " " + person.lastName;
    }).join("\n"));
    searchByTrait(people)
    
  } else {
    mainMenu(people[0], data)  
    return
  }
}

function displayPerson(person){
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "gender:" + person.gender + "\n";
  personInfo += "dob:" + person.dob + "\n";
  personInfo += "eye color:" + person.eyeColor + "\n";
  personInfo += "weight:" + person.weight + "\n";
  personInfo += "height:" + person.height + "\n";
  personInfo += "occupation:" + person.occupation + "\n";
  
  alert(personInfo);
}
//Validation functions.
//Functions to validate user input.
/////////////////////////////////////////////////////////////////
//#region 

//a function that takes in a question to prompt, and a callback function to validate the user input.
//response: Will capture the user input.
//isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
//this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).
function promptFor(question, valid){
  let isValid;
  do{
    var response = prompt(question);
    isValid = valid(response);
  } while(response === ""  ||  isValid === false)
  return response;
}

// helper function/callback to pass into promptFor to validate yes/no answers.
function yesNo(input){
  if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
    return true;
  }
  else{
    return false;
  }
}

// helper function to pass in as default promptFor validation.
//this will always return true for all inputs.
function autoValid(input){
  return true; // default validation only
}

//Unfinished validation function you can use for any of your custom validation callbacks.
//can be used for things like eye color validation for example.
function customValidation(input){
}