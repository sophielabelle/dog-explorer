export const fetchData = endpoint => {
  return fetch(`https://dog.ceo/api/${endpoint}`)
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error(res.status);
      }
    });
}