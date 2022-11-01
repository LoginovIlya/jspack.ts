<div align="center">
    <h1>JsPack.ts</h1>
    <img src="https://github.com/LoginovIlya/jspack.ts/blob/master/assets/logo.svg" alt="JsPack.ts - Library to pack/unpack binary data" width="350px" />
    <h3>Library to pack/unpack binary data</h3>
</div>

JsPack is a library for working with binary data in JavaScript using the Uint8Array object.
To ensure maximum stability, this library has 100% test coverage.
The library was created using typescript for more convenient work with many types.

---

## Installation

Install with npm:
```
npm install ...
```

## Formats

| Key  | Length | Type         | Description          |
|------|--------|--------------|----------------------|
| A    | any    | number[]     | Array                |
| x    | 1      | number       | NUL-padded byte      |
| c    | 1      | string       | Single char (ascii)  |
| s    | any    | string       | String char (ascii)  |
| b    | 1      | number       | Char (signed)        |
| B    | 1      | number       | Char (unsigned)      |
| h    | 2      | number       | Short (signed)       |
| H    | 2      | number       | Short (unsigned)     |
| i    | 4      | number       | Int (signed)         |
| I    | 4      | number       | Int (unsigned)       |
| l    | 4      | number       | Long (signed)        |
| L    | 4      | number       | Long (unsigned)      |
| q    | 8      | number       | Long long (signed)   |
| Q    | 8      | number       | Long long (unsigned) |
| f    | 4      | number&sup1; | Float                |
| d    | 8      | number&sup1; | Double               |

### Superscripts:
 **1:** Unpack with 'f' and 'd' key can return NaN. The value NAN is used to represent a value that is an error. This is represented when exponent field is all ones with a zero sign bit or a mantissa that it not 1 followed by zeros. This is a special value that might be used to denote a variable that doesn’t yet hold a value.


## Endianness

| Key | Description          |
|-----|----------------------|
| <   | Little endian        |
| \>  | Big endian           |
| !   | Network (big endian) |