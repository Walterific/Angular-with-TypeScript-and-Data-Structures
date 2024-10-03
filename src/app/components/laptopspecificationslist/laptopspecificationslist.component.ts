import { Component } from '@angular/core';

@Component({
  selector: 'app-laptopspecificationslist',
  templateUrl: './laptopspecificationslist.component.html',
  styleUrl: './laptopspecificationslist.component.css'
})
export class LaptopspecificationslistComponent {
  laptopSpecificationsList: string[] = ["MacBook Pro - 14‑core CPU with 10 performance cores and 4 efficiency cores 30‑core GPU Hardware-accelerated ray tracing 16‑core Neural Engine 300GB/s memory bandwidth", 
  "HP Envy Laptop 17-da0047nr - Windows 11 Home Intel® Core™ Ultra 7 processor Intel® Arc™ Graphics 16 GB memory; 512 GB SSD storage 17.3 diagonal FHD touch display",
  "ROG Zephyrus M16 (2023) GU604 - Processor 13th Gen Intel® Core™ i9-13900H Processor 2.6 GHz (24M  Cache, up to 5.4 GHz, 14 cores: 6 P-cores and 8 E-cores)"
  ];

  laptopSpecifications: string = '';

  addItems() {
    this.laptopSpecificationsList.push(this.laptopSpecifications);
  }
}
