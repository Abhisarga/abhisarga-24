export default class Hash {
  static async create(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return btoa(String.fromCharCode(...Array.from(new Uint8Array(hashBuffer))));
  }

  static async compare(hash, password) {
    const passwordHash = await this.create(password);
    const hashBuffer = new Uint8Array(
      atob(hash)
        .split("")
        .map((char) => char.charCodeAt(0))
    );
    const passwordHashBuffer = new Uint8Array(
      atob(passwordHash)
        .split("")
        .map((char) => char.charCodeAt(0))
    );
    return timingSafeEqual(hashBuffer, passwordHashBuffer);
  }

  static simpleCompare(val1, val2) {
    const buffer1 = new Uint8Array([...val1].map((char) => char.charCodeAt(0)));
    const buffer2 = new Uint8Array([...val2].map((char) => char.charCodeAt(0)));
    return timingSafeEqual(buffer1, buffer2);
  }
}
