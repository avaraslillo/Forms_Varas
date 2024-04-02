import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {

  formPerfil= this.formBuilder.group({
    // Define tus controles y sus validadores aquí
    rut: ['',[Validators.required,Validators.pattern(/^[0-9]{1,2}\.?[0-9]{3}\.?[0-9]{3}-?[0-9kK]{1}$/)]],
    nombres: ['',Validators.required],
    apellidos: ['',Validators.required],
    email: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')]],
    fechaNacimiento: ['',Validators.required],
    direccion: ['',Validators.required],
    comuna: ['',Validators.required],
    region: ['',Validators.required],
    telefono: ['',[Validators.required,Validators.pattern(/^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/)]],
    // Puedes agregar más controles según tus necesidades
  });


  constructor(private formBuilder: FormBuilder) { 
  
  }

  get rutControl() {
    return this.formPerfil.get('rut');
  }

  get nombresControl() {
    return this.formPerfil.get('nombres');
  }

  get apellidosControl() {
    return this.formPerfil.get('apellidos');
  }

  get emailControl() {
    return this.formPerfil.get('email');
  }

  get fechaNacimientoControl() {
    return this.formPerfil.get('fechaNacimiento');
  }

  get direccionControl() {
    return this.formPerfil.get('direccion');
  }

  get comunaControl() {
    return this.formPerfil.get('comuna');
  }

  get regionControl() {
    return this.formPerfil.get('region');
  }

  get telefonoControl() {
    return this.formPerfil.get('telefono');
  }

  onSubmit(){
    if(this.formPerfil.valid){
      Swal.fire({
        icon: 'success',
        title: 'Realizado',
        text: 'Usuario registrado',
      });
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario no registrado. Favor, revisar campos inválidos',
      });
    }

  }

}
