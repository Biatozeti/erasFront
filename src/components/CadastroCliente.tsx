import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../App.module.css'
import axios from 'axios';


const CadastroCliente = () => {

    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<number>();
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<number>();
    const [dataNascimento, setdataNascimento] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<number>();
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<number>();
    const [complemento, setComplemento] = useState<string>("");
    const [senha, setSenha] = useState<number>();
    



    const CadastroCliente= (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            nome: nome,
            celular: celular,
            email: email,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            senha: senha
            

        }
        console.log(dados)
        axios.post('http://10.137.9.131:8000/api/store',
            dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                window.location.href = "/listagem"
            }).catch(function (error) {
                console.log(error);
                console.log(dados);
            });

    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "celular") {
            setCelular(e.target as any);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "cpf") {
            setCpf(e.target as any);
        }
    
         if (e.target.name === "dataNascimento") {
        setdataNascimento(e.target as any);
       }
       if (e.target.name === "cidade") {
        setCidade(e.target.value);
       }
       if (e.target.name === "estado") {
        setEstado(e.target.value);
       }
       if (e.target.name === "pais") {
        setPais(e.target.value);
       }
       if (e.target.name === "rua") {
        setRua(e.target.value);
       }
       if (e.target.name === "numero") {
        setNumero(e.target as any);
       }
       if (e.target.name === "bairro") {
        setBairro(e.target.value);
       }
       if (e.target.name === "cep") {
        setCep(e.target as any);
       }
       if (e.target.name === "complemento") {
        setComplemento(e.target.value);
       }
       if (e.target.name === "senha") {
        setSenha(e.target as any);



    }


    return (
        <div>
            <Header />
            <main className={styles.main} >
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'> Cadastrar Servico</h5>
                            <form onSubmit={CadastroCliente} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text"
                                        name='nome'
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="celular" className='form-label'>Celular</label>
                                    <input type='text'
                                        name='celular'
                                        className='form-control'
                                        onChange={handleState}
                                        required />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label'>Email</label>
                                    <input type="email"
                                        name='email'
                                        className='form-control'
                                        onChange={handleState}
                                        required />

                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="cpf"
                                        name="cpf"
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />
                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cidade" className='form-label'>Cidade</label>
                                    <input type="cidade"
                                        name="cidade"
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />

                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="estado" className='form-label'>Estado</label>
                                    <input type="estado"
                                        name="estado"
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />
                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="pais" className='form-label'>Pais</label>
                                    <input type="pais"
                                        name="pais"
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />
                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="rua" className='form-label'>Rua</label>
                                    <input type="rua"
                                        name="rua"
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />

                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="numero" className='form-label'>Numero</label>
                                    <input type="numero"
                                        name="numero"
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />
                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="bairro" className='form-label'>Bairro</label>
                                    <input type="bairro"
                                        name="bairro"
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />
                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cep" className='form-label'>Cep</label>
                                    <input type="cep"
                                        name="cep"
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />
                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="complemento" className='form-label'>Complemento</label>
                                    <input type="complemento"
                                        name="complemento"
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />
                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="senha" className='form-label'>Senha</label>
                                    <input type="senha"
                                        name="senha"
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />

                                </div>
                                <div className='col-12'>
                                    <button
                                        type='submit'
                                        className='btn btn-success btn-sm'>Cadastrar</button>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
}
}

export default CadastroCliente;
 