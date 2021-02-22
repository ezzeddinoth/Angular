import { Component, OnInit } from '@angular/core';

declare var fnScanDisable: any;
declare var fnBarcodeScanned: any;
declare var fnScanEnable: any;

@Component({
  selector: 'app-scanning-test',
  templateUrl: './scanning-test.component.html',
  styleUrls: ['./scanning-test.component.css']
})
export class ScanningTestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  quit() {
    alert("quit");
    //EB.Application.quit();
  }
  navigate(){
     alert("navigate");
    // window.location.href='./index.html'
  }
  fnScanEnable() {
    alert('ScanEnable')
    new fnScanEnable();
    //EB.Barcode.enable({ allDecoders: true }, fnBarcodeScanned);
    /*document.getElementById('scanData').value
        = "enabled: press HW trigger to capture.";*/
}
fnBarcodeScanned(jsonObject: any) {
  new fnBarcodeScanned(jsonObject);
  console.log("Barcode Scanned:{" + JSON.stringify(jsonObject) + "}");
  /*document.getElementById('scanData').value = "barcode: " + jsonObject.data;*/
}

 fnScanDisable() {
   alert("ScanDisable");
   new fnScanDisable();
  //EB.Barcode.disable();
  //document.getElementById('scanData').value = "disabled: press 'enable' to scan.";
}


}
