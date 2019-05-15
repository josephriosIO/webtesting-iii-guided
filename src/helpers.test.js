const helpers = require("./helpers.js");
const axios = require("axios");

jest.mock("uuid", () => {
  return () => "1234";
});

describe("helpers.js", () => {
  describe("name person method", () => {
    it("should make a person", () => {
      const expected = { name: "jon smith", id: "1234" };
      const acutal = helpers.makePerson("jon", "smith");
      expect(acutal).toEqual(expected);
    });
  });
  describe("forEvenOnly()", () => {
    it("it should invoke callback when its an even number", () => {
      const spy = jest.fn();
      helpers.forEvenOnly(2, spy);
      helpers.forEvenOnly(4, spy);
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenNthCalledWith(1, 2);
      expect(spy).toHaveBeenNthCalledWith(2, 4);
    });
    it("should NOT invoke callback when given an odd number", () => {
      const spy = jest.fn();
      helpers.forEvenOnly(1, spy);
      helpers.forEvenOnly(3, spy);
      expect(spy).not.toHaveBeenCalled();
    });
    it("should return a smile", () => {
      const spy = jest.fn(() => "smile");
      const greeting = helpers.greet(spy);
      expect(greeting).toBe("smile");
    });
  });
  describe("some API", () => {
    it("succeeds with correct password", async done => {
      const payload = { password: "mellon" };
      const url = "http://google.com";
      const res = await axios.post(url, payload);
      expect(res.statusCode).toBe(200);
      expect(res.success).toBe(true);
      done();
    });
    it("fails with wrong password", async done => {
      try {
        const payload = { password: "wrong" };
        const url = "http://google.com";
        const res = await axios.post(url, payload);
      } catch (err) {
        expect(err.success).toBe(false);
        expect(err.statusCode).toBe(401);

        done();
      }
    });
  });
});
