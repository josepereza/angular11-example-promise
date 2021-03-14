import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // The doAsyncTask function when called kicks of an asynchronous task and returns immediately.
    var promise = doAsyncTask();
    promise
      .then(() => {
        console.log("promised");
      })
      .catch(error => {
        console.log("error in promise");
      })
      .finally(() => {
        console.log("finished");
      });
    console.log("contunie working");

    let promiseOK = Promise.resolve("done");
    promiseOK.then(val => console.log(val));
    let promiseKO = Promise.resolve("ERROR");
    promiseKO.then(val => console.log(val));
  }

  name = "Angular " + VERSION.major;
}

const hasError = false;

function doAsyncTask() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Work Complete");
      resolve();
    }, 5000);
  });
  return promise;
}

function resolve() {
  console.log("resolve");
}

function reject() {
  console.log("reject");
}
