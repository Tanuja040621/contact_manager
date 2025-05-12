import axios from "axios";

export class ContactService {
    static serverURL = `http://localhost:9000`;

    static getGroups() {
        let dataURL = `${this.serverURL}/groups`;
        return axios.get(dataURL)
    }

    static getGroup(group){
        let dataURL = `${this.serverURL}/groups/${group}`;
        return axios.get(dataURL, group)
    }

    static getAllContacts(){
        let dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }

    static createContact(contact) {
        let dataURL = `${this.serverURL}/contacts`;
        return axios.post(dataURL, contact);
    }

    static getContact(contactId) {
        let dataURL = `${this.serverURL}/contacts/${contactId}`
        return axios.get(dataURL);
    }

    static updateContact(contact, contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`
        return axios.put(dataURL, contact);
    }

    static deleteContact(contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`
        return axios.delete(dataURL);
    }

}