import { Component } from '@angular/core';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   
  

  usuarioArray:Usuario[]=[
    { id: 1, name: "Juan", lastName: "López", email: "juan@mail.com", phoneNumber:
      3112223344, type: 1},
    { id: 2, name: "José", lastName: "Pérez", email: "jose@mail.com", phoneNumber:
      3114445566, type: 2}
  ];


  ed: number=0
  searchText = ''
  LockFilter=''
 
  selectedUser:Usuario= new Usuario();
  openForEdit(usuario:Usuario){
    this.selectedUser=usuario;
    this.ed=usuario.id;
  }
  addOrEdit(){
    if(this.ed===0){
      this.usuarioArray.push(this.selectedUser);
    }
    this.selectedUser=new Usuario();
  }

  delete(){
    this.usuarioArray=this.usuarioArray.filter(x=>x!=this.selectedUser);
    this.selectedUser=new Usuario();
  }
  
 /* buscarId(){
    let Usuario=this.usuarioArray.filter((user)=>user.id===Number(this.search));
    return Usuario;
  }*/
/*
  search(){
    let Usuario=this.usuarioArray.filter((user)=>user.id===Number(this.search));
    return Usuario;
}*/
/*
  getUsuarioId(){
    let Usuario=this.usuarioArray.filter((user)=>user.id===Number(this.search));
    return Usuario;
  } */



}
