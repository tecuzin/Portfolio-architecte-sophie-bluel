const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  const mesTravaux = fetch("http://localhost:5678/api/works", requestOptions)
  .then((response) => response.json())
  .then((data) => {
    if (Array.isArray(data) && data.length > 0) {
      const firstItem = data[0];
      console.log(firstItem);
      console.log(data);
    } else {    
      console.error("Le tableau de données est vide ou n'est pas un tableau.");
    }
  })
  .catch((error) => console.error(error));