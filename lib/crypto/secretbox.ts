import { SecretBox as SB } from '../bindings';

export interface SecretBox {
	ciphertext: Uint8Array;
	mac: Uint8Array;
}

const secretbox = new SB();

export const crypto_secretbox_KEYBYTES: number = secretbox.cryptoSecretboxKeybytes;
export const crypto_secretbox_MACBYTES: number = secretbox.cryptoSecretboxMacbytes;
export const crypto_secretbox_MESSAGEBYTES_MAX: number = secretbox.cryptoSecretboxMessagebytesMax;
export const crypto_secretbox_NONCEBYTES: number = secretbox.cryptoSecretboxNoncebytes;
export const crypto_secretbox_PRIMITIVE: string = secretbox.cryptoSecretboxPrimitive;

/** @see https://docs.rs/sodiumoxide/latest/sodiumoxide/crypto/secretbox/xsalsa20poly1305/fn.seal_detached.html */
export const crypto_secretbox_detached = (m: Uint8Array, n: Uint8Array, k: Uint8Array): SecretBox => secretbox.crypto_secretbox_detached(m, n, k);

/** @see https://docs.rs/sodiumoxide/latest/sodiumoxide/crypto/secretbox/xsalsa20poly1305/fn.seal.html */
export const crypto_secretbox_easy = (m: Uint8Array, n: Uint8Array, k: Uint8Array): Uint8Array => secretbox.crypto_secretbox_easy(m, n, k);

/** @see https://docs.rs/sodiumoxide/latest/sodiumoxide/crypto/secretbox/xsalsa20poly1305/fn.gen_key.html */
export const crypto_secretbox_keygen = (): Uint8Array => secretbox.crypto_secretbox_keygen();

/** @see https://docs.rs/sodiumoxide/latest/sodiumoxide/crypto/secretbox/xsalsa20poly1305/fn.gen_nonce.html */
export const crypto_secretbox_nonce = (): Uint8Array => secretbox.crypto_secretbox_nonce();

/** @see https://docs.rs/sodiumoxide/latest/sodiumoxide/crypto/secretbox/xsalsa20poly1305/fn.open_detached.html */
export const crypto_secretbox_open_detached = (c: Uint8Array, mac: Uint8Array, n: Uint8Array, k: Uint8Array): Uint8Array =>
	secretbox.crypto_secretbox_open_detached(c, mac, n, k);

/** @see https://docs.rs/sodiumoxide/latest/sodiumoxide/crypto/secretbox/xsalsa20poly1305/fn.open.html */
export const crypto_secretbox_open_easy = (c: Uint8Array, n: Uint8Array, k: Uint8Array): Uint8Array => secretbox.crypto_secretbox_open_easy(c, n, k);