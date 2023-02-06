export async function dictionary(word) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error("fetch wrong");
  } catch (e) {
    console.log(e.message);
  }
}
