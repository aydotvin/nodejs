## Notes:

- When built in modules are imported/required, the module name is prefixed with "node:". This is optional.

## Path:

- `basename` returns the last portion of the path.
- `extname` returns the extension of the file.
- `parse` returns an object with different parts of the path.
- `format` returns the path string when the parsed object is passed.
- `isAbsolute` returns true/false if the passed path is absolute or relative.
- `join` returns a string with normalised path directories and files.
- `resolve` returns a string with absolute path to the passed directories and files.

## Events:

- This module helps in working with custom events in the application.
- It returns an EventEmitter class which can be used to create `emitter` object.
- `emitter` object is used to emit and listen to the events.
- Additional params can be passed to the event listener by listing them after the event name while emitting the event.
