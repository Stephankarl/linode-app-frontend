import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Contracts() {

    useEffect(() => {
        const fetch = async () => {
            const contracts = await axios.get('http://localhost:3000/api')
            setContracts(contracts.data)
        }
        fetch()
    }, [])

    const [contracts, setContracts] = useState([])
    
  return (
    <div>
        {contracts.map((contract, i) => (
            <p key={i}>{contract.contractName}</p>
        ))}
    </div>
  )
}
