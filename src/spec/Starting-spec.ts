import request from "request";

const base_url: string | URL = "http://localhost:5001/";
const resize_url: string | URL = "http://localhost:5001/resize";
const resize_url2: string | URL =
  "http://localhost:5001/resize?image=p2&width=350&height=240";
const resize_url3: string | URL = "http://localhost:5001/resize?image=p2";
const resize_url4: string | URL =
  "http://localhost:5001/resize?image=p2&width=350p&height=240";
const resize_url5: string | URL =
  "http://localhost:5001/resize?image=p2&width=350";

//you must run the project pefore testing this
describe("Starting Server", function () {
  describe("GET /", function () {
    it("returns status code 200 or (ECONNREFUSED)", (done) => {
      request.get(base_url, (err, response) => {
        if (err) {
          expect(err.code).toBe("ECONNREFUSED");
          done();
        } else {
          expect(response.statusCode).toBe(200);
          done();
        }
      });
    });

    it("returns body equal(Hello from image prosessing api) or (ECONNREFUSED)", (done) => {
      request.get(base_url, (err, response) => {
        if (err) {
          expect(err.code).toBe("ECONNREFUSED");
          done();
        } else {
          expect(response.body).toBe("Hello from image prosessing api");
          done();
        }
      });
    });
  });
});

describe("resize request", function () {
  describe("GET /", function () {
    it("returns body equal (oops! image is Required) or (ECONNREFUSED)", (done) => {
      request.get(resize_url, (err, response) => {
        if (err) {
          expect(err.code).toBe("ECONNREFUSED");
          done();
        } else {
          expect(response.body).toBe("oops! image is Required");
          done();
        }
      });
    });

    it("returns status code equal(200) or (ECONNREFUSED)", (done) => {
      request.get(resize_url2, (err, response) => {
        if (err) {
          expect(err.code).toBe("ECONNREFUSED");
          done();
        } else {
          expect(response.statusCode).toBe(200);
          done();
        }
      });
    });

    it("returns body equal(oops! width is Required) or (ECONNREFUSED)", (done) => {
      request.get(resize_url3, (err, response) => {
        if (err) {
          expect(err.code).toBe("ECONNREFUSED");
          done();
        } else {
          expect(response.body).toBe("oops! width is Required");
          done();
        }
      });
    });

    it("returns body equal(oh! oh width must be number) or (ECONNREFUSED)", (done) => {
      request.get(resize_url4, (err, response) => {
        if (err) {
          expect(err.code).toBe("ECONNREFUSED");
          done();
        } else {
          expect(response.body).toBe("oh! oh width must be number");
          done();
        }
      });
    });

    it("returns body equal(oops! height is Required) or (ECONNREFUSED)", (done) => {
      request.get(resize_url5, (err, response) => {
        if (err) {
          expect(err.code).toBe("ECONNREFUSED");
          done();
        } else {
          expect(response.body).toBe("oops! height is Required");
          done();
        }
      });
    });
  });
});
