/*async function to load promises and fetch url*/
async function weatherApi(url) {
  //  console.log(url);

  let response = await fetch(url, { mode: "cors" });

  const getData = await response.json();
  return getData;
}

export { weatherApi };
