const fs = require('fs');

const filePath = 'text.txt';
let wordCount = 0;

const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

readStream.on('data', function(chunk) 
{
  const words = chunk.split(/\s+/);      // розділяє chunk на слова
  wordCount += words.length;            // додає кількість слів в chunk до загального лічильника
});

readStream.on('end', function() 
{
  console.log(`Кількість слів у файлі: ${wordCount}`);
});
