import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../services/carrito.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class HomePage implements OnInit {
  
  // Opciones para el slider de promociones
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000
    }
  };

  constructor(private carritoService: CarritoService) { }
  
  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
  }
  
  ngOnInit() {
  }
}
