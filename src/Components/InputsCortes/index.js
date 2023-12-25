import { useEffect, useState, useRef } from 'react'
import './style.css'
function InputsCortes() {
  // Refs para os elementos de input
  const nomeClienteRef = useRef(null)
  const valorCorteRef = useRef(null)

  const [listCortes, setList] = useState([])

  const dataFuso = new Date()
  const data = new Date()
  const diminuirHoras = 3

  data.setHours(data.getHours() - diminuirHoras)
  console.log(data)

  // Função para manipular o envio do formulário
  function enviar() {
    // Acessando diretamente os valores dos inputs
    const nomeCliente = nomeClienteRef.current.value
    const valorCorte = valorCorteRef.current.value

    // Faça o que precisar com os valores dos inputs
    alert(` 
      Nome do Cliente: ${nomeCliente}\n
      Valor do Corte: ${valorCorte}\n 
      Data: ${dataFuso} \n
      Enviado com sucesso !`)

    const createLocal = localStorage.getItem('@listCorte')
    const listCortes = JSON.parse(createLocal) || []

    const novoCorte = {
      nomeCliente: nomeCliente,
      valorCorte: valorCorte,
      data: data
    }
    listCortes.push(novoCorte)
    localStorage.setItem('@listCorte', JSON.stringify(listCortes))
  }

  return (
    <div id="card-input">
      <h1>Lançar Cortes</h1>
      <div className="inputs">
        {/* Input para o Nome do Cliente */}
        <input type="text" placeholder="Nome do cliente" ref={nomeClienteRef} />

        {/* Input para o Valor do Corte */}
        <input type="text" placeholder="Valor do Corte" ref={valorCorteRef} />
      </div>

      {/* Botão de Enviar */}
      <div onClick={enviar} className="enviar">
        Enviar
      </div>

      {listCortes.map(item => (
        <div>
          <div>{item.nomeCliente}</div>
          <div>{item.valorCorte}</div>
        </div>
      ))}
    </div>
  )
}

export default InputsCortes
