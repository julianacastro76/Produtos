import React from 'react'
import './Cadastro.css'

export default function() {


    const submit = (e) =>{
        e.preventDefault();    
        console.log('***Submit');
    }


    return(
        
        <div>
            
            <form onSubmit={submit}>

                <header>
                    <h1> <strong>Cadastro e Listagem de Produtos</strong> </h1>
                </header>

                <label for="produto">Nome do Produto</label>
                <label for="descricao" className="desc">Descrição</label>
                <label for="Preco" className="prec">Preço</label>


                <br></br> 
                <input type="text" className="produto" name="produto" id="produto" placeholder="Digite aqui"></input>           
                <input type="text" className="descricao" name="descicao" id="descricao" placeholder="Digite aqui"></input>
                <input type="number" className="preco" id="preco" name="preco"></input>
                <br/><br />
                
                {/* <input type="button" className="botao" value="Cadastrar"></input> */}
                <button type="submit" className="botao">Cadastrar</button>
                <br></br>
                    
            </form>

    </div>
        
        
        
    )
}
