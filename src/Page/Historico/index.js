import { useEffect, useState } from 'react'
import './style.css'
function Historico() {
  const [resList, setRes] = useState([])
  useEffect(() => {
    const local = localStorage.getItem('@listCorte')
    const verLocal = JSON.parse(local) || []
    setRes(verLocal)
  }, [])

  const mapValor = resList.map(item => {
    return parseFloat(item.valorCorte)
  })
  const sum = mapValor.reduce((sum, total) => sum + total, 0)

  function excluir(id) {
    const filtro = resList.filter(item => {
      return item.nomeCliente !== id
    })
    setRes(filtro)
    const newLocal = localStorage.setItem('@listCorte', JSON.stringify(filtro))
  }

  const [resPesq, setPesq] = useState([])
  function pesquisar(e) {
    const filtrar = resList.filter(item => {
      return item.nomeCliente.toLowerCase() === e.toLowerCase()
    })
    setPesq(filtrar)
  }

  return (
    <div>
      <h1>Historico</h1>
      <div className="dados">
        <div className="contagem">Total de cortes: {resList.length}</div>
        <div className="valor">Valor: R$: {sum} </div>
      </div>
      <p>
        <input
          className="input-pesquisar"
          type="text"
          placeholder="Pesquisar nome"
          onChange={e => pesquisar(e.target.value)}
        />
      </p>

      <div>
        {resPesq.length ? (
          <div>
            {resPesq.map(item => (
              <div className="cards" key={item.id}>
                <div className="cards-dados">
                  <div>Data: {item.data}</div>
                  <div>Nome: {item.nomeCliente}</div>
                  <div>Valor: {item.valorCorte}</div>
                </div>
                <div
                  className="excluir"
                  onClick={e => excluir(item.nomeCliente)}
                >
                  Excluir
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {resList.map(item => (
              <div className="cards" key={item.id}>
                <div className="cards-dados">
                  <div>Data: {item.data}</div>
                  <div>Nome: {item.nomeCliente}</div>
                  <div>Valor: {item.valorCorte}</div>
                </div>
                <div
                  className="excluir"
                  onClick={e => excluir(item.nomeCliente)}
                >
                  Excluir
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default Historico
