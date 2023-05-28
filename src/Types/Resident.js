class Resident {
    constructor(firstname, lastname, email,address,password,phone) {
      this.firstname = firstname || '';
      this.lastname = lastname || '';
      this.email = email || '';
      this.address = address || '';
      this.password = password || '';
      this.phone = phone || '';
    }

  }
  
  export default  Resident ;