export class foreignerMng {
    data = [
        {
            "id": "149988",
            "name": "MB11A2254KRA82931",
            "fatherName": "KA19AC9812",
            "dateOfBirth": "KA19AC9812",
            "identificationMark": "123456789012",
            "gender": "Male"
        },
        {
            "id": "149988",
            "name": "MB11A2254KRA82931",
            "fatherName": "KA19AC9812",
            "dateOfBirth": "KA19AC9812",
            "identificationMark": "123456789012",
            "gender": "Male"
        },
        {
            "id": "149988",
            "name": "MB11A2254KRA82931",
            "fatherName": "KA19AC9812",
            "dateOfBirth": "KA19AC9812",
            "identificationMark": "123456789012",
            "gender": "Male"
        },
        {
            "id": "149988",
            "name": "MB11A2254KRA82931",
            "fatherName": "KA19AC9812",
            "dateOfBirth": "KA19AC9812",
            "identificationMark": "123456789012",
            "gender": "Male"
        },
        {
            "id": "149988",
            "name": "MB11A2254KRA82931",
            "fatherName": "KA19AC9812",
            "dateOfBirth": "KA19AC9812",
            "identificationMark": "123456789012",
            "gender": "Male"
        },
        {
            "id": "149988",
            "name": "MB11A2254KRA82931",
            "fatherName": "KA19AC9812",
            "dateOfBirth": "KA19AC9812",
            "identificationMark": "123456789012",
            "gender": "Male"
        },
        {
            "id": "149988",
            "name": "MB11A2254KRA82931",
            "fatherName": "KA19AC9812",
            "dateOfBirth": "KA19AC9812",
            "identificationMark": "123456789012",
            "gender": "Male"
        },
    ];

    public inputName = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Name*",
        placeholder: "Name",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputFathersName = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Father's Name*",
        placeholder: "Father's Name",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputAge = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Age*",
        placeholder: "Age",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
    }

    public inputMobileNo = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Mobile No.*",
        placeholder: "Mobile No.",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputEmail = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Email Address.*",
        placeholder: "Email Address.",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputIdentificationMark = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Identification Mark",
        placeholder: "Identification Mark",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputVisaNo = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Visa No.*",
        placeholder: "Visa No.",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputPassportNo = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Passport No.*",
        placeholder: "Passport No.",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputNationality = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Nationality*",
        placeholder: "Nationality",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }
    
    public inputImmigrationClearanceNo = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Immigration Clearance No.*",
        placeholder: "Immigration Clearance No.",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputPresentAddress = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Present Address*",
        placeholder: "Present Address",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputPermanantAddress = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Permanent Address*",
        placeholder: "Permanent Address",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputDocumentTitle = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Document Title*",
        placeholder: "Document Title",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public selectGender = {
        options: [{ "name": "Male", "value": "M" }, { "name": "Female", "value": "F" }, { "name": "Other", "value": "O" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Select Gender*",
        placeholder: "Select Gender",
    };

    public selectDesignation = {
        options: [{ "name": "Manager", "value": "MR" }, { "name": "Team Lead", "value": "TL" }, { "name": "Senior Engineer", "value": "SE" },
        { "name": "Junior Engineer", "value": "JE" }, { "name": "Trainee Engineer", "value": "TE" }, { "name": "Driver", "value": "DR" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Select Designation*",
        placeholder: "Select Designation",
    };

    public selectNOCDept = {
        options: [{ "name": "Product and Development", "value": "PD" }, { "name": "Account", "value": "AC" }, { "name": "Administration", "value": "AD" },
        { "name": "Marine", "value": "MR" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "NOC Provided By Department*",
        placeholder: "NOC Provided By Department",
    };
}