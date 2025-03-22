"use server";
export async function getAllCategrories() {
  try {
    // https://stagingapi.mazaady.com/api/v1/all-categories => when fetch we can't detect application language
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((d) => d.json())
      .catch((err) => console.log(err));
    return data;
  } catch (err) {
    console.log(err);
  }
}
