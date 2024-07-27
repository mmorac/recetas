import { Injectable } from '@angular/core';
import { lista } from 'src/app/modelos/lista';
import { Observable, switchMap, from, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class SuperService {

  constructor(private http:HttpClient, private storage:Storage) { }

  private json = "../../assets/lista_super/listas.json";

  archRef = ref(this.storage, 'mochi/listas.json');

  getListas():Observable<lista[]>{

    return from(getDownloadURL(this.archRef)).pipe(
      switchMap(url=>{
        if(url){
          return this.http.get<lista[]>(url);
        }
        else{
          throw new Error('URL no disponible');
        }
      }),
      catchError(error=>{
        console.log("Error al obtener la url del archivo: " + error);
        throw error;
      })
    )
  }

  obtenerListas(){  
    return getDownloadURL(this.archRef);
  }

  actualizarListas(listas:string):void{
    var listasUTF8 = this.encodeUTF8(listas);
    var listasB64 = this.toBase64(listasUTF8);
    var archivo = this.base64toBlob(listasB64, 'application/json');
    uploadBytes(this.archRef, archivo)
    .then(response => console.log("Response: " + response))
    .catch(error => console.log("Upload error: " + error));
  }

  private encodeUTF8(string: string): Uint8Array {
    const encoder = new TextEncoder();
    return encoder.encode(string);
  }

  private toBase64(array: Uint8Array): string {
    const binaryString = Array.from(array, byte => String.fromCharCode(byte)).join('');
    return window.btoa(binaryString);
  }  

  private base64toBlob(base64Data:string, contentType:string): Blob {
    contentType = contentType || '';
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);

      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  }

}
