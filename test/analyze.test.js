const request = require("supertest");
const app = require("../app");

const sendPostRequest = (endpoint, data) => {
  return request(app).post(endpoint).send(data);
};

describe("Text Analyzer API", () => {
  describe("POST /api/word-count", () => {
    it("Number of words", async () => {
      const response = await sendPostRequest("/api/word-count", { 
        text: "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun." 
      });
      expect(response.status).toBe(200);
      expect(response.body.count).toBe(16);
    });
  });

  describe("POST /api/character-count", () => {
    it("Number of characters", async () => {
      const response = await sendPostRequest("/api/character-count", { 
        text: "The quick brown fox" 
      });

      expect(response.status).toBe(200);
      expect(response.body.count).toBe(16);
    });
  });

  describe("POST /api/sentence-count", () => {
    it("Number of sentences", async () => {
      const response = await sendPostRequest("/api/sentence-count", {
        text: "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun." 
      });

      expect(response.status).toBe(200);
      expect(response.body.count).toBe(2);
    });
  });

  describe("POST /api/paragraph-count", () => {
    it("Number of paragraphs", async () => {
      const response = await sendPostRequest("/api/paragraph-count", { 
        text: "The quick brown fox jumps over the lazy dog.\n The lazy dog slept in the sun." 
      });
      expect(response.status).toBe(200);
      expect(response.body.count).toBe(2);
    });
  });

  describe("POST /api/longest-word", () => {
    it("Longest word in the paragraphs", async () => {
      const response = await sendPostRequest("/api/longest-word", { 
        text: "The quick brown fox jumps over the lazy-dog" 
      });

      expect(response.status).toBe(200);
      expect(response.body.longestWord).toBe("lazy-dog");
    });
  });
});
