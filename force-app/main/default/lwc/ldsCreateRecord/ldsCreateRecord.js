import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';

export default class LdsCreateRecord extends LightningElement {
    handleButtonClick() {
        const recordInput = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields: {
                [ACCOUNT_NAME_FIELD.fieldApiName] : 'ACME'
            }
        };
        createRecord(recordInput)
            .then(account => {
                const toastEvent = new ShowToastEvent({
                    title: "Account created",
                    message: "Record ID: "+ account.Id,
                    variant: "success"
                });
                this.dispatchEvent(toastEvent);
            })
            .catch(error => {
                const toastEvent = new ShowToastEvent({
                    title: "Error",
                    message: "Please contact IT support",
                    variant: "error"
                });
                this.dispatchEvent(toastEvent);
            });
    }
}