export class requestRfid {
    data = [
        {
          "type": "RFID Card(Person)",
          "requestId": "26783",
          "reqAmt": "150",
          "reqQty": "1",
          "approvedAmt": "",
          "approvedQty": "",
          "requestedDateTime": "2022/11/17 13:23",
          "approvedDateTime": "",
          "status": "InitialCreate",
          "action": "Send For Approval"
        },
        {
          "type": "RFID Card(Person)",
          "requestId": "23755",
          "reqAmt": "750",
          "reqQty": "5",
          "approvedAmt": "750",
          "approvedQty": "5",
          "requestedDateTime": "2019/08/02 11:36",
          "approvedDateTime": "8/2/2019 11:46:46 AM",
          "status": "Approved",
          "action": "Approval Completed"
        },
        {
          "type": "RFID Tag(Vehicle)",
          "requestId": "23218",
          "reqAmt": "210",
          "reqQty": "1",
          "approvedAmt": "",
          "approvedQty": "",
          "requestedDateTime": "2019/02/10 16:24",
          "approvedDateTime": "",
          "status": "Rejected",
          "action": "Rejected"
        },
        {
          "type": "RFID Card(Person)",
          "requestId": "23217",
          "reqAmt": "150",
          "reqQty": "1",
          "approvedAmt": "",
          "approvedQty": "",
          "requestedDateTime": "2019/02/10 16:24",
          "approvedDateTime": "",
          "status": "Rejected",
          "action": "Rejected"
        },
        {
          "type": "RFID Tag(Vehicle)",
          "requestId": "23216",
          "reqAmt": "420",
          "reqQty": "2",
          "approvedAmt": "210",
          "approvedQty": "1",
          "requestedDateTime": "2019/02/10 16:24",
          "approvedDateTime": "2/10/2019 4:25:44 PM",
          "status": "Approved",
          "action": "Approval Completed"
        },
        {
          "type": "RFID Card(Person)",
          "requestId": "23215",
          "reqAmt": "300",
          "reqQty": "2",
          "approvedAmt": "300",
          "approvedQty": "2",
          "requestedDateTime": "2019/02/10 16:24",
          "approvedDateTime": "2/10/2019 4:25:47 PM",
          "status": "Approved",
          "action": "Approval Completed"
        },
        {
          "type": "RFID Tag(Vehicle)",
          "requestId": "23212",
          "reqAmt": "210",
          "reqQty": "1",
          "approvedAmt": "",
          "approvedQty": "",
          "requestedDateTime": "2019/02/10 10:51",
          "approvedDateTime": "",
          "status": "Rejected",
          "action": "Rejected"
        },
        {
          "type": "RFID Card(Person)",
          "requestId": "23211",
          "reqAmt": "150",
          "reqQty": "1",
          "approvedAmt": "",
          "approvedQty": "",
          "requestedDateTime": "2019/02/10 10:51",
          "approvedDateTime": "",
          "status": "Rejected",
          "action": "Rejected"
        },
        {
          "type": "RFID Tag(Vehicle)",
          "requestId": "23210",
          "reqAmt": "420",
          "reqQty": "2",
          "approvedAmt": "210",
          "approvedQty": "1",
          "requestedDateTime": "2019/02/10 10:51",
          "approvedDateTime": "2/10/2019 10:55:18 AM",
          "status": "Approved",
          "action": "Approval Completed"
        },
        {
          "type": "RFID Card(Person)",
          "requestId": "23209",
          "reqAmt": "300",
          "reqQty": "2",
          "approvedAmt": "300",
          "approvedQty": "2",
          "requestedDateTime": "2019/02/10 10:51",
          "approvedDateTime": "2/10/2019 10:54:56 AM",
          "status": "Approved",
          "action": "Approval Completed"
        }
      ]
      ;
  
  
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


    purchasedRfid = [
        {
            "requestRfid":"24536",
            "amount":"1500",
            "reqQty" : 10,
            "approvedQty" : 10,
        },
        {
            "requestRfid":"24536",
            "amount":"1500",
            "reqQty" : 10,
            "approvedQty" : 10,
        },
        {
            "requestRfid":"24536",
            "amount":"1500",
            "reqQty" : 10,
            "approvedQty" : 10,
        },
        {
            "requestRfid":"24536",
            "amount":"1500",
            "reqQty" : 10,
            "approvedQty" : 10,
        },
        {
            "requestRfid":"24536",
            "amount":"1500",
            "reqQty" : 10,
            "approvedQty" : 10,
        },
        {
            "requestRfid":"24536",
            "amount":"1500",
            "reqQty" : 10,
            "approvedQty" : 10,
        },
        {
            "requestRfid":"24536",
            "amount":"1500",
            "reqQty" : 10,
            "approvedQty" : 10,
        }
    ]
  }