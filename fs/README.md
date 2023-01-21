## Notes:

- Use `readFile` so as to prevent blocking of execution in case of large files or many concurrent users accessing one data.
- For better time and memory efficiency, use callback based read write operations.

---

## writeFile:

### Syntax:

```
fs.writeFile("filename", "content", { ...options }, cb);
```

### Options:

- `flag: "a"` to append content in the file. By default overwrites the previous content.

---

## Streams:

- These have a default buffer size of 64 kBytes

### Types of streams:

- Readable streams - reading from a file.
- Writable streams - writing to a file.
- Duplex streams - sockets.
- Transform streams - read and write compressed data.

### createReadStream:

#### Syntax:

```
const readableStream = fs.createReadStream("file-path", {...options});
```

#### Options

- `encoding: "utf-8"` - encoding format.
- `highWaterMark: 2` - buffer/chunk size in bytes.
