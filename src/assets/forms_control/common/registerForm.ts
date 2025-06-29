export class RegisterForm {
    public inputUsername = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Username*",
        placeholder: "Username",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        type: "text"
    };
    public inputEmailAddress = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Email Address*",
        placeholder: "Email Address",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        type: "text"
    };
    public inputMobile = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Mobile No*",
        placeholder: "Mobile No",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        type: "text"
    };

    public inputPassword = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Password*",
        placeholder: "Password",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        type: "password"
    };

    public inputConfirmedPassword = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Confirm Password*",
        placeholder: "Confirm Password",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        type: "text"
    };

    public inputCompanyName = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Company Name*",
        placeholder: "Company Name",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        type: "text"
    };
    public selectUserType = {
        options: [{ "name": "Crew", "value": "crew" }, { "name": "Foreigner", "value": "foreigner" },
        { "name": "Port Authority", "value": "port authority" }, { "name": "Port User", "value": "port user" },
        { "name": "CISF", "value": "cisf" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Select User Type*",
        placeholder: "Select User Type",
    };
    
    public selectState = {
        options: [{ "name": "Maharashtra", "value": "MH" }, { "name": "Karnataka", "value": "KR" },
        { "name": "Delhi", "value": "DL" }, { "name": "Gujrat", "value": "GJ" },
        { "name": "Chennai", "value": "CH" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Select State*",
        placeholder: "Select State",
    };

    public inputCheck: {
        label: "I Agree",
        labelClass: "f-w-600 m-b-8 d-block",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        type: "text"
      }
}