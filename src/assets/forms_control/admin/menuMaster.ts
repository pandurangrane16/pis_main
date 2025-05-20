export class MenuMaster {

    public inputMenuName = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Menu Name*",
        placeholder: "Menu Name",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputMenuPath = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Menu Path*",
        placeholder: "Menu Path",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputParentId = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Parent ID*",
        placeholder: "Parent ID",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputDisplayOrder = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Display Order*",
        placeholder: "Display Order",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public toggleIsActive = {
        headerName: "Is Active*",
        data: [{ "displayName": "Yes", "value": "Y" }, { "displayName": "No", "value": "N" }],
        name: "Is Active",
        disabled: false
    }
}