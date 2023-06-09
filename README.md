# until-done

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/your-username/your-package-name/blob/main/LICENSE)

> A lightweight utility for waiting until a condition is met.

## Installation

```shell
npm install until-done
```

## Usage/Examples

```typescript
import untilDone from "until-done";

async function fetchData() {
  let apiResponse = null;

  // Simulating an asynchronous API call
  setTimeout(() => {
    apiResponse = { data: "Sample response" };
  });
  await untilDone(() => apiResponse !== null);
  //check for the apiResponse Every 1s (by default)
  // API response is available, proceed with code execution
  console.log("API response:", apiResponse);
}

fetchData();
```

```typescript
import untilDone from "until-done";

async function fetchData() {
  let apiResponse = null;

  // Simulating an asynchronous API call
  setTimeout(() => {
    apiResponse = { data: "Sample response" };
  }, 3000);

  await untilDone(() => apiResponse !== null, 500);
  //check for the apiResponse Every 500ms
  // API response is available, proceed with code execution
  console.log("API response:", apiResponse);
}

fetchData();
```

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](https://choosealicense.com/licenses/apache-2.0/) file for details.
