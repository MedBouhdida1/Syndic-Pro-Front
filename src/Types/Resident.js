class resident {
  constructor(id = '', firstName = '', lastName = '', email = '', address = '', password = '', phone = '') {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.password = password;
    this.phone = phone;
    this.factures = [];
  }

}

export default resident; 