class User{
    constructor(id, fname, lname, password, picture, gender, address, phone, email) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.password = password;
        this.picture = picture;
        this.gender = gender;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.fullname = fname + " " + lname
    }
    //getter methods
    getid() { return this.id; }
    getfname() { return this.fname; }
    getlname() { return this.lname; }
    getfullname() { return this.fullname; }
    getpassword() { return this.password; }
    getpicture() { return this.picture; }
    getgender() { return this.gender; }
    getaddress() { return this.address; }
    getphone() { return this.phone; }
    getemail() { return this.email; }

    //setter methods
    setfname(value) { fname = value; }
    setlname(value) { lname = value; }
    setfullname(value) { fullname = value;}
    setpassword(value) { password = value; }
    setpicture(value) { picture = value; }
    setgender(value) { gender = value; }
    setaddress(value) { address = value; }
    setphone(value) { phone = value; }
    setemail(value) { email = value; }
}

module.exports = User