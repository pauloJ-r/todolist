module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'to-do-list',
    define: {
        timestamps: true,
        underscored: true,
    }
}