const drink = () => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("You get a drink");
      } else {
        reject("Out of stock. Try again.");
      }
    }, 1000);
  });
};

// drink().then(console.log).catch(console.log);

const jokes = (id: number) => {
  const promise = fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      let jokeSetup = data.setup;
      console.log(jokeSetup);

      setTimeout(() => {
        const jokePunchline = data.punchline;
        console.log(jokePunchline);
      }, 5000);
    })
    .catch((error) => {
      console.log(`Error fetching joke: ${error}.`);
    });
};

jokes(1);
