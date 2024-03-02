const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

class Database {
  constructor(uri, options) {
    this.uri = uri;
    this.options = options;
  }

  // connect to monogodb server
  async connect() {
    try {
      await mongoose.connect(this.uri, this.options);
      console.log(
        `Connected to database ✅ - ${mongoose.connection.db.databaseName}`
      );
    } catch (error) {
      throw error;
    }
  }

  // disconnect monogodb server
  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log(
        `❌ Disconnected from database: ${mongoose.connection.db.databaseName}`
      );
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Database;
