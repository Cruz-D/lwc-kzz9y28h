/*import { LightningElement } from 'lwc';
import getCheckInOut from '@salesforce/apex/GO_CheckInOut_ApexClass.getCheckInOut';
export default class Go_checkInOut_lwc extends LightningElement {}*/

import { LightningElement, api, wire, track } from 'lwc';

export default class ButtonGroupBasic extends LightningElement {

    @api name = 'daniel';
    @track testok = 'es true';
    @api flag = false;
    @track testbad = 'es false';
    @api test = '';
    @track buttonPiscina = false;
    buttonStatefulState = false;
    buttonIconStatefulState = false;

    getButton(){


        //se saca la id del elemento hatml con el que se va a trabajar
        var buttonPiscina = this.template.querySelector('[data-id="test"]');

        this.buttonPiscina = !this.buttonPiscina;

        //este condicional permite cambiar de true a false los botones para intear
        if(buttonPiscina){

            if(this.flag == true){

                this.flag = false;
                this.test = this.testbad;
            }else{

                 this.flag = true;
                 this.test = this.testok;
            }
           
         }else{

                this.test = this.testbad;

        }

    }

    handleButtonStatefulClick() {
        
        this.buttonStatefulState = !this.buttonStatefulState;
        
        if(button){
            
        }
        

        
    }

    handleButtonIconStatefulClick() {
        this.buttonIconStatefulState = !this.buttonIconStatefulState;
    }

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    mapMarkers = [
    {
        location: {
            Street: '1 Market St',
            City: 'San Francisco',
            Country: 'USA',
        },
        title: 'The Landmark Building',
        description:
            'Historic <b>11-story</b> building completed in <i>1916</i>',
    },
];
}