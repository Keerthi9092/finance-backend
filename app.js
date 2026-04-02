const express = require("express");
const app = express();

// DB
const sequelize = require("./config/db");

// Models
const User = require("./models/User");
const Record = require("./models/Record");

// Routes
const userRoutes = require("./routes/userRoutes");
const recordRoutes = require("./routes/recordRoutes");
// ✅ Middleware (must be before routes)
app.use(express.json());

// ✅ Debug (to check routes loading)
console.log("User routes loaded...");
console.log("Record routes loaded...");
const dashboardRoutes = require("./routes/dashboardRoutes");
// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);


// ✅ Direct test route (VERY IMPORTANT for debugging)
app.get("/api/users/test", (req, res) => {
    res.send("User route working");
});

// Relationships
User.hasMany(Record);
Record.belongsTo(User);

// Root test
app.get("/", (req, res) => {
    res.send("Finance Backend Running...");
});

// Start server AFTER DB connection
async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Database connected");

        await sequelize.sync({ alter: true });
        console.log("Tables created");

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });

    } catch (error) {
        console.error("Error starting server:", error);
    }
}

startServer();
