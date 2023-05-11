export default async function untildone(condition: () => boolean, interval = 1000): Promise<void> {
    return new Promise<void>((resolve) => {
      const intervalId = setInterval(() => {
        if (condition()) {
          clearInterval(intervalId);
          resolve();
        }
      }, interval);
    });
  }
  