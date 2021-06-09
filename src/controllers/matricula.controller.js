import { pool } from "../database"
const helpers=require('../libs/helpers');
export const readAllmatricula=async(req,res)=>{
    try {
        const response=await pool.query('select * from matricula');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readmatricula=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('select * from matricula where idmatricula=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const creatematricula=async(req,res)=>{
    try {
        const{username,password}=req.body;
        await pool.query('insert into detalle(creditos,horas,idmatricula)values($1,$2)',[username,password2]);
        return res.status(200).json(`Usuario ${username} creado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const updatematricula=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const{username,password}=req.body;
        await pool.query('update usuario set username=$1,password=$2 where idusuario=$3',[username,password,id]);
        return res.status(200).json(`Usuario ${id} modificado correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const delmatricula=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('delete from usuario where idusuario=$1',[id]);
        return res.status(200).json(`Usuario ${id} elimindo correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}