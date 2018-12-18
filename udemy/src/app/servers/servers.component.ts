import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer:boolean=false;
  serverCreationStatus:string= 'No server is created !!!';
  serverName='Test';
  serverCreated = false;
  servers=['Server 1', 'Server 2'];
  constructor() {
    setTimeout(()=>{
      this.allowAddServer=true;
    },2000);
   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus='Server is created !!!' + this.serverName;
    this.servers.push(this.serverName);
    this.serverName='';
    this.serverCreated=true;
  }
  OnUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
