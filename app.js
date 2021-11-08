const auth = 'appid=5YQ6LG-GH3HQ42U69&'
const apiLink = 'https://api.wolframalpha.com/v2/query?';
const userInput = document.querySelector("#search");

userInput.addEventListener('click', () => {
  let textInput = '';
  textInput = document.querySelector('#blank').value;
  test(textInput);
});

async function test(textInput) {
  try {
    const res = await axios.get(`${apiLink}${auth}&input=${textInput}`);
    console.log(res.data);
  }
  catch (error) {
    console.log(error);
  }
}
