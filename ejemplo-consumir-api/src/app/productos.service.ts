import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_BASE = 'https://ejerciciostutorialesya.com/vue/datos.php';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //Creamos una propiedad llamada httpclient de tipo HttpClient
  constructor(private httpclient:HttpClient) { }

  //Implementar los métodos que necesitemos para:
  //Rescatar todos los productos
  //Rescatar un producto con un determinado id
  //Actualizar..
  //Eliminar..

  obtenerTodos(){
    //Devolvemos un objeto de Angular llamado Observable
    return this.httpclient.get<any>(`${URL_BASE}`, );
  }
}
