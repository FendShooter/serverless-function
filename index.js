const title = document.querySelector('.title');
const result = document.querySelector('.employees');

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/hello');
    title.textContent = data;
  } catch (error) {
    console.log(error.response);
  }
};

fetchData();
const fetchEmployee = async () => {
  try {
    const { data } = await axios.get('/api/basicApi');
    const employees = data
      .map((employee) => {
        const { name, pilotingScore, shootingScore, isForceUser } = employee;
        return `
        <article>
          <h1 class="name">${name}</h1>
          <p>${pilotingScore}</p>
          <p>${shootingScore}</p>
          <p>${isForceUser}</p>
          <button class="btn">Subscribe</button>
        </article>
      `;
      })
      .join('');
    result.innerHTML = employees;
  } catch (error) {
    console.log(error.response);
  }
};

fetchEmployee();
