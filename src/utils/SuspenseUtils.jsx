class SuspenseUtils {
  wrapPromise(promise) {
    let status = "pending";
    let results;

    const suspender = promise.then(
      (tasks) => {
        status = "fulfilled";
        results = tasks;
      },
      (reason) => {
        status = "rejected";
        results = reason;
      }
    );

    return {
      read() {
        if (status === "pending") {
          throw suspender;
        } else if (status === "rejected") {
          throw promise;
        } else if (status === "fulfilled") {
          return results;
        }
      },
    };
  }
}

const suspenseUtils = new SuspenseUtils();
export { suspenseUtils };
