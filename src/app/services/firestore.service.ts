import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public database: AngularFirestore) { }

  CrearDocumento(data: any, enlace: string, id: string){
    const ref = this.database.collection(enlace);
    return ref.doc(id).set(data);
  }

  ListarDocumento<tipo>(enlace: string){
    const ref = this.database.collection<tipo>(enlace);
    return ref.valueChanges();
  }

  EliminarDocumento(enlace: string, id:string){
    const ref = this.database.collection(enlace);
    return ref.doc(id).delete();
  }

  ObtenerDocumento<tipo>(enlace: string, id:string){
    const ref = this.database.collection<tipo>(enlace);
    return ref.doc(id).valueChanges();
  }

  EditarDocumento(data: any, enlace: string, id: string){
    const ref = this.database.collection(enlace);
    return ref.doc(id).update(data);
  }

  ObtenerId(){
   return this.database.createId();
  }
}
