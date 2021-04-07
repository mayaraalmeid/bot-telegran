
const { Telegraf } = require('telegraf')

const bot1 = new Telegraf('1600555775:AAFJB8rQK3AF5XtprGav5shArGOUK6KEFUo')



//conexao com bd
const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "bottelegram"
})

conn.connect(function(err){
    if(err){
        throw err;
    }
    console.log("conectado");
    
      conn.query("select distinct datas.data from  daniel   join datas on  daniel.id_data = datas.id_data where status = '0'", function(err, resultado, fields){
        if(err){
            throw err;
        }
        //console.log(resultado);
        datas = [];
        
        resultado.forEach(item => {
            datas.push({
                id: item.id,
               data: item.data
                 
            })   
        }) 

    })
    conn.query("select hora, id from  daniel as a inner join horario as b on a.id_hora = b.Id_hora where id_data = '1' and status = '0' ", function(err, resultado, fields){
        if(err){
            throw err;
        }
        
        horas = [];
        
        resultado.forEach(item => {
            horas.push({
                id: item.id,
                hora: item.hora
                
            })   
        }) 

    })
    
})

//variaveis
const help=`
Selecione o dia da consulta
/hora
`;
const opcao = `
/marcar - Para marcação de consultas
/consultas - Para ver consultas marcadas para você
`;
const area=`
/pediatria - Para Pediatria
/clinicogeral - Para Clinico Geral
/cardiologia - Para Cardiologia
`;

  

//iniciando Bot
bot1.start(ctx =>{
    ctx.reply("Seja Bem vindo a Clinica Boa Saúde " + `${ctx.message.from.first_name}`);
    bot1.telegram.sendMessage(ctx.chat.id,"Como podemos lhe ajudar "+ opcao )
   
})
//marcação de consultas
bot1.command('marcar', ctx =>{
    bot1.telegram.sendMessage(ctx.chat.id,"Para qual area o(a) senhor(a) gostaria de marcar a consulta? "+area)
    
})
bot1.command('pediatria', ctx => {
    ctx.reply('Por Qual medico deseja ser atendido(a)?\n' + 
    `/daniel - Para o Dr. Daniel Silva 
    /marcos - Para o Dr. Marcos Rocha`) 
})
bot1.command('daniel', ctx=>{
    
        let dts = `lista de datas: \n`;
        datas.forEach(item=>{
        
        dts += `${item.data}\n`;
        
        })
        bot1.telegram.sendMessage(ctx.chat.id,"Em qual dia quer a consulta? "+ dts)
        ctx.reply( 
    `/07 - 07/06/2021 
    /09 - 09/06/2021 
    /11 - 11/06/2021
    `)
     

})  
bot1.command('07' , ctx =>{
     let horario = `lista de horarios: \n`;
    horas.forEach(item=>{    
    horario += `${item.id}. ${item.hora}\n`;
    }) 
    ctx.reply(horario);
    ctx.reply("para escolher o horario use /escolher id hora desejada");
}) 
bot1.command('escolher', ctx=> {
    let input = ctx.message.text.split(" ");
    if(input.length != 3){

        return;
    }
   // var  id = input[1];
    let id = input[1];
    let nome = input[2];
    var  sql = `UPDATE daniel SET status = '1', nome = '${nome}' WHERE id = '${id}' and id_data = 1 `;
        
    conn.query(sql, function(err, resultado){
        if(err){
          throw err;
            } 
        
        ctx.reply(`Consulta marcada ${nome}`);
        
        })
        
    })

bot1.command('09' , ctx =>{
        let horario = `lista de horarios: \n`;
       horas.forEach(item=>{    
       horario += `${item.id}. ${item.hora}\n`;
       }) 
       ctx.reply(horario);
       ctx.reply("para escolher o horario use /escolher id hora desejada");
   }) 
   bot1.command('escolher', ctx=> {
       let input = ctx.message.text.split(" ");
       if(input.length != 3){
   
           return;
       }
      // var  id = input[1];
       let id = input[1];
       let nome = input[2];
       var  sql = `UPDATE daniel SET status = '1', nome = '${nome}' WHERE id = '${id}' and id_data = '17'`;
           
       conn.query(sql, function(err, resultado){
           if(err){
             throw err;
               } 
           
           ctx.reply(`Consulta marcada ${nome}`);
           
           })
           
       })
bot1.command('consultas', ctx=>{
       let input = ctx.message.text.split(" ");
       if(input.length != 3){
   
        return;
    }
    // var  id = input[1];
       
        let nome = input[1];
        var  sql = `select hora from  daniel as a inner join horario as b on a.id_hora = b.Id_hora where nome = '${nome}'`;
            
        conn.query(sql, function(err, resultado){
            if(err){
            throw err;
                } 
            console.log(resultado);
           // ctx.reply(resultado);
            
            })
            
   })
bot1.launch();
