import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  isLinear = false;
  partyFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}


  ngOnInit() {
    this.partyFormGroup = this._formBuilder.group({
      legalName: ['', Validators.required],
      parentParty: ['2', Validators.required],
      country: ['', Validators.required],
      internalId :['',Validators.required],
      ultimateParentParty : [''],
      countryRisk:[''],
      shortName:['',Validators.required],
      partyStatus : ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      isin: ['', Validators.required]
    });

  
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['']
    });

    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['']
    });

    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['']
    });

    this.stateGroupOptions = this.partyFormGroup.get('country')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );

    console.log(this.partyFormGroup)
  }

  stateGroupOptions: Observable<any[]>;


  private _filterGroup(value: string): any[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

isButtonEnabled(){
  if(this.partyFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid && this.fourthFormGroup.valid && this.fifthFormGroup.valid){return false}
  else{return true;}
}

  parentPartyLst: any = [
    {value: '1', viewValue: 'GS1'},
    {value: '2', viewValue: 'GS2'},
    {value: '3', viewValue: 'GS3'}
  ];


  countries : any[]=['Alabama', 'Alaska', 'Arizona', 'Arkansas','California', 'Colorado', 'Connecticut','Idaho', 'Illinois', 'Indiana', 'Iowa',]
  
  stateGroups: any = [{
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    letter: 'D',
    names: ['Delaware']
  }, {
    letter: 'F',
    names: ['Florida']
  }, {
    letter: 'G',
    names: ['Georgia']
  }, {
    letter: 'H',
    names: ['Hawaii']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    letter: 'L',
    names: ['Louisiana']
  }, {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    letter: 'P',
    names: ['Pennsylvania']
  }, {
    letter: 'R',
    names: ['Rhode Island']
  }, {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    letter: 'T',
    names: ['Tennessee', 'Texas']
  }, {
    letter: 'U',
    names: ['Utah']
  }, {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];

}
