class HttpRequestBuilder {
  constructor() {
    this.url = "";
    this.method = "GET";
    this.headers = {};
    this.body = null;
  }

  setUrl(url) {
    this.url = url;
    return this; // allows chaining
  }

  setMethod(method) {
    this.method = method.toUpperCase();
    return this;
  }

  addHeader(key, value) {
    this.headers[key] = value;
    return this;
  }

  setJSONBody(data) {
    this.body = JSON.stringify(data);
    this.addHeader("Content-Type", "application/json");
    return this;
  }

  build() {
    return {
      url: this.url,
      options: {
        method: this.method,
        headers: this.headers,
        body: this.method !== "GET" ? this.body : null,
      },
    };
  }
}

async function runExample() {
  const request = new HttpRequestBuilder()
    .setUrl("https://jsonplaceholder.typicode.com/posts")
    .setMethod("POST")
    .addHeader("Authorization", "Bearer 123456")
    .setJSONBody({ title: "Hello", body: "Builder Pattern", userId: 1 })
    .build();

  console.log("Request Config:", request);

  const response = await fetch(request.url, request.options);
  const data = await response.json();
  console.log("Response:", data);
}

runExample();
