import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'addlocationinformation',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">New Location Information</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><span style="display:inline-block;width:190px;text-align:right;">Location name</span><input type="text" value="location.name"></p>
	  <p><span style="display:inline-block;width:190px;text-align:right;">Location Address</span><input type="text"></p>
	  <p><span style="display:inline-block;width:190px;text-align:right;">Openning hour</span><input type="text"></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-save" >Save</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class AddLocationInformation {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'viewlocationinformation',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Location Information</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><span style="display:inline-block;width:190px;text-align:right;" >Location name</span><input type="text"></p>
	  <p><span style="display:inline-block;width:190px;text-align:right;" >Location Address</span><input type="text"></p>
	  <p><span style="display:inline-block;width:190px;text-align:right;" >Openning hour</span><input type="text"></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-save" >Save</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ViewLocationInformation {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'addlocationcomponent',
  templateUrl: './add-location.component.html'
})
export class AddLocationComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(AddLocationInformation);
  }
  
  view(){
	  const modalRef = this.modalService.open(ViewLocationInformation);
  }
}