
const express =require('express');
const { toDataURL }=require('qrcode');
const port =4000;
const app=express();
app.get('/sindhu',(req, res) =>
{
    const url='https://github.com/topics/login';
    toDataURL(url,(err,qrcode)=>{
        if(err)
        {
            res.status(500).send("internal server error");
        }
        else{
            res.send(`
                    <body>QR Code Generator
                    <img src=" ${ qrcode} " alt="QR Code">
                    </body>`
                );
        }
    });
});
app.listen(port,()=>{
    console.log(`Server is runnung on port ${port}`);
});