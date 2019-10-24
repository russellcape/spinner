const spinner = ['\r| ', '\r/ ', '\r- ', '\r\\ ']
let start = 100;
spinner.push('\r| ', '\r/ ', '\r- ', '\r\\ ')

const spin = function() {
  for (let i = 0; i < spinner.length; i++) {
    setTimeout(() => {process.stdout.write(spinner[i])}, start)
    start += 200
  }
  setTimeout(() => {console.log()}, start);
};


spin()















// Object.entries(spinner).forEach(([spin, value]) =>
// {process.stdout.write(value)}, +200);


// for (let [spin, value] of Object.entries(spinner)) {
// setTimeout(() => {process.stdout.write([value])}, 200);
//}



   // setTimeout(() => {process.stdout.write(obj, i)}, 100 + (i * 2))



// const spinner = function() {
//   setTimeout(() => {process.stdout.write('\r| ')}, 100);
//   setTimeout(() => {process.stdout.write('\r/ ')}, 300);
//   setTimeout(() => {process.stdout.write('\r- ')}, 500);
//   setTimeout(() => {process.stdout.write('\r\\ ')}, 700);
//   setTimeout(() => {process.stdout.write('\r| ')}, 900);
//   setTimeout(() => {process.stdout.write('\r/ ')}, 1100);
//   setTimeout(() => {process.stdout.write('\r- ')}, 1300);
//   setTimeout(() => {process.stdout.write('\r\\ ')}, 1500);
//   setTimeout(() => {process.stdout.write('\r| ')}, 1700);
//   setTimeout(() => {console.log()}, 2100);
// };