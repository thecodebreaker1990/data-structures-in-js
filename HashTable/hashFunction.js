function hash(key, arrayLen) {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let value = key.charCodeAt(i) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

const wordList = [
  "jHG59tPv8sQlA7d2FrWxk",
  "zX6bNcR4mV0oT1yU8hJn",
  "L3kTcO9zN0bXpM1vC5rI",
  "aB2cD5eF6gH7iJ8kL9",
  "pQ4wE7rT2yU8iO3pA6s",
  "mZ7nX8bV9cM0lK2jH5g",
  "D1fG4hJ5kL6jS7dF3g",
  "vH8jK6lM4nB7zX9cV2",
  "qW5eR3tY7uI1oP0lK9j",
  "xN6bV2mC8zS1dF5gH4j",
  "yB3nV4cX5zN6mJ7kL8",
  "kQ9wE0rT7yU4iO3pA2s",
  "rT6yU8iO3pA4sD5fG7h",
  "jK9lM0nB7vC2xZ3mQ4w",
  "oE1rT7yU2iO5pA4sD6f",
  "pC3vB7nM5lK9jH1gF8d",
  "hJ2kL4jS6dF8gH9hG0f",
  "bV3cN4mB7zX8nM1lK6",
  "lK2jH5gF6dS7fG8hJ9",
  "qW5eR7tY9uI0oP2lK3j",
];

const wordHashes = wordList.map((word) => hash(word, 13));

console.log(wordHashes);
