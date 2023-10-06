module.exports = (sequelize, DataTypes) => {
    const Sale_Commission = sequelize.define("Sale_Commission", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        total_sale_amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        commission: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        deleted_At: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        }
    },
        {
            paranoid: true,
            timestamps: true,
            deletedAt: 'deleted_At'
        }
    )
    return Sale_Commission
}