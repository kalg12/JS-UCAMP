//Las clases son como un molde o como una plantilla a reutilizar, que define caracterísitcas y
// comportamientos

class CuentaBancaria {
  constructor(numeroDeCuenta, saldoInicial) {
    this.numeroDeCuenta = numeroDeCuenta;
    this.saldo = saldoInicial;
  }

  //Definimos ahora algunos métodos que en la vida real sucede(depositos, retirar, consultarSaldo)

  //1- Depositos (Método)
  depositar(monto, quienDeposita, fechaActual) {
    this.saldo += monto;
    console.log(
      `Recibiste un depósito de: $${monto}, Saldo actual: $${this.saldo}, depósito de: ${quienDeposita}, el día ${fechaActual}.`
    );
  }

  //2- Retirar (Método)
  retirar(monto) {
    this.saldo -= monto;
    console.log(
      `Realizaste un retiro de $${monto}, tu saldo actual es de: $${this.saldo}`
    );
  }

  //3- Consulta de saldo (Método)
  consultarSaldo() {
    console.log(`Tu saldo actual es de $${this.saldo}`);
  }
}

//Creamos una nueva cuenta bancaria, a esto se le conoce como instanciar
const cuentaDeKevin = new CuentaBancaria(1234, 100);

//Crear las operaciones, de mientras solo tengo la opción de depositar (1)
cuentaDeKevin.depositar(900, "Esteban", "05/09/2024");
//Vamos a hacer una compra por $300
cuentaDeKevin.retirar(300);
//Vamos a verificar cuanto saldo tengo
cuentaDeKevin.consultarSaldo();

console.log("********************************");
//¿Por qué es un molde una clase?
const cuentaDeCelso = new CuentaBancaria(5545342543, 0);
cuentaDeCelso.depositar(2000, "Ucampers", "05/09/2024");
