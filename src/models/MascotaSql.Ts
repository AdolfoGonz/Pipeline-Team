import { Model, Sequelize } from "sequelize";

interface MascotaAttributes {
  idMascota: number;
  nombre: string;
  tipo: string;
  edad: number;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Mascota extends Model<MascotaAttributes> implements MascotaAttributes {
    public idMascota!: number;
    public nombre!: string;
    public tipo!: string;
    public edad!: number;
  }

  Mascota.init(
    {
      idMascota: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Mascota",
    }
  );

  // Hook para crear registros iniciales después de que la tabla se haya creado
  Mascota.afterSync(async () => {
    try {
      // Verifica si la tabla está vacía
      const existenRegistros = await Mascota.findOne();
      if (!existenRegistros) {
        // Crea registros iniciales si la tabla está vacía
        await Mascota.create({ idMascota: 1, nombre: "Fido", tipo: "Perro", edad: 3 });
        await Mascota.create({ idMascota: 2, nombre: "Miau", tipo: "Gato", edad: 2 });
        await Mascota.create({ idMascota: 3, nombre: "Nemo", tipo: "Pez", edad: 1 });
        console.log("Registros iniciales creados correctamente.");
      } else {
        console.log("La tabla de Mascota ya contiene registros.");
      }
    } catch (error) {
      console.error("Error al crear registros iniciales:", error);
    }
  });

  return Mascota;
};
