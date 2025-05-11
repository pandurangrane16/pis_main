export class appUserMng {
  data = [
    {
      "appUserId": "149988",
      "name": "MB11A2254KRA82931",
      "fatherName": "KA19AC9812",
      "dateOfBirth": "KA19AC9812",
      "adharNo": "123456789012",
      "drivingLicNo": "17102025",
      "gender": "Male"
    },
    {
      "appUserId": "149988",
      "name": "MB11A2254KRA82931",
      "fatherName": "KA19AC9812",
      "dateOfBirth": "KA19AC9812",
      "adharNo": "123456789012",
      "drivingLicNo": "123456789012",
      "gender": "Male"
    },
    {
      "appUserId": "149988",
      "name": "MB11A2254KRA82931",
      "fatherName": "KA19AC9812",
      "dateOfBirth": "KA19AC9812",
      "adharNo": "123456789012",
      "drivingLicNo": "123456789012",
      "gender": "Female"
    },
    {
      "appUserId": "149988",
      "name": "MB11A2254KRA82931",
      "fatherName": "KA19AC9812",
      "dateOfBirth": "KA19AC9812",
      "adharNo": "123456789012",
      "drivingLicNo": "123456789012",
      "gender": "Male"
    },
    {
      "appUserId": "149988",
      "name": "MB11A2254KRA82931",
      "fatherName": "KA19AC9812",
      "dateOfBirth": "KA19AC9812",
      "adharNo": "123456789012",
      "drivingLicNo": "123456789012",
      "gender": "Male"
    },
    {
      "appUserId": "149988",
      "name": "MB11A2254KRA82931",
      "fatherName": "KA19AC9812",
      "dateOfBirth": "KA19AC9812",
      "adharNo": "123456789012",
      "drivingLicNo": "123456789012",
      "gender": "Female"
    },
    {
      "appUserId": "149988",
      "name": "MB11A2254KRA82931",
      "fatherName": "KA19AC9812",
      "dateOfBirth": "KA19AC9812",
      "adharNo": "123456789012",
      "drivingLicNo": "123456789012",
      "gender": "Male"
    },
  ];


  public inputName = {
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Name As Per Adhar*",
    placeholder: "Name As Per Adhar",
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

  public inputAdharNo = {
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Adhar Card No*",
    placeholder: "Adhar Card No",
    appearance: "outline",
    color: "primary",
    formFieldClass: "w-100",
    isDisabled: false
  }

  public inputPassportNo = {
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Passport No.",
    placeholder: "Passport No.",
    appearance: "outline",
    color: "primary",
    formFieldClass: "w-100",
    isDisabled: false
  }

  public inputElectionCardNo = {
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Election Card No.",
    placeholder: "Election Card No.",
    appearance: "outline",
    color: "primary",
    formFieldClass: "w-100",
    isDisabled: false
  }

  public inputDrivingLicense = {
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Driving License No.",
    placeholder: "Driving License No.",
    appearance: "outline",
    color: "primary",
    formFieldClass: "w-100",
    isDisabled: false
  }

  public inputGovtEmpId = {
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Government Employee ID",
    placeholder: "Government Employee ID",
    appearance: "outline",
    color: "primary",
    formFieldClass: "w-100",
    isDisabled: false
  }

  public inputRecommendingComp = {
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Recommending Company*",
    placeholder: "Recommending Company",
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

  public inputTitle = {
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Title*",
    placeholder: "Title",
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
      { "name": "Junior Engineer", "value": "JE" },{ "name": "Trainee Engineer", "value": "TE" },{ "name": "Driver", "value": "DR" }],
    appearance: "outline",
    color: "primary",
    formFieldClass: "w-100",
    isDisabled: false,
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Select Designation*",
    placeholder: "Select Designation",
  };
}