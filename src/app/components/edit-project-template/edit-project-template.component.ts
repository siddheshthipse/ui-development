import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-project-template',
  templateUrl: './edit-project-template.component.html',
  styleUrls: ['./edit-project-template.component.css']
})
export class EditProjectTemplateComponent implements OnInit {

  //Invite-Import Modal
  radioValue = 'Invite';
  inviteImportVisible:boolean;
  validatingUsers:boolean;

  //Edit Project Information Fields
  projectName:string = 'S/4 HANA Implementation for Greenfield';
  projectID:string = 'MDLP';
  orgOption: string[] = [];
  orgSelectedValue = ['Techedge', 'Goglio','SAP','Saudi Aramco'];
  orgList = ["American Waters","SAP","Nestle","Hewlett-Packard","Adobe","Techedge","Goglio","Saudi Aramco"];

  //Invite User Dynamic Form
  validateForm: FormGroup;
  listOfControl: Array<{ id: number; controlInstance1: string, controlInstance2:string, controlInstance3:string }> = [];

  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3'
    }
  ];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({});
    this.addField();
  }

  showInviteImport(){
    this.inviteImportVisible = true;
  }

  inviteImportOk(){
    this.inviteImportVisible = false;
  }

  inviteImportCancel(){
    this.inviteImportVisible = false;
  }

  //Invite User Dynamic Form
  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id =
      this.listOfControl.length > 0
        ? this.listOfControl[this.listOfControl.length - 1].id + 1
        : 0;

    const control = {
      id,
      controlInstance1: `userEmail${id}`,
      controlInstance2:`accessLevel${id}`,
      controlInstance3:`firstName${id}`
    };
    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance1,
      new FormControl(null, Validators.required)
    );
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance2,
      new FormControl(null, Validators.required)
    );
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance3,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance1: string, controlInstance2:string, controlInstance3:string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance1);
      this.validateForm.removeControl(i.controlInstance2);
      this.validateForm.removeControl(i.controlInstance3);
    }
  }

  onSubmitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log('This are the form values');
    console.log(this.validateForm.value);
    this.validateForm.reset();
  }
}
