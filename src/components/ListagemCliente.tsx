import React, {Component, useState, ChangeEvent, FormEvent, useEffect} from 'react';
import styles from "../App.module.css"
import { CadastroClienteInterface } from '../Interfaces/CadastroClienteInterface';
import axios from 'axios';

const ListagemCliente = () => {

    const [cliente, setCliente] = useState<CadastroClienteInterface[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [error, setError] = useState("");

    const handleState = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === "pesquisa"){
            setPesquisa(e.target.value);
        }


    }
    const buscar = (e:FormEvent)=>{
        e.preventDefault();

        async function fetchData(){

            try{
                const response = await axios.post('http://127.0.0.1:8000/api/cliente/nome2',
                {pesquisarPorNome2:pesquisa},
                {

                headers:{
                    "Accept":"application/json",
                    "content-Type":"aplication/json"
                }
               }).then(function(response){
                if( response.data.status === true){
                    setCliente(response.data.data);
                }
                else{
                    setCliente([]);
                }
                        
               
               }).catch(function(error){
                console.log(error);
               });
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    }

    useEffect(() =>{
        async function fetchData(){
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/cliente/retornarTodes');
                setCliente(response.data.data);
               

            }catch(error){
                setError("Ocorreu um erro");
                console.log(error);

            }

        }

        fetchData();
    }, []);
    return(
        <div>
            <main className={styles.main}>
                <div className='container'>

                    <div className='col-md mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Pesquisar</h5>
                                <form onSubmit={buscar} className="row"  >
                                    <div className='col-10'>
                                        <input type="text" name='pesquisa'
                                        className='form-control' onChange={handleState}/>
                                    </div>
                                    <div className='col-1'>
                                        <button type='submit' className='btn btn-success'>Pesquisar</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Listagem de Cliente
                            </h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Celular</th>
                                        <th>Email</th>
                                        <th>CPF</th>
                                        <th>DataNascimento</th>
                                        {/* <th>Cidade</th> */}
                                        <th>Estado</th>
                                        <th>Pais</th>
                                        {/* <th>Rua</th> */}
                                        {/* <th>Numero</th> */}
                                        {/* <th>Bairro</th> */}
                                        {/* <th>Cep</th> */}
                                        {/* <th>Complemento</th> */}
                                        {/* <th>Senha</th> */}
                                        


                                    </tr>
                                </thead>
                                <tbody>
                                    {cliente.map(cliente =>(
                                    <tr key={cliente.id}>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.celular}</td>
                                        <td>{cliente.email}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>{cliente.dataNascimento}</td>
                                        {/* <td>{cliente.cidade}</td> */}
                                        <td>{cliente.estado}</td>
                                        <td>{cliente.pais}</td>
                                        {/* <td>{cliente.rua}</td> */}
                                        {/* <td>{cliente.numero}</td> */}
                                        {/* <td>{cliente.bairro}</td> */}
                                        {/* <td>{cliente.cep}</td> */}
                                        {/* <td>{cliente.complemento}</td> */}
                                        {/* <td>{cliente.senha}</td> */}
                  

                                        <td>
                                            <a href="#" className='btn btn-primary btn-sm'>Editar</a>
                                            <a href="#" className='btn btn-danger btn-sm'>Excluir</a>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}

export default ListagemCliente;