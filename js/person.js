export const detail = () => {
    var name = "Dasa";
    var age = 22;
    var city = "gandhinagar";

    return "Name is :" + name + "<br>Age is :" + age + "<br>City is :"+city;
};

export const colleage = () => {
    var name = "xyz";
    var department = "ABC";

    return "College name is :" + name + "<br>Department is :" + department ;
};

const hod = (name) => {
    console.log("HOD :" + name);
}

export default hod;