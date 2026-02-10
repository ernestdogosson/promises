const drink = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("You get a drink and a joke. Enjoy!");
      } else {
        reject("Out of stock. Try again.");
      }
    }, 1000);
  });
};

type Joke = { setup: string; punchline: string };

const getJoke = (): Promise<void> =>
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json() as Promise<Joke>)
    .then((data) => {
      console.log(data.setup);
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log(data.punchline);
          resolve();
        }, 2000);
      });
    });

drink()
  .then((message) => {
    console.log(message);
    return getJoke();
  })
  .then(() => {
    console.log("Reward finished");
  })
  .catch(console.log);
