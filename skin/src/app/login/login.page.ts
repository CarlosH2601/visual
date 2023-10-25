import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

formularioLogin:FormGroup;
constructor(public fb: FormBuilder, public alertContrller: AlertController, public router: Router){

  this.formularioLogin=this.fb.group({
    'nombre': new FormControl("", Validators.required),
    'password': new FormControl("", Validators.required)
  })
}




  ngOnInit() {
  }

async ingresar(){
  var f=this.formularioLogin.value;
  var usuariRegisttro=JSON.parse(localStorage.getItem('usuario')!);
  if(f.usuario==usuariRegisttro.nombre && f.password==usuariRegisttro.password){
    localStorage.setItem("ingresado", "true");
    this.router.navigate(["/para-ti"]);

  }else{
    const alert=await this.alertContrller.create({
      header: "usuario",
      message:"Usuario no registrado",
      cssClass: "ingresar-alert",
      buttons: ["ok"]
    })
    await alert.present();
  }

}


}
