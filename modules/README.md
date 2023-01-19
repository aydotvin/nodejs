### Notes:

- Each module in node has its own scope for variables. Even if two different modules has same variable names, there will not be any conflicts.

- Before a module's code is executed, it is wrapped in an iife which helps in providing a local scope to the variables to all modules.

### Module wrapper:

- When a module is executed internally as an iife, it has access to pre defined set of variables which act as global variables for that module.

  - `exports`
  - `require`
  - `module`
  - `__filename`
  - `__dirname`

- When a module is required, it gets cached in that module and the next time the module is required in the same file, it pulls the module from the cache. So any changes done to the module's variables before the second require will be available after the second require.
