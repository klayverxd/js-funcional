const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

fn.lerDiretorio(caminho)
	.then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
	.then(arquivosSRT => fn.lerArquivos(arquivosSRT))
	.then(console.log)
