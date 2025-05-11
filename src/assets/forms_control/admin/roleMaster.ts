export class RoleMaster {

    public inputRoleName = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Role Name*",
        placeholder: "Role Name",
        appearance: "outline",
        color: "primary",
        formFieldClass: "w-100",
        isDisabled: false
    }

    public inputDescription = {
        labelClass: "f-w-600 m-b-8 d-block",
        labelHeader: "Description*",
        placeholder: "Description",
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