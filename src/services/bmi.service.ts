// src/services/bmi.service.ts
export class BmiService {
  calculate(weight: number, height: number) {
    return Math.round((weight / (height * height)) * 100) / 100;
  }
}
