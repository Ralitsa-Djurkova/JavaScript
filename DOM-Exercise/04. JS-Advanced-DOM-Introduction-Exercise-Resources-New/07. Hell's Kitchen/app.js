function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  const input = document.querySelector("#inputs>textarea");
  const bestRestourantP = document.querySelector("#bestRestaurant>p");
  const workersP = document.querySelector("#workers>p");
  function onClick() {
    let arr = JSON.parse(input.value);

    let restourants = {};

    arr.forEach((element) => {
      const tokens = element.split(" - ");
      const nameRestourant = tokens[0];
      const nameWorker = tokens[1].split(", ");
      let workers = [];

      for (const worker of nameWorker) {
        const workerToekns = worker.split(" ");
        const salary = Number(workerToekns[1]);
        workers.push({ name: workerToekns[0], salary });
      }

      if (restourants[nameRestourant]) {
        workers = workers.concat(restourants[nameRestourant].workers);
      }
      workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
      const bestAverageSalary = workers[0].salary;
      const averageSalary =
        workers.reduce((sum, worker) => sum + worker.salary, 0) /
        workers.length;

      restourants[nameRestourant] = {
        workers,
        averageSalary,
        bestAverageSalary,
      };
    });

    let bestRestourantSalary = 0;
    let best = undefined;
    for (const name in restourants) {
      if (restourants[name].averageSalary > bestRestourantSalary) {
        best = {
          name,
          workers: restourants[name].workers,
          bestSalary: restourants[name].bestAverageSalary,
          averageSalary: restourants[name].averageSalary,
        };

        bestRestourantSalary = restourants[name].averageSalary;
      }
    }
    let workerResult = [];

    bestRestourantP.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;

    best.workers.forEach((worker) => {
      workerResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
    });
    workersP.textContent = workerResult.join(" ");
  }
}
