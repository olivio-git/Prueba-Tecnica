require("dotenv").config();
const mongoose = require("mongoose");

const createSchemaProducto = require("../models/productoModel");
const createSchemaPedido = require("../models/pedidoModel");

const generateDbByUsername = async (userName) => {
  const uri = process.env.MONGO_URI; 

  const AdministratorDb = mongoose.createConnection(uri);

  return new Promise((resolve, reject) => {
    AdministratorDb.on("open", async () => {
      try { 
        const data = await AdministratorDb.db.admin().command({
          listDatabases: 1,
        });

        let exists = data.databases.some(db => db.name === `tenant_${userName}`);
        if (exists) { 
          resolve(true);
        } else {
          let newUri = `${uri}/${process.env.PREFIX_TENANT}${userName}`;   

          let newDb = mongoose.createConnection(newUri);
          newDb.on("open", async () => { 
            createSchemaPedido(newDb);
            createSchemaProducto(newDb); 
            await newDb.db.createCollection('Configuracion');  
            await newDb.close(); 
            resolve(false);
          }); 

          newDb.on("error", (error) => { 
            reject(error);
          });
        }
      } catch (error) { 
        reject(error);
      } finally {
        await AdministratorDb.close(); 
      }
    });

    AdministratorDb.on("error", (error) => { 
      reject(error);
    });
  });
};

module.exports = generateDbByUsername;
