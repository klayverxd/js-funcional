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

function elementosTerminadosCom(array, padraoTextual) {
	return array.filter(el => el.endsWith(padraoTextual))
}

function removerSeVazio(array) {
	return array.filter(el => el.trim())
}

function removerSeIncluir(array, padraoTextual) {
	return array.filter(el => !el.includes(padraoTextual))
}

function removerApenasNumeros(array) {
	return array.filter(el => {
		// removendo espaços em branco
		const num = parseInt(el.trim())
		// quando o num for string, retorna NaN
		// quando o num for numero, retorna o número

		// retorna quando não tem um valor numérico
		return num !== num
	})
}

module.exports = {
	lerDiretorio,
	lerArquivo,
	lerArquivos,
	elementosTerminadosCom,
	removerSeVazio,
	removerSeIncluir,
	removerApenasNumeros,
}
