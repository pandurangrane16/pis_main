export class vehicleManagemet{
    data =[
        {
          "vehicleId": "149988",
          "chasisNo": "MB11A2254KRA82931",
          "vehicleNo": "KA19AC9812",
          "registrationNo": "KA19AC9812",
          "insuranceValidTo": "17-10-2025"
        },
        {
          "vehicleId": "149964",
          "chasisNo": "MAJAXXMRKAHB53472",
          "vehicleNo": "ka14z3104",
          "registrationNo": "ka14z3104",
          "insuranceValidTo": "18-02-2025"
        },
        {
          "vehicleId": "149941",
          "chasisNo": "MA1ZN2GHKC1H62714",
          "vehicleNo": "KA19D7827",
          "registrationNo": "KA19D7827",
          "insuranceValidTo": "24-10-2025"
        },
        {
          "vehicleId": "149932",
          "chasisNo": "MAT804306P8A10055",
          "vehicleNo": "KA19AE0893",
          "registrationNo": "KA19AE0893",
          "insuranceValidTo": "16-03-2025"
        },
        {
          "vehicleId": "149908",
          "chasisNo": "MB1AA42E2RRNT6905",
          "vehicleNo": "KA20AC4807",
          "registrationNo": "KA20AC4807",
          "insuranceValidTo": "03-11-2025"
        },
        {
          "vehicleId": "149896",
          "chasisNo": "MA3FZBH1T00151006",
          "vehicleNo": "KA20AA8254",
          "registrationNo": "KA20AA8254",
          "insuranceValidTo": "13-08-2025"
        },
        {
          "vehicleId": "149804",
          "chasisNo": "MA3ERLF1S00670189",
          "vehicleNo": "KA70M1179",
          "registrationNo": "KA70M1179",
          "insuranceValidTo": "24-03-2025"
        },
        {
          "vehicleId": "149778",
          "chasisNo": "MEC2626CFKP088215",
          "vehicleNo": "KA01AL0766",
          "registrationNo": "KA01AL0766",
          "insuranceValidTo": "10-09-2025"
        },
      ];
      
    public inputVehicleNo = {
      labelClass: "f-w-600 m-b-8 d-block",
      labelHeader: "Vehicle Number*",
      placeholder: "Vehicle Number",
      appearance: "outline",
      color: "primary",
      formFieldClass: "w-100",
      isDisabled: false
    }

    public inputChasisNo = {
      labelClass: "f-w-600 m-b-8 d-block",
      labelHeader: "Chasis No.*",
      placeholder: "Chasis No",
      appearance: "outline",
      color: "primary",
      formFieldClass: "w-100",
      isDisabled: false
    }
    
    public inputOwnersAddress = {
      labelClass: "f-w-600 m-b-8 d-block",
      labelHeader: "Owner's Address*",
      placeholder: "Owner's Address",
      appearance: "outline",
      color: "primary",
      formFieldClass: "w-100",
      isDisabled: false
    }
    
    public inputRegistrationCertificate = {
      labelClass: "f-w-600 m-b-8 d-block",
      labelHeader: "Insurance No.*",
      placeholder: "Insurance No.",
      appearance: "outline",
      color: "primary",
      formFieldClass: "w-100",
      isDisabled: false
    }
    
    public inputInsuranceNo = {
      labelClass: "f-w-600 m-b-8 d-block",
      labelHeader: "Registration Certificate No.*",
      placeholder: "Registration Certificate No.",
      appearance: "outline",
      color: "primary",
      formFieldClass: "w-100",
      isDisabled: false
    }
    
    public inputPolutionCert = {
      labelClass: "f-w-600 m-b-8 d-block",
      labelHeader: "Pollution Certificate No",
      placeholder: "Pollution Certificate No",
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
    
    public selectVehicleType = {
      options: [{ "name": "COMMERCIAL VEHICLE", "value": "COM" }, { "name": "CARGO HANDLING EQUIPMENT", "value": "CAR" }, { "name": "Bus or Authorised Truck Carrying Vehicle", "value": "BTV" },
      { "name": "Light Vehicle", "value": "LV" }],
      appearance: "outline",
      color: "primary",
      formFieldClass: "w-100",
      isDisabled: false,
      labelClass: "f-w-600 m-b-8 d-block",
      labelHeader: "Select Vehicle Type*",
      placeholder: "Select Vehicle Type",
    };
}