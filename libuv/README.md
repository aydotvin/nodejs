## Notes:

- Open source library written in C.
- This handles the asynchronous operations in nodejs using `thread pool OR native async mechanism` and `event loop`.
- Native async mechanism differs based on OS.

  - `epoll` - linux
  - `kqueue` - macos
  - `IO completion port` - windows

- Network I/O operations are usually sent to the kernel to prevent blocking of CPU cores.
- All the `sync` methods run in the main thread.
- Libuv's threadpool has 4 threads by default.
- The thread pool size can be extended by setting the following env.

```
	const OPERATING_SYSTEM = require("os");
	process.env.UV_THREADPOOL_SIZE = OPERATING_SYSTEM.cpus().length
```

- If the size is increased beyond the cpu cores the machine has, then average time taken per method execution also increases. This is because the OS has to provide equal time to all the threads between the available cores.

## Flow:

- Main thread gives the async control to the libuv, which will do the async task using one of its threads from thread pool.
- Libuv passes the control to the threads present in the system for parallel execution.

## Order of execution/priority:

- Timer queue
- I/O queue
- Check queue
- Close queue
- Microtask queue

  - nextTick queue
  - promise queue

- Callstack (main thread) comes above all. Once it is done the below queues come into picture.
- As long as the callbacks are pending, the cycle repeats.
- Cycle:
  - Microtask queue (nextTick > promise)
  - Timer queue
  - Microtask queue
  - I/O queue
  - Microtask queue
  - Check queue
  - Microtask queue
  - Close queue
  - Microtask queue
