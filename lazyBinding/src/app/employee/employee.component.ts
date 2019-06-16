import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  columnDefs:any;
  rowData:any;
  ngOnInit() {

    this.columnDefs = [
      {headerName: 'Employee First Name', field: 'firstName' , cellStyle: {width: '100x', 'background-color': 'green'},editable:true},
      {headerName: 'Employee Last Name', field: 'lastName' },
      {headerName: 'Profession', field: 'profession'},
      {headerName: 'Department', field: 'department'},
      {
        headerName: 'Action',
        width: 100,
        field: '',
        cellRenderer: this.getEditButton,
        cellClass: 'rm-grid-upload rm-grid-upload',
        suppressFilter: true,
        suppressSorting: true,
      }
  ];
    this.rowData = [
      { firstName: 'Satyan', lastName: 'Sundriyal', profession: 'Software Profession',department:'IT' },
      { firstName: 'Sonam', lastName: 'Kapoor', profession: 'Software Profession',department:'IT' }
    ];

   
  }

  getEditButton(params){
    //const that= params.context.component;
    
    const divRow = document.createElement('div');
    divRow.setAttribute("class", "row");
    const element = document.createElement('a');
           
          element.innerHTML = "<b>Edit</b>";
          element.addEventListener('click', () => {
           // that.dataService.addValueToSharedDataMap('reimbursement', params.data);
           // that.router.navigate(['/payments/payment-details']);
          });
    
          const divCol1 = document.createElement('div');
          divCol1.setAttribute("class", "col-2 right-margin-1");
          divCol1.appendChild(element);
          divRow.appendChild(element);
          return divRow;
    }
}
