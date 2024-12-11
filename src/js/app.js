export class ErrorRepository {
    constructor() {
        this.map = new Map()
    }

    translate(code) {
        if (this.map.has(code)) {
            return this.map.get(code)
        } else {
            throw new Error('Unknown error')
        }
    }

    add(code, message) {
        if (this.map.has(code)) {
            throw new Error('Такая ошибка уже есть')
        }

        if (typeof message !== 'string' || typeof code !== 'number') {
            throw new Error('Неверный тип данных')
        }

        this.map.set(code, message)
    }
}