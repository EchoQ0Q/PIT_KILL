const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function CreatePromise(fn) {
  let that = this;
  that.value = null;
  that.state = PENDING;
  that.resolveCallbacks = [];
  that.rejectCallbacks = [];

  try {
    fn && fn(resolve, reject);
  } catch (e) {
    reject(e);
  }

  function resolve(value) {
    if (that.state == PENDING) {
      that.state = RESOLVED;
      that.value = value;
      that.resolveCallbacks.map(v => v(that.value));
    }
  }

  function reject(value) {
    if (that.state == REJECTED) {
      that.state = REJECTED;
      that.value = value;
      that.rejectCallbacks.map(v => v(that.value));
    }
  }
}

CreatePromise.prototype.then = function(onResolved, onRejected) {
  let that = this;
  if (that.state == PENDING) {
    that.resolveCallbacks.push(onResolved);
    that.rejectCallbacks.push(onRejected);
  }

  if (that.state == RESOLVED) {
    onResolved(that.value);
  }

  if (that.state == REJECTED) {
    onRejected(that.value);
  }
};

new CreatePromise(resolve => {
  resolve(111);
}).then(res => {
  console.log(res);
});
