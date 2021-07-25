import React from 'react'
import './Lista.css'

import Cadastro from '../cadastro/Cadastro'

export default function(){

    return(
        <div>
            <br></br>
            <table className="tabela">
            <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
            </tr>

            <tr>
                <td>Iphone</td>
                <td>Celular</td>
                <td>R$ 4.000,00</td>
            </tr>
            
            <tr>
                <td>Samsung</td>
                <td>Celular</td>
                <td>R$ 4.500,00</td>
            </tr>

            <tr>
                <td>Monitor 29'</td>
                <td>Informatica</td>
                <td>R$ 2.500,00</td>
            </tr>

            <tr>
                <td>Teclado</td>
                <td>Informatica</td>
                <td>R$ 150,00</td>
            </tr>
            

        </table>

        </div>


    )
}