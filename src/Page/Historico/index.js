import { useEffect, useState } from 'react'
import './style.css'
function Historico() {
  const [resList, setRes] = useState([])
  useEffect(() => {
    const local = localStorage.getItem('@listCorte')
    const verLocal = JSON.parse(local) || []
    setRes(verLocal)
  }, [])
  return (
    <div>
      <h1>Historico</h1>
      <div>
        <div>
          Total de cortes: {resList.length}
        </div>
        
      </div>

      {resList.map(item => (
        <div className="cards">
          <div className="cards-dados">
            <div>Nome: {item.data}</div>
            <div>Nome: {item.nomeCliente}</div>
            <div>Valor: {item.valorCorte}</div>
          </div>
          <div className="excluir">Excluir</div>
        </div>
      ))}
    </div>
  )
}
export default Historico
