// fecthing data from api uisng javascript

// function getadvice() {
//   let heading = document.getElementById("freeadvice");
//   fetch("https://api.adviceslip.com/advice").then((res)=>
//     res.json().then((data) => {
//       console.log(data);
//       heading.innerHTML = data.slip.advice;
//     })
//   );
// }
// getadvice();

async function getadvice() {
  try {
    let heading = document.getElementById("freeadvice");
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    let newData = data.slip.advice;
    console.log(newData);
    heading.innerHTML = newData;
  } catch (error) {}
}





