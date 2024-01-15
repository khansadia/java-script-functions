function fetchData(callback) {
    setTimeout(function () {
      const data = "Hello from callback";
      callback(data);
    }, 3000);
  }
  
  function handleData(data) {
    console.log(data);
  }
  
  function handleDataWithAlert(data) {
    alert(data);
  }
  
  fetchData(handleDataWithAlert);