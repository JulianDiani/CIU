function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}

async function getProcessedData2(url){
    try{
        const downloadedData = await downloadData(url);
        const processDataInWorker= await proccesDataInWorker(v)
        return processDataInWorker
    }
    catch(e){
        const downloadFallbackData= await downloadFallbackData(url)
    }
}