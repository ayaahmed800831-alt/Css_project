
const task1 = (cb) =>
  setTimeout(() => {
    const message = 'Task 1 has executed successfully!';
    cb(message);
  }, 3000);

const task2 = (cb) =>
  setTimeout(() => {
    const message = 'Task 2 has executed successfully!';
    cb(message);
  }, 0);

const task3 = (cb) =>
  setTimeout(() => {
    const message = 'Task 3 has executed successfully!';
    cb(message);
  }, 1000);

const task4 = (cb) =>
  setTimeout(() => {
    const message = 'Task 4 has executed successfully!';
    cb(message);
  }, 2000);

const task5 = (cb) =>
  setTimeout(() => {
    const message = 'Task 5 has executed successfully!';
    cb(message);
  }, 4000);

const asyncTasks = [task1, task2, task3, task4, task5];

const executeInSequenceWithCBs = (tasks, callback) => {
  const messages = [];

  const runTask = (index) => {
    if (index === tasks.length) {
      callback(messages);
      return;
    }

    tasks[index]((message) => {
      messages.push(message);

      runTask(index + 1);
    });
  };

  runTask(0);
};

executeInSequenceWithCBs(asyncTasks, (messages) => {
  console.log(messages);
});
///
const apis = [
  {
    apiName: 'products',
    apiUrl: 'https://dummyjson.com/products',
  },
  {
    apiName: 'users',
    apiUrl: 'https://dummyjson.com/users',
  },
  {
    apiName: 'posts',
    apiUrl: 'https://dummyjson.com/posts',
  },
  {
    apiName: 'comments',
    apiUrl: 'https://dummyjson.com/comments',
  },
];

const executeInParallelWithPromises = async (apis) => {
  const promises = apis.map(async (api) => {
    const response = await fetch(api.apiUrl);

    const data = await response.json();

    return {
      ...api,
      apiData: data,
    };
  });

  return Promise.all(promises);
};

executeInParallelWithPromises(apis)
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
//
const apis = [
  {
    apiName: 'products',
    apiUrl: 'https://dummyjson.com/products',
  },
  {
    apiName: 'users',
    apiUrl: 'https://dummyjson.com/users',
  },
  {
    apiName: 'posts',
    apiUrl: 'https://dummyjson.com/posts',
  },
  {
    apiName: 'comments',
    apiUrl: 'https://dummyjson.com/comments',
  },
];

const executeInSequenceWithPromises = async (apis) => {
  const results = [];

  for (const api of apis) {
    const response = await fetch(api.apiUrl);

    const data = await response.json();

    results.push({
      ...api,
      apiData: data,
    });
  }

  return results;
};

executeInSequenceWithPromises(apis)
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
  //
  const getProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

getProducts();
//
const mapAsync = async (array, callback) => {
  const promises = array.map((item) => callback(item));

  return Promise.all(promises);
};

const numbers = [1, 2, 3, 4];

const asyncDouble = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
};

mapAsync(numbers, asyncDouble).then((result) => {
  console.log(result);
});
//
const safeFetch = async (url) => {
  try {
    const response = await fetch(url);

    // لو الريكوست فشل
    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return {
      success: false,
      error: 'Something went wrong',
    };
  }
};

safeFetch('https://dummyjson.com/products').then((result) => {
  console.log(result);
});

safeFetch('https://wrong-url-example.com').then((result) => {
  console.log(result);
});
//
// (1) What is the difference between parallel and sequential execution?
//     Parallel execution runs multiple tasks at the same time, while 
//      sequential execution runs tasks one after another.
// (2) Why does setTimeout(..., 0) not run immediately?
//  setTimeout(..., 0) does not run immediately because the callback is placed in the callback
//  queue and waits until the call stack becomes empty.
// (3)  When should you use Promise.all?
//   Promise.all should be used when multiple asynchronous tasks can run in parallel
//    and we want to wait until all of them finish.
// (4) Why do we use try/catch with async/await?
//  We use try/catch with async/await to handle 
//  errors that may happen during asynchronous operations.
// (5) Which challenge was hardest and why?
//  The hardest challenge was sequential and parallel execution because understanding the 
//  difference between their execution order was confusing.