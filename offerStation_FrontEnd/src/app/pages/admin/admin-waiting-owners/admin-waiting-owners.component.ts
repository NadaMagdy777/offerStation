import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AdminApprovalWaitingService } from 'src/app/services/admin/waiting/admin-approval-waiting.service';
import { ImageService } from 'src/app/services/image.service';
import { TraderDetails } from 'src/app/sharedClassesAndTypes/TraderDetails';

@Component({
  selector: 'app-admin-waiting-owners',
  templateUrl: './admin-waiting-owners.component.html',
  styleUrls: ['./admin-waiting-owners.component.css']
})
export class AdminWaitingOwnersComponent {
 
  Owners: TraderDetails[] = [];

  dtOptions:DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>(); 

  constructor(
    private _imageService:ImageService,
    private _waitingOwnersService:AdminApprovalWaitingService
    ) {}

  ngOnInit(): void {

    this.dtOptions={
      pagingType:'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 20],
      processing: true,
      destroy:true
    }
    this.getWaitingOwners();
  }

  getWaitingOwners(): void {
    this._waitingOwnersService.GetAllWaitingOwners()
      .subscribe(response => 
        {
          this.Owners = response.data
          this.dtTrigger.next(null);
          this.Owners.forEach((owner:TraderDetails)=>{
            owner.image =this._imageService.base64ArrayToImage(owner.image)          
            });
        });
  }

  onDelete(index:number, ownerId:number){
    this._waitingOwnersService.DeleteOwner(ownerId)
    .subscribe({
      next: data => {
        this.dtTrigger.unsubscribe();
        this.Owners.splice(index, 1);
        this.getWaitingOwners();
      }
    });
  }
  onApprove(index:number, ownerId:number){
    this._waitingOwnersService.ApproveOwner(ownerId)
    .subscribe({
      next: data => {
        this.dtTrigger.unsubscribe();
        this.Owners.splice(index, 1);
        this.getWaitingOwners();
      }
    });
  }
}
