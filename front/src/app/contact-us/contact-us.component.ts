import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatError} from "@angular/material";
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import * as $ from 'jquery';



@Component({
    selector: 'app-contact',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
    form: FormGroup;
    formErrors: any;
    private _unsubscribeAll: Subject<any>;
    constructor(private _formBuilder: FormBuilder) {
        this.openMenu();
        this.formErrors = {
            name: {},
            email: {},
            topic: {},
            message: {},
        };
        this._unsubscribeAll = new Subject();
    };

    ngOnInit() {

        
        (function(d, m){
          var kommunicateSettings = {"appId":"3204929f9d5849b9972f19ac94d3032f8","popupWidget":true,"automaticChatOpenOnNavigation":true};
          var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
          s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
          var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
          (window as any).kommunicate = m; m._globals = kommunicateSettings;
        })(document, (window as any).kommunicate || {});
    

    
    }

    onFormValuesChanged(): void {
        for (const field in this.formErrors) {
            if (!this.formErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.formErrors[field] = {};
            // Get the control
            const control = this.form.get(field);
            if (control && control.dirty && !control.valid) {
                this.formErrors[field] = control.errors;
            }
        }
    }

    onSubmit() {
        if (this.form.invalid) {
            return;
        }
    }

    openMenu(){
        $('body').removeClass('noScroll');
        if ($('.collapse').hasClass('collapse-active')) {
            $('.collapse').removeClass('collapse-active');
        }
        else {
            $('.collapse').addClass('collapse-active');
        }
    }

}
