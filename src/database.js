import{ Pool } from 'pg'

export const pool = new Pool({
    host:'ec2-54-158-232-223.compute-1.amazonaws.com',
    user: 'rkayuyffxgjygb',
    password: '602fbacf7bf035951b7ab549e5c0bb8159c313aecf32648fe24c96e23c9ca79d',
    database:'d7a000v06cj3kc',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})