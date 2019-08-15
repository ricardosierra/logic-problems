
export default class Miojo {
    constructor() {
      this.id = 'miojinho_1';
    }

    /**
     * Getters e Setters
     */
    set timeToCookMiojo(timeToCookMiojo) {
      this._timeToCookMiojo = timeToCookMiojo.charAt(0).toUpperCase() + timeToCookMiojo.slice(1);
    }
    get timeToCookMiojo() {
      return this._timeToCookMiojo;
    }
    set timeAmpulhetaA(timeAmpulhetaA) {
      this._timeAmpulhetaA = timeAmpulhetaA.charAt(0).toUpperCase() + timeAmpulhetaA.slice(1);
    }
    get timeAmpulhetaA() {
      return this._timeAmpulhetaA;
    }
    set timeAmpulhetaB(timeAmpulhetaB) {
      this._timeAmpulhetaB = timeAmpulhetaB.charAt(0).toUpperCase() + timeAmpulhetaB.slice(1);
    }
    get timeAmpulhetaB() {
      return this._timeAmpulhetaB;
    }


    /**
     * Valida com as seguintes regras:
     * - As ampulatas precisam ser maiores que o tempo do miojo (ou 3 nao ficou tao claro)
     * @param {*} timeAmpulhetaA 
     * @param {*} timeAmpulhetaB 
     * @param {*} miojo 
     */
    validate = (timeAmpulhetaA, timeAmpulhetaB, miojo) => {
        
        if (timeAmpulhetaA <= miojo || timeAmpulhetaB <= miojo) {
            errorMsg(`Suas ampuletas acabam mais rapido que esse miojinho! :'( !`);
            return false;
        }
        
        if (miojo % mdc(timeAmpulhetaA, timeAmpulhetaB)) {
            errorMsg('IMPOSSIVEL!');
            return false;
        }

        return true;
    }

    /**
     * Envia mensagem para output
     * @param string messenger 
     */
    msg = (messenger) => {
        console.log(messenger);
    }

    /**
     * @param string messenger 
     */
    errorMsg = (messenger) => {
        msg(messenger);
        return false;
    }

    /**
     * Retorna o MDC de 2 numeros
     * @param integer numberInit 
     * @param integer numberEnd 
     */
    mdc = (numberInit, numberEnd) => {
        let remain;
        do {
            remain = numberInit % numberEnd;
            numberInit = numberEnd;
            numberEnd = remain;
        } while (remain != 0);
        return numberInit;
    }

    /**
     * Tempo Restante restante para a primeira ampuleta acabar
     */
    returnTimeToFirstFinish = (tempoA, tempoB) => {
        if (tempoA > tempoB) {
            return tempoB;
        }
        return tempoA;
    }

    /**
     * Retorna novo valor para Calculo de Ampuleta
     */
    resolveDiff = (ampuleta, ampuletaConcorrente) => {
         if (ampuleta > ampuletaConcorrente) {
            return ampuleta - ampuletaConcorrente;
        }
        return ampuleta;
    }


    returnTotalTime = () => {
        let waitTotalTime = 0;
        let calculoAmpulhetaA = timeAmpulhetaA,
        calculoAmpulhetaB = timeAmpulhetaB,

        if (!validate(timeAmpulhetaA, timeAmpulhetaB, timeToCookMiojo)){
            return false;
        }
    
        // Força Bruta @todo Tentar achar solucao melhor
        while (true) {
            waitTotalTime + returnTimeToFirstFinish(calculoAmpulhetaA, calculoAmpulhetaB);
            if (timeToCookMiojo == returnTimeToFirstFinish(calculoAmpulhetaA, calculoAmpulhetaB)) {
                return waitTotalTime;
            }
            calculoAmpulhetaA = resolveDiff(calculoAmpulhetaA, calculoAmpulhetaB);
            calculoAmpulhetaB = resolveDiff(calculoAmpulhetaB, calculoAmpulhetaA);
        }
        
        return false;
    }
  }