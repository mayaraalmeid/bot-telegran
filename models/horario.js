const db = require('./db')

const daniel = db.sequelize.define('daniel',{
    hora:{
        type: db.Sequelize.CHAR
    },
    dat:{
        type: db.Sequelize.DATE
    }   
}, {
    freezeTableName: true
  }); 
//daniel.sync();
const marcos = db.sequelize.define('marcos',{
    hora:{
        type: db.Sequelize.CHAR
    },
    dat:{
        type: db.Sequelize.DATE
    }   
}, {
    freezeTableName: true
  });
//marcos.sync();
  const fabiana = db.sequelize.define('fabiana',{
    hora:{
        type: db.Sequelize.CHAR
    },
    dat:{
        type: db.Sequelize.DATE
    }   
}, {
    freezeTableName: true
  });
 //fabiana.sync();
  const pedro = db.sequelize.define('pedro',{
    hora:{
        type: db.Sequelize.CHAR
    },
    dat:{
        type: db.Sequelize.DATE
    }      
}, {
    freezeTableName: true
  });
//pedro.sync(); 
  const priscila = db.sequelize.define('priscila',{
    hora:{
        type: db.Sequelize.CHAR
    },
    dat:{
        type: db.Sequelize.DATE
    }   
}, {
    freezeTableName: true
  });
//priscila.sync(); 
  const janaina = db.sequelize.define('janaina',{
    hora:{
        type: db.Sequelize.CHAR
    },
    dat:{
        type: db.Sequelize.DATE
    }   
}, {
    freezeTableName: true
  });
  //janaina.sync();
  module.exports = {
    janaina,
    daniel,
    marcos,
    pedro,
    priscila,
    fabiana };
  