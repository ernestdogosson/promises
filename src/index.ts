const drink = () => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("You get a drink");
      } else {
        reject("Out of luck. Try again.");
      }
    }, 1000);
  });
};

drink().then(console.log).catch(console.log);
