export class cargolist {
    data = [
        {
            "cargoId": "1254537",
            "passageDate": "28-03-2025",
            "companyName": "CMS Computers",
            "vehicleNo": "MH01DG9543",
            "cargoType": "Bulk Cargo",
            "mode": "In",
            "status": "Vehicle Passed",
            "rejectReason": "",
            "button" : [{"label":"View","type":"Button","disabled":false,"return":"VW"},{"label":"Print","type":"Button","disabled":true,"return":"PRT"},{"label":"Cancel","type":"Button","disabled":false,"return":"RM"}]
        },
        {
            "cargoId": "1254539",
            "passageDate": "03-04-2025",
            "companyName": "Delta Infra",
            "vehicleNo": "MH03DJ4376",
            "cargoType": "Container",
            "mode": "Out",
            "status": "Approved",
            "rejectReason": "",
            "button" : [{"label":"View","type":"Button","disabled":false,"return":"VW"},{"label":"Print","type":"Button","disabled":true,"return":"PRT"},{"label":"Cancel","type":"Button","disabled":false,"return":"RM"}]
       },
    ]
}

export class CartTicketManagement{
    
    public selectTransporterName = {
        options: [{ "name": "CMS Computers Limited", "value": "4521" },{ "name": "Delta Infra", "value": "1881" },
            { "name": "Chettinad", "value": "1423" },{ "name": "JSW Coal Terminal", "value": "4758" }],
          appearance: "outline",
          color: "primary",
          formFieldClass: "w-100",
          isDisabled: true,
          labelClass: "f-w-600 m-b-8 d-block",
          labelHeader: "Transporter Name*",
          placeholder: "Transporter Name",
      }
      public inputVehicleNo = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Vehicle Number*",
        placeholder: "Vehicle Number",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public selectCargoType = {
        options: [{ "name": "Container", "value": "1" },{ "name": "Bulk Cargo", "value": "2" },
            { "name": "Others", "value": "3" }],
          appearance: "outline",
          color: "primary",
          formFieldClass: "w-100",
          isDisabled: false,
          labelClass: "f-w-600 m-b-8 d-block",
          labelHeader: "Cargo Type*",
          placeholder: "Cargor Type",
      }
      public inputMLO = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "MLO",
        placeholder: "MLO",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public inputContainerNo = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Container Number*",
        placeholder: "Container Number",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public inputCFAgent = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "C & F Agent*",
        placeholder: "C & F Agent",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }

      public inputShipperName = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Name Of Shipper*",
        placeholder: "Name Of Shipper",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public inputShippingBill = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Shipping Bill*",
        placeholder: "Shipping Bill",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public inputVesselName = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Vessel Name*",
        placeholder: "Vessel Name",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public inputCommodity = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Commodity/Cargo*",
        placeholder: "Commodity/Cargo",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public inputSealOtlNo = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Seal/OTL No",
        placeholder: "Seal/OTL No",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public inputVoyageNo = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Voyage Number",
        placeholder: "Voyage Number",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public inputRemarks = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Remarks",
        placeholder: "Remarks",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public inputBlNo = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "B/L No.",
        placeholder: "B/L No.",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public inputOOCNo = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "OOC No.",
        placeholder: "OOC No.",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public inputCustomsSeal = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Customs Seal",
        placeholder: "CUstoms Seal",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public inputDeliveryOrderNo = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Delivery Order No.",
        placeholder: "Delivery Order No.",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true
      }
      public selectContainerType = {
        options: [{ "name": "Dry", "value": "Dry" },{ "name": "Reefer", "value": "Reefer" },
          { "name": "Tank", "value": "Tank" },{ "name": "FlatTrack", "value": "FlatTrack" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Container Type*",
        placeholder: "Container Type",
      };

      public selectContainerSize = {
        options: [{ "name": "20", "value": "20" },{ "name": "40", "value": "40" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Container Size*",
        placeholder: "Container Size",
      };

      public selectStuffing = {
        options: [{ "name": "Yes", "value": "Y" },{ "name": "No", "value": "N" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Stuffing",
        placeholder: "Stuffing",
      };
      public selectDeStuffing = {
        options: [{ "name": "Yes", "value": "Y" },{ "name": "No", "value": "N" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Destuffing",
        placeholder: "Destuffing",
      };
      
      public selectExportType = {
        options: [{ "name": "Storage Receipt", "value": "SR" },{ "name": "Direct Vessel", "value": "DV" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Export Type",
        placeholder: "Export Type",
      };

      public selectBulkType = {
        options: [{ "name": "Bulk", "value": "B" },{ "name": "Package", "value": "P" }],
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: true,
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Bulk Type",
        placeholder: "Bulk Type",
      };

      public toggleHazardous ={
        headerName :"Is Hazardous",
        data:[{"displayName":"Yes","value":"Y"},{"displayName":"No","value":"N"}],
        name :"Hazardous",
        disabled:true
      }
}