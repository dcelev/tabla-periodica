var nombre_variable = 1 // 1 | true o False  | "texto";
var numero = "gfkajhdglkfhgp";
 
var uno = "uno"; //string
var uno= 1; //numerico

var num_dos = 2;
var string_dos="dos" ;

//la variable se crea una vez
var x = 12;  //1,2,3,4
//solo la usamos
console.log(x); //el contenido de la variable //12 , no la x
console.log("x") // x
x = 10
console.log(x); //10
// comprobaciones condicionales
if( x >= 18){//true o false
  console.log("es mayor de edad");
}else{
  console.log("es menor de edad");
}

//positivo o negativo
if(x !=0){
	
}

//realizar la division de dos numeros, 
//no podemos dividir por cero (x/y)
x= 0; y = -1 
if(y != 0){
  console.log(" el resultado de la division es: ",x/y);
}else{
	console.log("NO SE PUEDE DIVIDIR POR CERO")
}
// y = 0 <> y==0 ; y >0 ; y>=0; y<=0
if(y == 0){
  console.log("NO SE PUEDE DIVIDIR POR CERO")
}else{
	console.log(" el resultado de la division es: ",x/y);
}
x = 16
var licencia_conducir = false

if(x >= 18){
  console.log("mayor de edad");
  x = 22;
  //if(licencia_conducir){
	if(licencia_conducir == true){
    console.log("tiene licencia de conducir");
  }else{
    console.log("NO tiene licencia de conducir");
  }
  // -true = false ; -false= true
  // !true = false ; !false= true
}else{//menor de edad
	if(x < 12){
    	console.log("asiste a primaria");
  }else{
    x= 12
  	console.log("asiste a secundaria");
  }
}
  //puede recibir o no parametros o argumentos
 function nombre_funcion(){
 }

function dividir(a,b){ //60,3//12,4 //a = "texto"; b= true
	if(b == 0){
  	console.log("NO SE PUEDE DIVIDIR POR CERO");
	}else{
		console.log("El resultado de la division es: ",a/b);
	} 
}
var x = 12;//"texto";
var y = 4;//true;
dividir(x,y);//dividir(12,4) //dividir("texto",true)
dividir(60,3);
dividir(14,0);
dividir(x,3);//dividir(12,3)

function multiplicar(a,b,c){//1,2,3
	console.log("llamado a la funcion gato");
	return a*c*b;//24
}
//llamado a la funcion
multiplicar(1,2,3); //6
var resultado_multiplicacion = multiplicar(1,2,3);//6
console.log(resultado_multiplicacion);//6 en consola

console.log(multiplicar(1,2,3));//6 en consola
dividir(resultado_multiplicacion,4);//6,4
var resultado_funcion= gato(12,17,20);//24
console.log(resultado_funcion);//24
