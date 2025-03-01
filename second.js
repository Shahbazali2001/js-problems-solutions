// Marks 
const marksWeight = 78;
const marksHeight = 1.69;
const marksBMI = marksWeight/(marksHeight*marksHeight);

// console.log('Marks BMI:', marksBMI);
// John
const johnWeight = 68;
const johnHeight =1.95;
const johnBMI = johnWeight/(johnHeight*johnHeight);

// console.log('John BMI:', johnBMI);

const compBMI = marksBMI > johnBMI;

if (compBMI) {
    console.log(`Mark's BMI ${marksBMI.toFixed(2)} is higher than John's ${johnBMI.toFixed(2)}!`);
}
else {
    console.log(`John's BMI ${johnBMI.toFixed(2)} is higher than Mark's ${marksBMI.toFixed(2)}!`);

}