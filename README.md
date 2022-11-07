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
npm i jspack.ts
```

## Formats

<table>
    <thead>
    <tr>
        <th>Key</th>
        <th>Length</th>
        <th>Type</th>
        <th>Description</th>
        <th colspan="2">Examples</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>A</td>
        <td>any</td>
        <td>number[]</td>
        <td>Array</td>
        <td><a href="#pack-4" >Pack</a></td>
        <td><a href="#unpack-4" >Unpack</a></td>
    </tr>
    <tr>
        <td>x</td>
        <td>1</td>
        <td>number</td>
        <td>NUL-padded byte</td>
        <td><a href="#pack-6" >Pack</a></td>
        <td><a href="#unpack-6" >Unpack</a></td>
    </tr>
    <tr>
        <td>c</td>
        <td>1</td>
        <td>string</td>
        <td>Single char (ascii)</td>
        <td><a href="#pack" >Pack</a></td>
        <td><a href="#unpack" >Unpack</a></td>
    </tr>
    <tr>
        <td>s</td>
        <td>any</td>
        <td>string</td>
        <td>String char (ascii)</td>
        <td><a href="#pack-3" >Pack</a></td>
        <td><a href="#unpack-3" >Unpack</a></td>
    </tr>
    <tr>
        <td>b</td>
        <td>1</td>
        <td>number</td>
        <td>Char (signed)</td>
        <td><a href="#pack-1" >Pack</a></td>
        <td><a href="#unpack-1" >Unpack</a></td>
    </tr>
    <tr>
        <td>B</td>
        <td>1</td>
        <td>number</td>
        <td>Char (unsigned)</td>
        <td><a href="#pack-1" >Pack</a></td>
        <td><a href="#unpack-1" >Unpack</a></td>
    </tr>
    <tr>
        <td>h</td>
        <td>2</td>
        <td>number</td>
        <td>Short (signed)</td>
        <td><a href="#pack-1" >Pack</a></td>
        <td><a href="#unpack-1" >Unpack</a></td>
    </tr>
    <tr>
        <td>H</td>
        <td>2</td>
        <td>number</td>
        <td>Short (unsigned)</td>
        <td><a href="#pack-1" >Pack</a></td>
        <td><a href="#unpack-1" >Unpack</a></td>
    </tr>
    <tr>
        <td>i</td>
        <td>4</td>
        <td>number</td>
        <td>Int (signed)</td>
        <td><a href="#pack-1" >Pack</a></td>
        <td><a href="#unpack-1" >Unpack</a></td>
    </tr>
    <tr>
        <td>I</td>
        <td>4</td>
        <td>number</td>
        <td>Int (unsigned)</td>
        <td><a href="#pack-1" >Pack</a></td>
        <td><a href="#unpack-1" >Unpack</a></td>
    </tr>
    <tr>
        <td>l</td>
        <td>4</td>
        <td>number</td>
        <td>Long (signed)</td>
        <td><a href="#pack-1" >Pack</a></td>
        <td><a href="#unpack-1" >Unpack</a></td>
    </tr>
    <tr>
        <td>L</td>
        <td>4</td>
        <td>number</td>
        <td>Long (unsigned)</td>
        <td><a href="#pack-1" >Pack</a></td>
        <td><a href="#unpack-1" >Unpack</a></td>
    </tr>
    <tr>
        <td>q</td>
        <td>8</td>
        <td>number</td>
        <td>Long long (signed)</td>
        <td><a href="#pack-2" >Pack</a></td>
        <td><a href="#unpack-2" >Unpack</a></td>
    </tr>
    <tr>
        <td>Q</td>
        <td>8</td>
        <td>number</td>
        <td>Long long (unsigned)</td>
        <td><a href="#pack-2" >Pack</a></td>
        <td><a href="#unpack-2" >Unpack</a></td>
    </tr>
    <tr>
        <td>f</td>
        <td>4</td>
        <td>number¹</td>
        <td>Float</td>
        <td><a href="#pack-5" >Pack</a></td>
        <td><a href="#unpack-5" >Unpack</a></td>
    </tr>
    <tr>
        <td>d</td>
        <td>8</td>
        <td>number¹</td>
        <td>Double</td>
        <td><a href="#pack-5" >Pack</a></td>
        <td><a href="#unpack-5" >Unpack</a></td>
    </tr>
    </tbody>
</table>

### Superscripts:
 **1:** Unpack with 'f' and 'd' key can return NaN. The value NAN is used to represent a value that is an error. This is represented when exponent field is all ones with a zero sign bit or a mantissa that it not 1 followed by zeros. This is a special value that might be used to denote a variable that doesn’t yet hold a value.


## Endianness

| Key | Description          |
|-----|----------------------|
| <   | Little endian        |
| \>  | Big endian           |
| !   | Network (big endian) |

## Initialization

#### ES6:
```typescript
import { JSPack, JSPackFormat, JSPackEndianness } from 'jspack.ts';
```
#### Node:
```typescript
const { JSPack, JSPackFormat, JSPackEndianness } = require('jspack.ts');
```

## Examples

### Formats:

- [Char (ascii)](#char-ascii)
- [Int](#int)
- [Int64 (long long int)](#int64-long-long-int)
- [String (ASCII chars)](#string-ascii-chars)
- [Array (Raw data)](#array-raw-data)
- [IEEE 754 (Float, Double)](#ieee-754-float-double)
- [Null Byte](#null-byte)

---

### Char (ascii)
#### Pack:
```typescript
// Return Uint8Array(97)
JSPack.Pack(JSPackFormat.c, 'a', JSPackEndianness.bigEndian);
```
#### Unpack:
```typescript
// Return 'b'
JSPack.Unpack(JSPackFormat.c, new Uint8Array([98]), JSPackEndianness.bigEndian);
```

---

### Int
#### Pack:
```typescript
// Return Uint8Array(0x85)
JSPack.Pack(JSPackFormat.b, -123, JSPackEndianness.bigEndian);
```
#### Unpack:
```typescript
// Return -123
JSPack.Unpack(JSPackFormat.b, new Uint8Array([0x85]), JSPackEndianness.bigEndian);
```

---

### Int64 (long long int)
#### Pack:
```typescript
// Return Uint8Array(0x00, 0x01, 0xEE, 0x0D, 0x32, 0xDE, 0xBC, 0xD1)
const longLongInt = {
    low: 0x32DEBCD1,
    high: 0x0001EE0D,
    unsigned: true,
};

JSPack.Pack(JSPackFormat.q, longLongInt, JSPackEndianness.bigEndian);
```
#### Unpack:
```typescript
const longLongIntBinary = new Uint8Array([0x00, 0x01, 0xEE, 0x0D, 0x32, 0xDE, 0xBC, 0xD1]);

// Return { low: 0x32DEBCD1, high: 0x0001EE0D, unsigned: true }
JSPack.Unpack(JSPackFormat.q, longLongIntBinary, JSPackEndianness.bigEndian);
```

---

### String (ASCII chars)
#### Pack:
```typescript
// Return Uint8Array(97, 98, 99)
JSPack.Pack(JSPackFormat.s, 'abc', JSPackEndianness.bigEndian);
```
#### Unpack:
```typescript
// Return 'abc'
JSPack.Unpack(JSPackFormat.s, new Uint8Array([97, 98, 99]), JSPackEndianness.bigEndian);
```

---

### Array (Raw data)
#### Pack:
```typescript
// Return Uint8Array(0x61, 0x62, 0x63)
JSPack.Pack(JSPackFormat.A, [97, 98, 99], JSPackEndianness.bigEndian);
```
#### Unpack:
```typescript
// Return [97, 98, 99]
JSPack.Unpack(JSPackFormat.A, new Uint8Array([0x61, 0x62, 0x63]), JSPackEndianness.bigEndian);
```

---

### IEEE 754 (Float, Double)
#### Pack:
```typescript
// Return Uint8Array(0x47, 0x59, 0x3, 0x55)
JSPack.Pack(JSPackFormat.f, 55555.333, JSPackEndianness.bigEndian);
```
#### Unpack:
```typescript
// Return 55555.33203125
JSPack.Unpack(JSPackFormat.f, new Uint8Array([0x47, 0x59, 0x3, 0x55]), JSPackEndianness.bigEndian);
```

---

### Null Byte
#### Pack:
```typescript
// Return Uint8Array(0)
JSPack.Pack(JSPackFormat.x, 0x0, JSPackEndianness.bigEndian);
```
#### Unpack:
```typescript
// Return 0
JSPack.Unpack(JSPackFormat.x, new Uint8Array([0]), JSPackEndianness.bigEndian);
```