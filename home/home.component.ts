import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
//import * as XSLX from 'xlsx';


export interface BCBS {
  RoleName: string;
  Active: number;
  AuditRecInsertBy: string;
  AuditRecInsertDate: string;
  AuditRecUpDate: string;
  AuditRecUpdby: string;
  AuditRecUpdBy: string;
  AuditRecUpdDate: string;
  EffectiveDate: string;
  Env: string;
  InactiveDate: string;
  LHCode: string;
  LHEntityCode: string;
  Roleid: number;
  RoleInfo: string;
}

const ELEMENT_DATA: BCBS[] = [
  {RoleName: "LH017_BCP_Datarole_6", Active: 1, AuditRecInsertBy: "BCM-Admin", AuditRecInsertDate: "3/1/17", AuditRecUpDate: "4/15/18", AuditRecUpdby: "BCM-Admin", 
  AuditRecUpdBy: " ", AuditRecUpdDate: "5/9/17", EffectiveDate: "5/19/17", Env: "Dev", InactiveDate: "5/9/17", LHCode: "LH017", LHEntityCode: "LH017-2-01", Roleid: 103, RoleInfo: "Info"},
  {RoleName: "LH017_BCP_Datarole_9", Active: 1, AuditRecInsertBy: "BCM-Admin", AuditRecInsertDate: "4/11/17", AuditRecUpDate: "4/25/18", AuditRecUpdby: "BCM-Admin", 
  AuditRecUpdBy: " ", AuditRecUpdDate: "12/8/18", EffectiveDate: "12/19/19", Env: "Dev", InactiveDate: "5/19/18", LHCode: "LH018", LHEntityCode: "LH018-2-02", Roleid: 338, RoleInfo: "Info"}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

 export class HomeComponent {
  displayedColumns: string[] = ['RoleName', 'Active', 'AuditRecInsertBy', 'AuditRecInsertDate', 'AuditRecUpDate', 'AuditRecUpdby', 'AuditRecUpdBy', 'AuditRecUpdDate', 
  'EffectiveDate', 'Env', 'InactiveDate', 'LHCode', 'LHEntityCode', 'Roleid', 'RoleInfo'];
  dataSource = ELEMENT_DATA;
}