import { pool } from "../database"
const helpers=require('../libs/helpers');
export const readAlldetalle=async(req,res)=>{
    try {
        const response=await pool.query('select * from detalle');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readdetalle=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('select * from detalle where iddetalle=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const createdetalle=async(req,res)=>{
    try {
        const{creditos,horas,idcurso,idmatricula}=req.body;
        await pool.query('insert into detalle(creditos,horas,idcurso,idmatricula)values($1,$2,$3,$4)',[creditos,horas,idcurso,idmatricula]);
        return res.status(200).json(`Detalle generada correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const updatedetalle=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const{creditos,horas,idcurso,idmatricula}=req.body;
        await pool.query('update detalle set creditos=$1,horas=$2,idcurso=$3,idmatricula=$4 where iddetalle=$5',[creditos,horas,idcurso,idmatricula,id]);
        return res.status(200).json(`Detalle actualizada correctamente...`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const deldetalle=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('delete from detalle where iddetalle=$1',[id]);
        return res.status(200).json(`Detalle elimindo correctamente...`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}