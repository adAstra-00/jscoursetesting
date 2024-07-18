let userRole = "Employee"
let accessLevel

switch (userRole) {
    case "Employee":
        accessLevel = "Admin Access";
        break;
    case "Enrolled Member":
        accessLevel = "Full Access";
        break;
    case "Subscriber":
        accessLevel = "Partial Access";
        break;
    case "Non-Subscriber":
        accessLevel = "No Access - Please Subscribe";
        break;
    default:
        accessLevel = "No Access";   
}

console.log("Access Status: ", accessLevel);
