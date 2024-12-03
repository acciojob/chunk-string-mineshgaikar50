function stringChop(str, size) {
  // your code here
	 if (!str) {
    return []; // Return empty array for null or empty input
  }
  
  const chunkSize = parseInt(size, 10); // Ensure size is a valid integer
  if (isNaN(chunkSize) || chunkSize <= 0) {
    return []; // Return empty array for invalid chunk size
  }

  const chunks = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
