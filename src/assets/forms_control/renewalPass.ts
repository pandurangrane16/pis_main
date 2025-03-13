export class RenewalPass{
    
public linkingData = [{
    "linkedTo":"9267842",
    "passType":"Man Pass",
    "rfidNumber":"F235H7HS",
    "passAllocationId" : "1253645",
    "validFrom" : "08-03-2025",
    "validTo" : "10-03-2025",
    "button" : [{"label":"Renew","type":"Button","disabled":false,"return":"RNW"}]
  },
  {
    "linkedTo":"112342",
    "passType":"Man Pass",
    "rfidNumber":"FR2564HFSY",
    "passAllocationId" : "1253645",
    "validFrom" : "08-03-2025",
    "validTo" : "10-03-2025",
    "button" : [{"label":"Renew","type":"Button","disabled":false,"return":"RNW"}]
  }]

  public selectCategoryData = {
    options: [{ "name": "Free", "value": "E28367BDNV5664525" },{ "name": "Six Month", "value": "E28367BDNV56645258" },
      { "name": "Daily", "value": "E28367BDNV56643TYS77" },{ "name": "One Year", "value": "E28367BDNV56643256" },
      { "name": "One Month", "value": "E28367BDNV56VHSFTR" },{ "name": "Nine Month", "value": "E28367BDNV56643TYS77" }],
    appearance: "outline",
    color: "primary",
    formFieldClass: "w-100",
    isDisabled: false,
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Category*",
    placeholder: "Category",
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

  public inputNoOfDays = {
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Number of Days*",
    placeholder: "Number of Days",
    appearance: "outline",
    color: "primary",
    formFieldClass: "w-100",
    isDisabled: true
  }

  public inputReqQty = {
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Request Quantity*",
    placeholder: "Request Quantity",
    appearance: "outline",
    color: "primary",
    formFieldClass: "w-100",
    isDisabled: true
  }


  public inputAmount = {
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Pass Type*",
    placeholder: "Pass Type",
    appearance: "outline",
    color: "primary",
    formFieldClass: "w-100",
    isDisabled: true
  }

  public inputPlaceOfWork = {
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Pass Type*",
    placeholder: "Pass Type",
    appearance: "outline",
    color: "primary",
    formFieldClass: "w-100",
    isDisabled: true
  }


  public selectZoneData = {
    options: [{ "name": "Birth No 16(Chettinad)", "value": "E28367BDNV5664525" },{ "name": "Birth No 15(UPCL)", "value": "E28367BDNV56645258" },
      { "name": "Berth No 4(Cruise Terminal)", "value": "E28367BDNV56643TYS77" },{ "name": "Container Yard", "value": "E28367BDNV56643256" },
      { "name": "Canteen Area", "value": "E28367BDNV56VHSFTR" },{ "name": "All Berth", "value": "E28367BDNV56643TYS77" }],
    appearance: "outline",
    color: "primary",
    formFieldClass: "w-100",
    isDisabled: false,
    labelClass: "f-w-600 m-b-8 d-block",
    labelHeader: "Zone Area*",
    placeholder: "Zone Area",
  };
}