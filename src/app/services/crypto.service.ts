import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private algorithm = { name: 'AES-GCM', length: 256 };
  private keyUsage: KeyUsage[] = ['encrypt', 'decrypt'];

  constructor() { }

  // Generate a new crypto key
  async generateKey(): Promise<CryptoKey> {
    return window.crypto.subtle.generateKey(
      {
        name: this.algorithm.name,
        length: this.algorithm.length
      },
      true, // extractable
      this.keyUsage
    );
  }

  // Export key as base64 string
  async exportKey(key: CryptoKey): Promise<string> {
    const exported = await window.crypto.subtle.exportKey('raw', key);
    return this.arrayBufferToBase64(exported);
  }

  // Import key from base64 string
  async importKey(keyStr: string): Promise<CryptoKey> {
    const keyBuffer = this.base64ToArrayBuffer(keyStr);
    return window.crypto.subtle.importKey(
      'raw',
      keyBuffer,
      this.algorithm,
      true, // extractable
      this.keyUsage
    );
  }

  // Encrypt data
  async encrypt(data: string, key: CryptoKey): Promise<{ cipherText: string, iv: string }> {
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encodedData = new TextEncoder().encode(data);
    
    const cipherText = await window.crypto.subtle.encrypt(
      {
        name: this.algorithm.name,
        iv: iv
      },
      key,
      encodedData
    );

    return {
      cipherText: this.arrayBufferToBase64(cipherText),
      iv: this.arrayBufferToBase64(iv)
    };
  }

  // Decrypt data
  async decrypt(cipherText: string, key: CryptoKey, iv: string): Promise<string> {
    const cipherTextBuffer = this.base64ToArrayBuffer(cipherText);
    const ivBuffer = this.base64ToArrayBuffer(iv);
    
    const decrypted = await window.crypto.subtle.decrypt(
      {
        name: this.algorithm.name,
        iv: ivBuffer
      },
      key,
      cipherTextBuffer
    );

    return new TextDecoder().decode(decrypted);
  }

  // Helper methods
  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
  }

  private base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
}