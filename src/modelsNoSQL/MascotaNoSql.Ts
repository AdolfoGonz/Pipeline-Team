import dynamodb from "../services/dynamodbService";
import joi from "joi";
import { PREFIX_NAME } from "../config";

const MascotaModel = dynamodb.define("mascota", {
  hashKey: "idMascota",
  timestamps: true,
  schema: {
    idMascota: dynamodb.types.uuid(),
    nombre: joi.string().required(),
    tipo: joi.string().required(),
    edad: joi.number().required(),
    raza: joi.string().required(),
  },
  tableName: `Mascota${PREFIX_NAME}`,
});

dynamodb.createTables(function (err) {
  if (err) {
    console.error("Error creating tables: ", err);
  } else {
    console.log("Table Mascota has been created");
  }
});

export default MascotaModel;
