import { useEffect, useState } from 'react'
import './style.css'
function Historico() {
  const [resList, setRes] = useState([])
  useEffect(() => {
    const local = localStorage.getItem('@listCorte')
    const verLocal = JSON.parse(local) || []
    setRes(verLocal)
  }, [])

  function excluir(id) {
    const filtro = resList.filter(item => {
      return item.nomeCliente !== id
    })
    setRes(filtro)
    const newLocal = localStorage.setItem('@listCorte', JSON.stringify(filtro))
  }

  return (
    <div>
      <h1>Historico</h1>
      <div>
        <div>Total de cortes: {resList.length}</div>
      </div>

      {resList.map(item => (
        <div className="cards" key={item.id}>
          <div className="cards-dados">
            <div>Nome: {item.data}</div>
            <div>Nome: {item.nomeCliente}</div>
            <div>Valor: {item.valorCorte}</div>
          </div>
          <div className="excluir" onClick={e => excluir(item.nomeCliente)}>
            Excluir
          </div>
        </div>
      ))}
    </div>
  )
}
export default Historico
