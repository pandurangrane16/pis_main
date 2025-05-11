export class LinkManagement{
  public data = {
    "passType" : "Man Pass",
    "company":"CMS Computers India Pvt Ltd",
    "email":"cmscomputers@cms.co.in",
    "contact":"9702944837",
    "paymentType":"RFID Payment"
}

public linkingData = [{
  "linkedTo":"9267842",
  "type":"Man Pass",
  "rfidNumber":"F235H7HS",
  "passAllocationId" : "1253645",
  "companyName" : "CMS Computers Limited",
  "validFrom" : "08-03-2025",
  "validTo" : "10-03-2025",
  "linkingStatus":"Deactivated",
  "zone":"All Zone",
  "designation":"Manager",
  "permittedGate":"All Gate",
  "purpose" : "Official Work",
  "Reason" : "",
  "button" : [{"label":"Delete","type":"Button","disabled":false,"return":"DLT"}]
},
{
  "linkedTo":"112342",
  "type":"Man Pass",
  "rfidNumber":"FR2564HFSY",
  "passAllocationId" : "1253645",
  "companyName" : "CMS Computers Limited",
  "validFrom" : "08-03-2025",
  "validTo" : "10-03-2025",
  "linkingStatus":"Approved",
  "zone":"All Zone",
  "designation":"Assistant",
  "permittedGate":"All Gate",
  "purpose" : "Official Work",
  "Reason" : "",
  "button" : [{"label":"Delete","type":"Button","disabled":false,"return":"DLT"}]
}]

    public selectVehicleData = {
        options: [{ "name": "KA19AB4511|119277", "value": "119277" },{ "name": "KA19AB4512|119278", "value": "119278" },
          { "name": "KA19AB4516|119224", "value": "119224" },{ "name": "KA19AB4513|119271", "value": "119271" },
          { "name": "KA19AB4512|119267", "value": "119267" },{ "name": "KA19AB4514|119272", "value": "119272" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Vehicle Number*",
        placeholder: "Vehicle Number",
      };

      public selectRfidData = {
        options: [{ "name": "E28367BDNV5664525", "value": "E28367BDNV5664525" },{ "name": "E28367BDNV56645258", "value": "E28367BDNV56645258" },
          { "name": "E28367BDNV56643TYS77", "value": "E28367BDNV56643TYS77" },{ "name": "E28367BDNV56643256", "value": "E28367BDNV56643256" },
          { "name": "E28367BDNV56VHSFTR", "value": "E28367BDNV56VHSFTR" },{ "name": "E28367BDNV56643TYS77", "value": "E28367BDNV56643TYS77" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "RFID Number*",
        placeholder: "RFID Number",
      };

      public inputPassType = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Pass Type*",
        placeholder: "Pass Type",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
}