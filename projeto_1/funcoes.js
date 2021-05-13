const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
	return new Promise((resolve, reject) => {
		try {
			let arquivos = fs.readdirSync(caminho)
			arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))

			resolve(arquivos)
		} catch (e) {
			reject(e)
		}
	})
}

function lerArquivo(caminho) {
	return new Promise((resolve, reject) => {
		try {
			const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
			resolve(conteudo.toString())
		} catch (e) {
			reject(e)
		}
	})
}

function lerArquivos(caminhos) {
	return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(padraoTextual) {
	return function (array) {
		return array.filter(el => el.endsWith(padraoTextual))
	}
}

function removerElementosSeVazio(array) {
	return array.filter(el => el.trim())
}

function removerElementosSeIncluir(padraoTextual) {
	return function (array) {
		return array.filter(el => !el.includes(padraoTextual))
	}
}

function removerElementosApenasNumeros(array) {
	return array.filter(el => {
		// removendo espaços em branco
		const num = parseInt(el.trim())
		// quando o num for string, retorna NaN
		// quando o num for numero, retorna o número

		// retorna quando não tem um valor numérico
		return num !== num
	})
}

function removerSimbolos(simbolos) {
	return function (array) {
		return array.map(el => {
			let textoSemSimbolos = el

			simbolos.forEach(simbolo => {
				textoSemSimbolos = textoSemSimbolos.split(simbolo).join('')
			})

			return textoSemSimbolos
		})
	}
}

function mesclarElementos(array) {
	return array.join(' ')
}

function separarTextoPor(simbolo) {
	return function (texto) {
		return texto.split(simbolo)
	}
}

module.exports = {
	lerDiretorio,
	lerArquivo,
	lerArquivos,
	elementosTerminadosCom,
	removerElementosSeVazio,
	removerElementosSeIncluir,
	removerElementosApenasNumeros,
	removerSimbolos,
	mesclarElementos,
	separarTextoPor,
}
