import React, {Component, useState, ChangeEvent, FormEvent, useEffect}from 'react';
import Header from './HeaderRecuperarSenha';
import Footer from './FooterRecuperarSenha';
import styles from '../App.module.css'
import axios from 'axios';

Const RecuperarSenha = ()=>{

    const[cpf, setCpf] = useState<string>("");
    const[email, setEmail] = useState<string>("");
    const[senha, setSenha] = useState<string>();


    const RecuperarSenha = (e:FormEvent) => {
        e.preventDefault();

        const dados ={
            cpf: cpf,
            email: email,
            senha: senha,
            
            
        }
        axios.post('http://127.0.0.1:8000/api/esqueciSenha', dados,
        {
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
    }
}