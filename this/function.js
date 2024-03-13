const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };


  const person2 = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    returneaza : function() {
      return this;
    }
  };

  console.log(returneaza);

//   TO DO LEARN