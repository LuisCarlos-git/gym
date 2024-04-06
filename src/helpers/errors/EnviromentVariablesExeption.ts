export class EnviromentVariablesExeption extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EnviromentVariablesExeption'
  }
}
