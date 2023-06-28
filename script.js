const fetchAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    document.querySelector(".title").innerHTML = `Advice #${data.slip.id}`;
    document.querySelector(".text").innerHTML = `"${data.slip.advice}"`;

    const adviceId = data.slip.id;
    const adviceText = data.slip.advice;
    saveToDatabase(adviceId, adviceText);
  } catch (error) {
    console.error("An error occurred while fetching advice:", error);
  }
};

const saveToDatabase = (id, advice) => {
  // Zapisanie porady w localStorage
  const advices = localStorage.getItem('advices') || '[]';
  const parsedAdvices = JSON.parse(advices);
  parsedAdvices.push(`Advice #${id}: ${advice}`);
  localStorage.setItem('advices', JSON.stringify(parsedAdvices));

  console.log('String added to the database.');

  const recordCount = parsedAdvices.length;

  if (recordCount > 10) {
    // Usunięcie pierwszego rekordu
    parsedAdvices.shift();
    localStorage.setItem('advices', JSON.stringify(parsedAdvices));
    console.log('First record deleted from the database.');
  } else {
    console.log('Record count is not greater than 10. No record deleted.');
  }
};

