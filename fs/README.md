## Notes:

- Use `readFile` so as to prevent blocking of execution in case of large files or many concurrent users accessing one data.
- For better time and memory efficiency, use callback based read write operations.

## writeFile:

### Syntax:

```
fs.writeFile("filename", "content", { ...options }, cb);
```

### Options:

- `flag: "a"` to append content in the file. By default overwrites the previous content.
