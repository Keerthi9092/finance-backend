I chose Node.js with Express for building the backend due to its simplicity, flexibility, and strong ecosystem for API development. Express allows quick setup of REST APIs and middleware-based architecture, which is useful for implementing authentication and role-based access control.

For data persistence, I used MySQL with Sequelize ORM. Sequelize provides an abstraction over SQL queries, making it easier to manage models, relationships, and database operations while keeping the code clean and maintainable.

JWT (JSON Web Token) was used for authentication because it is stateless and scalable. It allows secure communication between client and server without maintaining session data on the server.

The project follows a modular structure with separate folders for routes, controllers, models, middleware, and configuration. This separation improves readability and maintainability.

Role-based access control was implemented using custom middleware to restrict actions based on user roles such as admin, analyst, and viewer.

For simplicity and clarity, I focused on implementing core features like CRUD operations, filtering, and dashboard summaries rather than adding unnecessary complexity. Some advanced features like pagination and category-wise analytics were not implemented to keep the solution clean and focused on requirements.

Overall, the design prioritizes clarity, maintainability, and correctness over complexity.

