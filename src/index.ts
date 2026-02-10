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

const getJoke = async (): Promise<void> => {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke",
  );
  const data = (await response.json()) as Joke;

  await new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(data.setup);
      resolve();
    }, 1000);
  });

  await new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(data.punchline);
      resolve();
    }, 4000);
  });
};

const main = async (): Promise<void> => {
  try {
    const message = await drink();
    console.log(message);
    await getJoke();
  } catch (error) {
    console.log(error);
  }
};

main();
