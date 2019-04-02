export const who = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('He');
    }, 200);
  });
}

function what() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('is');
    }, 100);
  });
}

function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('there');
    }, 150);
  });
}

async function msgSequentially() {
  const a = await exports.who();
  const b = await what();
  const c = await where();

  return a + " " + b + " " + c;
}

async function msgInParallel() {
  const [a, b, c] = await Promise.all([exports.who(), what(), where()]);

  return a + " " + b + " " + c;
}

export { who, msgSequentially, msgInParallel };