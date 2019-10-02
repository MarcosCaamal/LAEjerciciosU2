//Ejercicio 1 palbras con más de 7 caracterés
let mensaje="el 20 de enero de 2019 inicio a la 3 semana nacional de tecnologia";
let newMensaje=mensaje.replace(/[a-z]{7,}/g, "");
console.log(newMensaje);

//Ejercicio 2 expreciones que no finalicen con una vocal
let mensaje2="hola mundo hoy es un gran dia";
let newMensaje2=mensaje2.replace(/[^aeiou\s]\b/g, "*");
console.log(newMensaje2);


//Ejercicio 3 palabras que inicien con M|m donde la segunda letra no sea vocal
let mensaje="Mlarcos marcos mloto moto mraro";
let newMensaje=mensaje.replace(/M|m(?![aeiou])/g, " ");
console.log(newMensaje);

//Ejercicio 4 comillas
let mensaje4 = '"Marcos" marcos "loto" moto raro';
let newMensaje4=mensaje4.replace(/".*?"/g,"*");
console.log(newMensaje4);

//Ejercicio 5 Ips
let mensaje5 = "Marcos marcos 192.168.2.24 loto moto 152.1658.2.244 raro 192.168.2.24";
let newMensaje5=mensaje5.replace(/\b[0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}\b/g, "xd");
console.log(newMensaje5);

//Ejercicio 6 Horas
let mensaje6 = "Marcos marcos 25:20 loto moto 50:50 raro 192.168.2.24";
let newMensaje6=mensaje6.replace(/\b([0-2]?[0-4]|[0-1]?[0-9])[:][0-5][0-9]/g, "Hora");
console.log(newMensaje6);

//Ejercicio 7 teléfonos
let mensaje7 = "Marcos marcos 9841863407 23:20 loto moto 50:50 raro 192.168.2.24";
let newMensaje7=mensaje7.replace(/\d{10}/g, "Telefono");
console.log(newMensaje7); [\w._%+-]+@[\w.]+

//Ejercicio 8 Correos electrónicos
let mensaje8 = "Marcos marcos m04caamal@itsva.edu.mx.com 23:20 loto moto 50:50 raro 192.168.2.24";
let newMensaje8=mensaje8.replace(/\w[\w._%+-]+@[\w.]+/g, "Correo");
console.log(newMensaje8);

//Ejercicio 9 Url's
let mensaje9 = "Marcos marcos https://doto.com.mx/customer/account/create/ 23:20 loto https://www.w3schools.com/default.asp moto 50:50 mraro 192.168.2.24";
let newMensaje9=mensaje9.replace(/[a-zA-Z]+:[/]{1,2}[\w.]+[\w._%+-/]+/g, "Url");
console.log(newMensaje9);


//Ejercicio 10 código postal
let mensaje10 = "Marcos marcos 97780 23:20 loto moto 50:50 raro 97808 192.168.2.24";
let newMensaje10=mensaje10.replace(/\d{5}/g, "CP");
console.log(newMensaje10);
